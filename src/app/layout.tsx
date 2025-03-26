import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Загружаем шрифт Inter с поддержкой латиницы, кириллицы и китайского
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  // Обратите внимание, что Inter не поддерживает китайские символы полноценно.
  // Для китайского текста будут использоваться системные шрифты
  display: "swap",
});

export const metadata: Metadata = {
  title: "TuneBlade Key Generator | by CroSSer23",
  description: "Генератор ключей для программы TuneBlade с поддержкой нескольких языков. Создано CroSSer23.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-gray-900`}>{children}</body>
    </html>
  );
}
