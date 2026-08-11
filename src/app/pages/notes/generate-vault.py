#!/usr/bin/env python3
"""Regenerate notes.data.ts + stub markdown from vault.md (01–07 only).

Usage:
  python3 src/app/pages/notes/generate-vault.py

Skips 00_System and root loose files. Numeric prefixes become `order`;
display names have prefixes stripped (01_, Part_02_, 03-, …).
Existing markdown files larger than 80 bytes are left untouched.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[4]
VAULT_MD = Path(__file__).resolve().parent / "vault.md"
DATA_TS = Path(__file__).resolve().parent / "notes.data.ts"
PUBLIC_NOTES = ROOT / "public" / "notes"

INCLUDE_TOP = re.compile(r"^(0[1-7])_")


def depth_of(line: str) -> int:
    m = re.match(r"^(│   |    )*([├└]── )", line)
    if not m:
        return 0
    return len(m.group(0)) // 4


def name_of(line: str) -> str:
    return re.sub(r"^(│   |    )*[├└]── ", "", line).rstrip()


def parse_order_and_label(raw: str) -> tuple[int, str]:
    stem = raw[:-3] if raw.endswith(".md") else raw
    m = re.match(r"^Part_(\d+)_(.+)$", stem)
    if m:
        return int(m.group(1)), m.group(2).replace("_", " ").replace("-", " ")
    m = re.match(r"^(\d+)[_-](.+)$", stem)
    if m:
        return int(m.group(1)), m.group(2).replace("_", " ").replace("-", " ")
    return 10_000, stem.replace("_", " ").replace("-", " ")


def slugify(raw: str) -> str:
    stem = raw[:-3] if raw.endswith(".md") else raw
    s = re.sub(r"[^a-z0-9]+", "-", stem.lower())
    return s.strip("-")


def parse_tree(text: str) -> list[dict]:
    lines: list[str] = []
    in_tree = False
    for line in text.splitlines():
        if line.strip() == ".":
            in_tree = True
            continue
        if in_tree and re.match(r"\d+ directories,", line.strip()):
            break
        if in_tree and (line.startswith("├") or line.startswith("└") or line.startswith("│")):
            lines.append(line)

    root_children: list[dict] = []
    stack: list[tuple[int, dict]] = []

    for line in lines:
        name = name_of(line)
        if not name or name.endswith(".canvas"):
            continue
        d = depth_of(line)
        is_file = name.endswith(".md")
        order, label = parse_order_and_label(name)
        node = {
            "raw": name,
            "order": order,
            "name": label,
            "type": "note" if is_file else "folder",
            "children": [] if not is_file else None,
        }
        while stack and stack[-1][0] >= d:
            stack.pop()
        if not stack:
            if not INCLUDE_TOP.match(name):
                continue
            root_children.append(node)
            stack.append((d, node))
        else:
            parent = stack[-1][1]
            if parent["type"] != "folder":
                continue
            parent["children"].append(node)
            if not is_file:
                stack.append((d, node))
    return root_children


def assign_ids(nodes: list[dict], path_parts: list[str]) -> list[dict]:
    result = []
    for node in sorted(nodes, key=lambda n: (n["order"], n["name"].lower())):
        slug = slugify(node["raw"])
        parts = path_parts + [slug]
        node_id = "/".join(parts)
        if node["type"] == "note":
            result.append(
                {
                    "type": "note",
                    "id": node_id,
                    "name": node["name"],
                    "title": node["name"],
                    "order": node["order"],
                    "contentSrc": "/notes/" + "/".join(parts) + ".md",
                    "raw": node["raw"],
                }
            )
        else:
            result.append(
                {
                    "type": "folder",
                    "id": node_id,
                    "name": node["name"],
                    "order": node["order"],
                    "children": assign_ids(node["children"] or [], parts),
                    "raw": node["raw"],
                }
            )
    return result


def to_app_node(n: dict) -> dict:
    if n["type"] == "note":
        return {
            "type": "note",
            "id": n["id"],
            "name": n["name"],
            "title": n["title"],
            "order": n["order"],
            "contentSrc": n["contentSrc"],
        }
    return {
        "type": "folder",
        "id": n["id"],
        "name": n["name"],
        "order": n["order"],
        "children": [to_app_node(c) for c in n["children"]],
    }


def write_stubs(nodes: list[dict]) -> tuple[int, int]:
    created = skipped = 0
    for n in nodes:
        if n["type"] == "note":
            path = PUBLIC_NOTES / Path(n["contentSrc"].lstrip("/").removeprefix("notes/"))
            # contentSrc is /notes/... so after lstrip / we have notes/...
            path = ROOT / "public" / n["contentSrc"].lstrip("/")
            path.parent.mkdir(parents=True, exist_ok=True)
            if path.exists() and path.stat().st_size > 80:
                skipped += 1
                continue
            title = n["title"]
            path.write_text(
                f"# {title}\n\n"
                f"_{title}_ — stub note. Replace this file with your Obsidian markdown "
                f"when you migrate the vault.\n"
            )
            created += 1
        else:
            c, s = write_stubs(n["children"])
            created += c
            skipped += s
    return created, skipped


def main() -> None:
    text = VAULT_MD.read_text()
    tree = assign_ids(parse_tree(text), [])
    app_tree = [to_app_node(n) for n in tree]
    payload = json.dumps(app_tree, indent=2)
    DATA_TS.write_text(
        "import { NoteNode } from './notes.model';\n\n"
        "/**\n"
        " * Vault tree migrated from Obsidian (01–07 only; 00_System skipped).\n"
        " * Display names have numeric prefixes stripped; `order` preserves sort.\n"
        " * Replace stub markdown under public/notes/ with your real vault files.\n"
        " * Regenerate: python3 src/app/pages/notes/generate-vault.py\n"
        " */\n"
        f"export const NOTE_VAULT: NoteNode[] = {payload};\n"
    )
    created, skipped = write_stubs(tree)
    print(f"Wrote {DATA_TS}")
    print(f"Stubs created={created} skipped={skipped}")
    print(f"Top-level folders: {[n['name'] for n in tree]}")


if __name__ == "__main__":
    main()
