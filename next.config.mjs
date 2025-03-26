/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Экспорт статического HTML
  // Если публикуется на GitHub Pages и у репозитория есть суб-путь
  // basePath: '/tuneblade-key-generator',
  images: {
    unoptimized: true, // Требуется для static export
  },
};

export default nextConfig; 