import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import Inter
import "./globals.css";

// Configure the font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-tutor - Learn with expert anytime anywhere",
  description: "Our mision is to help people to find the best course online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Apply the font class to the body */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
