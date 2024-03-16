import type { Metadata } from 'next';
import './globals.css';
import { anonymous } from './fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Dawid Bugajski - Frontend Developer',
  description: 'Frotend developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={anonymous.className} suppressHydrationWarning>
      <body>
        <Providers>
          <main className='flex min-h-screen flex-col items-center justify-between bg-white dark:bg-gray'>
            <div className='flex-grow h-full container mx-auto flex flex-col justify-between'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
