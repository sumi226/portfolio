import type { NextConfig } from 'next';

const apiUrl = (process.env.API_URL || 'http://localhost:5000').replace(/\/$/, '');
const distDir = process.env.NODE_ENV === 'development' ? '.next-dev' : '.next';

const nextConfig: NextConfig = {
  distDir,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
