"use client";

import { useState } from "react";

type CodeBlockProps = {
  title: string;
  code: string;
};

export function CodeBlock({ title, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  }

  return (
    <section className="bg-surface-container rounded-lg border border-white/5 overflow-hidden">
      <div className="bg-surface-container-high px-4 py-2 border-b border-white/5 flex justify-between items-center font-code-sm text-code-sm text-on-surface-variant">
        <span>{title}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="hover:text-on-surface flex items-center gap-1 transition-colors"
        >
          <span className="material-symbols-outlined text-[14px]">
            {copied ? "check" : "content_copy"}
          </span>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="p-4 font-code-sm text-code-sm overflow-x-auto text-on-surface-variant leading-relaxed whitespace-pre-wrap">
        {code}
      </pre>
    </section>
  );
}
