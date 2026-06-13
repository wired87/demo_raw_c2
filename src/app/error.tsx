"use client";

/**
 * Prompt: improve GUI UX — recover from chunk/CSS load failures after build/dev switch.
 */
import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  const isStaleAsset =
    /chunk|Loading CSS chunk|Failed to fetch dynamically imported module/i.test(error.message || "");

  useEffect(() => {
    console.error("[acid-gui]", error);
  }, [error]);

  return (
    <div className="acid-error-shell">
      <div className="acid-error-card">
        <h1>Something went wrong</h1>
        <p>
          {isStaleAsset
            ? "The browser cached an old Next.js bundle. Stop any other process on port 3000, run npm run dev:clean in gui/, then reload."
            : error.message || "An unexpected error occurred."}
        </p>
        <div className="acid-error-actions">
          <button type="button" className="acid-btn acid-btn--primary" onClick={() => reset()}>
            Try again
          </button>
          <button type="button" className="acid-btn acid-btn--ghost" onClick={() => window.location.reload()}>
            Reload page
          </button>
        </div>
      </div>
    </div>
  );
}
