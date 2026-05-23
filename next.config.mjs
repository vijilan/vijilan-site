/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/platform/praxis',
        destination: 'https://praxisops.ai',
        permanent: true, // 301
      },
      {
        source: '/platform/praxis/:path*',
        destination: 'https://praxisops.ai',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
