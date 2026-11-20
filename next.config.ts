import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Allow the chat preview gateway to load Next.js dev assets cross-origin.
  allowedDevOrigins: [
    "preview-chat-2f802c0d-a160-4d5c-91ee-7a0ced9d72f3.space-z.ai",
  ],
};

export default nextConfig;
