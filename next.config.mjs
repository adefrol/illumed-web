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
            }
        ],
    },

    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;