import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  // output: 'export',
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    unoptimized: true, // needed if you use next/image with static export
  },
};

// Wrap with both plugins
export default withNextIntl(nextConfig);
