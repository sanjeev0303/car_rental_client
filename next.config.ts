import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['localhost'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'unsplash.com',
            },
        ],
    },
};

export default nextConfig;
