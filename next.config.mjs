/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: 'aceternity.com'
        }, {
            hostname: 'images.unsplash.com'
        }]
    },

    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;