"use client";

import type { ReactNode } from "react";
import type { CodeSnippet, Link } from "../../types";
import { linkIcon, linkLabel } from "../../lib/link-defaults";
import { CodeBlock } from "./CodeBlock";

type CodeSnippetLinkProps = {
  snippet?: CodeSnippet;
  link?: Link;
  children: ReactNode;
};

export function CodeSnippetLink({
  snippet,
  link,
  children,
}: CodeSnippetLinkProps) {
  const content = link ? (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-transparent hover:border-primary-container/30 hover:bg-primary-container/5 transition-colors -mx-2 px-2 py-1"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">{children}</div>
        <span
          className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary-container shrink-0 mt-0.5"
          title={linkLabel(link)}
        >
          {linkIcon(link)}
        </span>
      </div>
    </a>
  ) : (
    <div>{children}</div>
  );

  return (
    <div className="space-y-3">
      {content}
      {snippet ? (
        <CodeBlock title={snippet.language} code={snippet.code} />
      ) : null}
    </div>
  );
}
