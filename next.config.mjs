/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    /**
     * Enable static exports for the App Router.
     *
     * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
     */
    output: "export",

    /**
     * Set base path. This is the slug of your GitHub repository.
     *
     * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
     */

    assetPrefix: isProd ? '/' : '',

    /**
     * Disable server-based image optimization. Next.js does not support
     * dynamic features with static exports.
     *
     * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
     */
    images: {
        unoptimized: true,
    },

    /**
     * Custom webpack configuration
     */
    webpack: (config, { isServer }) => {
        // Add file-loader for mp4 files
        config.module.rules.push({
            test: /\.(mp4)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next',
                        outputPath: 'static/videos/', // Specify the output path for your videos
                        name: '[name].[hash].[ext]',
                    },
                },
            ],
        });

        return config;
    },
};

export default {
    ...nextConfig,
    ...withVideos(),
};