import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cahid Ahmedli — Design Portfolio",
  description:
    "Selected UX/UI, visual identity, campaign, product, and social media work by Cahid Ahmedli.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body>{children}</body>
    </html>
  );
}
