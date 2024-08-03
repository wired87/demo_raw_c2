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
        pathname: '/**' //sites/twin-cities.umn.edu/files/styles/desktop/public/media//bionic-eye.jpg?itok=wfrDdCur' // Adjust the path if needed based on your image URLs
      },{
        protocol: 'https',
        hostname: 'robotics.umich.edu',
        pathname: '/**',// wp-content/uploads/2020/07/' // Adjust the path if needed based on your image URLs
      },{
        protocol: 'https',
        hostname: 'www.jhuapl.edu',
        pathname: '/**',// wp-content/uploads/2020/07/' // Adjust the path if needed based on your image URLs
      },{
        protocol: 'https',
        hostname: 'www.procemex.com',
        pathname: '/**',// wp-content/uploads/2020/07/' // Adjust the path if needed based on your image URLs
      },{
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        pathname: '/**',// wp-content/uploads/2020/07/' // Adjust the path if needed based on your image URLs
      },{
        protocol: 'https',
        hostname: 'www.thedigitalspeaker.com',
        pathname: '/**',// wp-content/uploads/2020/07/' // Adjust the path if needed based on your image URLs
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
