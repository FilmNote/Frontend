/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // 프론트엔드에서 호출할 경로
        destination: "http://localhost:8080/:path*", // 백엔드 서버 주소
      },
    ];
  },
};

export default nextConfig;
