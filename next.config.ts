import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

export default withPWA({
  // Crucial para rodar em pasbem.com.br/aplicativo
  basePath: '/aplicativo',
  
  experimental: {
    // @ts-ignore
    turbo: {}, 
  },
  // Garante que o build use Webpack para processar o Service Worker do PWA
  webpack: (config) => {
    return config;
  },
});