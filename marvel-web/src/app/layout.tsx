import "./ui/globals.css";
import { Inter } from "next/font/google";
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s |Marvel Gate Dashboard',
    default: 'Marvel Gate Dashboard',
  },
  description: 'Web App about the world of Marvel',
  metadataBase: new URL('https://github.com/AlejandroGC1990/marvelWeb'),
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
