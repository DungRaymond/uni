import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // node:sqlite là module built-in của Node 24 — không cần bundle.
  serverExternalPackages: [],
};

export default nextConfig;
