import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  // Adicione estas linhas para mapear os caminhos corretamente
  sw: "sw.js", 
  register: true,
  scope: "/aplicativo/",
});

export default withPWA({
  basePath: '/aplicativo',
  
  experimental: {
    // @ts-ignore
    turbo: {}, 
  },
  
  webpack: (config) => {
    return config;
  },
});