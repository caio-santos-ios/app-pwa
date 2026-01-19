import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

export default withPWA({
  // Se o erro de tipo persistir no 'turbo', 
  // use o comentário abaixo para o TypeScript ignorar a linha
  experimental: {
    // @ts-ignore
    turbo: {}, 
  },
});