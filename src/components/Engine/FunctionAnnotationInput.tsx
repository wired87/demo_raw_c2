"use client";

/**
 * Prompt: Functional annotations section — allow free input (separated by comma
 * or enter) to add tags to the functional annotations list and render live changes.
 */
import { useCallback, useState } from "react";
import { CfgTags } from "@/components/Engine/CfgTags";
import { PARCHMENT } from "@/lib/parchment-theme";

type Props = {
  tags: string[];
  onTagsChange: React.Dispatch<React.SetStateAction<string[]>>;
  onRemove: (tag: string) => void;
  accentHex?: string;
  disabled?: boolean;
};

/** Merge new tokens into tag list without duplicates. */
function mergeTags(existing: string[], incoming: string[]): string[] {
  const cleaned = incoming.map((s) => s.trim()).filter(Boolean);
  if (!cleaned.length) return existing;
  return Array.from(new Set([...existing, ...cleaned]));
}

export function FunctionAnnotationInput({ tags, onTagsChange, onRemove, accentHex, disabled }: Props) {
  const [draft, setDraft] = useState("");

  const appendTags = useCallback(
    (incoming: string[]) => {
      onTagsChange((prev) => mergeTags(prev, incoming));
    },
    [onTagsChange],
  );

  // CHAR: comma in flight → commit completed segments immediately (live tag list update)
  const handleChange = (raw: string) => {
    if (!raw.includes(",")) {
      setDraft(raw);
      return;
    }
    const parts = raw.split(",");
    const complete = parts.slice(0, -1);
    const remainder = parts[parts.length - 1] ?? "";
    appendTags(complete);
    setDraft(remainder);
  };

  const commitDraft = () => {
    const token = draft.trim();
    if (!token) return;
    appendTags([token]);
    setDraft("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      commitDraft();
    }
  };

  const handleBlur = () => {
    if (draft.includes(",")) {
      handleChange(draft);
      return;
    }
    commitDraft();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <CfgTags
        title="Functional annotations"
        tags={tags}
        onRemove={onRemove}
        accentHex={accentHex}
        emptyHint="Type terms below — comma or Enter adds each tag live"
      />
      <input
        type="text"
        value={draft}
        disabled={disabled}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder="e.g. synaptic transmission, dopamine signaling"
        aria-label="Add functional annotation"
        style={{
          background: PARCHMENT.card,
          color: PARCHMENT.ink,
          border: `1px solid ${PARCHMENT.rule}`,
          borderRadius: 10,
          padding: "10px 12px",
          width: "100%",
          lineHeight: 1.5,
        }}
      />
      <p style={{ margin: 0, fontSize: 11, color: PARCHMENT.inkFaint, fontFamily: "ui-monospace, monospace" }}>
        {tags.length} tag{tags.length === 1 ? "" : "s"} · comma or Enter to add
      </p>
    </div>
  );
}
