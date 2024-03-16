import type { Metadata } from 'next';
import './globals.css';
import { anonymous } from './fonts';

export const metadata: Metadata = {
  title: 'Dawid Bugajski * Frontend Developer',
  description: 'Frotend developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={anonymous.className}>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
