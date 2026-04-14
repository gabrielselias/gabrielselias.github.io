import type { NextConfig } from "next";

// Para hospedar num repositório de projeto (ex: usuario.github.io/meu-site/),
// defina a variável de ambiente NEXT_PUBLIC_BASE_PATH="/meu-site" no build.
// Para domínio próprio ou repo "<usuario>.github.io", deixe vazio.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
