import type { Metadata } from "next";
import { Roboto_Slab, Roboto_Condensed, Reddit_Sans, Reddit_Sans_Condensed } from "next/font/google";
import "./globals.css";



export const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"]
});

export const robotoCond = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"]
});

export const roboto = Reddit_Sans({
  variable: "--font-reddit-sans",
  subsets: ["latin"]
});

export const redditCond = Reddit_Sans_Condensed({
  variable: "--font-reddit-sans-condensed",
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Billawar Community App",
  description: "The community app of Billawar Association, Mumbai and the World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
