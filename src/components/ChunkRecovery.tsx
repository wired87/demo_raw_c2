"use client";

/**
 * Prompt: fix 404 chunk load errors — detect stale _next/static assets and offer reload.
 */
import { useEffect, useState } from "react";

export function ChunkRecovery() {
  const [stale, setStale] = useState(false);

  useEffect(() => {
    const onError = (event: Event) => {
      const target = event.target;
      if (!(target instanceof HTMLScriptElement || target instanceof HTMLLinkElement)) return;
      const href = target instanceof HTMLScriptElement ? target.src : target.href;
      if (href && /\/_next\/static\//.test(href)) {
        setStale(true);
      }
    };
    window.addEventListener("error", onError, true);
    return () => window.removeEventListener("error", onError, true);
  }, []);

  if (!stale) return null;

  return (
    <div className="acid-chunk-banner" role="alert">
      <span>App assets are out of date (404 on Next.js chunks). Hard refresh or restart dev.</span>
      <button type="button" className="acid-chunk-reload" onClick={() => window.location.reload()}>
        Reload page
      </button>
    </div>
  );
}
