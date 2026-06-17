/**
 * Prompt: return a react / next project as frontend — 3 independent parts:
 * frontend (gui), server (server), actual code (repo root pipeline).
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // firegraph-client is a local JSX package (wired87/bb_front viewer)
  transpilePackages: ["firegraph-client"],
  // CHAR: shorter dev cache window — less stale chunk 404 after hot reload
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
};

export default nextConfig;
