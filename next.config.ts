import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  // output: 'export',
  images: {
    unoptimized: true // needed if you use next/image
  },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);