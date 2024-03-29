/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
                hostname: "img.freepik.com",
            },
            {
                hostname: 'github.com'
            },

            {
                hostname: 'picsum.photos'
            },

            {
                hostname: 'aceternity.com'
            },

            {
                hostname: 'images.unsplash.com'
            },
        ],
    },

    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;