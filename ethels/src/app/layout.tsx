import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./fonts.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto_Condensed({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Ethel's Lounge",
  description: "Legendary since 1994",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
