/**
 * Prompt: improve overall GUI design — polished loading state between route transitions.
 */
export default function Loading() {
  return (
    <div className="acid-loading-shell">
      <div className="acid-loading-pulse" aria-hidden="true" />
      <p>Loading Acid Engine…</p>
    </div>
  );
}
