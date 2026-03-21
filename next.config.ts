import type { NextConfig } from "next";

const wordpressHostname = process.env.WORDPRESS_HOSTNAME;
const wordpressUrl = process.env.WORDPRESS_URL;

const nextConfig: NextConfig = {
  trailingSlash: false,
  compress: true,
  reactStrictMode: true,
  images: {
    remotePatterns: wordpressHostname
      ? [
          {
            protocol: "http",
            hostname: "blog.masjidalqosim.com",
            port: "",
            pathname: "/wp-content/uploads/**",
          },
        ]
      : [],
  },

  async redirects() {
    if (!wordpressUrl) {
      return [];
    }
    return [
      {
        source: "/admin",
        destination: `${wordpressUrl}/wp-admin`,
        permanent: true,
      },
    ];
  },
};


export default nextConfig;