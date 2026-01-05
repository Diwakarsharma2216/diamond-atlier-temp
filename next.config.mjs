/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://gemviewonline.blr1.digitaloceanspaces.com/:path*',
      },
    ];
  },
};

export default nextConfig;
