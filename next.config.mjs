/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'encrypted-tbn0.gstatic.com',
        'img.freepik.com',
        'www.shutterstock.com',
        'dummyjson.com',
        'fakestoreapi.com',
        '/api.open-meteo.com',
        'thumbs.dreamstime.com',
        '/www.shutterstock.com/i'
      ],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'dummyjson.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  