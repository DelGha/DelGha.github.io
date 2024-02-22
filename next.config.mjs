/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
    images: {
        loader: 'akamai',
        path: '',
      },
      assetPrefix: './',

    webpack: (config, { isServer }) => {
        
        config.module.rules.push({
            test: /\.(mp4)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next',
                        outputPath: 'static/videos/', 
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