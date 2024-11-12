import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google"

import "./globals.css";


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: "400",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: "400",
});

export const metadata: Metadata = {
  title: "NotebookLM podcasts",
  description: "Audio overviews for everyone - NotebookLM podcasts in an easily discoverable feed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${plusJakarta.variable}`}>
        {children}
      </body>
    </html>
  );
}
