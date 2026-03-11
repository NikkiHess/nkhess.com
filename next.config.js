/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        
        return config;
    },
    turbopack: {

    },
    swcMinify: false, // this SAVES react-pdf
}

module.exports = nextConfig
