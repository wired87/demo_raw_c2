/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        pathname: '/**' // Adjust the path if needed based on your image URLs
      },{
        protocol: 'https',
        hostname: 'th.bing.com',
        pathname: '/**' // Adjust the path if needed based on your image URLs
      },{
        protocol: 'https',
        hostname: 'twin-cities.umn.edu',
        pathname: '/**' // Adjust the path if needed based on your image URLs
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/password',
        destination: '/',
        permanent: true
      }
    ];
  }
};
