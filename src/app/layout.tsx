import { ReactNode } from 'react';

import '@/styles/globals.css';
import { Footer } from '@/layout';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-messina">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
