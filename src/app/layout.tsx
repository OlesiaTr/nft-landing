import { ReactNode } from 'react';

import '@/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-messina">{children}</body>
    </html>
  );
}
