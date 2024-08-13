import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcast",
  description: "Generated your podcasts using AI",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        {/* <AudioProvider>
          <body className={`${manrope.className}`}>
              {children}
          </body>
        </AudioProvider> */}
        <body className={inter.className}>{children}</body>
      </html>
    </ConvexClerkProvider>
  );
}
