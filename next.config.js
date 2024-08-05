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
      },{
        protocol: 'https',
        hostname: 'news.mit.edu',
        pathname: '/**'
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
        pathname: '/**' //sites/twin-cities.umn.edu/files/styles/desktop/public/media//bionic-eye.jpg?itok=wfrDdCur' // Adjust the path if needed based on your image URLs
      },{
        protocol: 'https',
        hostname: 'robotics.umich.edu',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'www.jhuapl.edu',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'www.procemex.com',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'www.thedigitalspeaker.com',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'engineering.stanford.edu',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'blackrockneurotech.com',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'synchron.com',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'i.giphy.com',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'openbci.com',
        pathname: '/**',
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
