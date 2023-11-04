/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
          },{
            protocol: 'https',
            hostname: 'store.sony.com.au',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'www.pngmart.com',
            port: '',
          },
          {
            protocol: 'http',
            hostname: 'images.samsung.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'raylo.imgix.net',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'www.signify.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'www.smartworld.it',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'www.pngarts.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: '5.imimg.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'img.productz.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'venturebeat.com',
            port: '',
          }
        ],
      },
}

module.exports = nextConfig
