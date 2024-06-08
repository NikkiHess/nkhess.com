/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        
        return config;
    },
    swcMinify: false, // this SAVES react-pdf
}

module.exports = nextConfig
