import type { NextConfig } from "next";
import  withPWA  from "next-pwa";

const nextConfig: NextConfig = {
  /* config options here */
  
  
};
// Configure PWA
const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
// @ts-ignore
})(nextConfig);


export default pwaConfig;
