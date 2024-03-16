import type { Metadata } from 'next';
import './globals.css';
import { anonymous } from './fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    <html lang='en' className={anonymous.className}>
      <body>
        <main className='flex min-h-screen flex-col items-center justify-between bg-dark--main'>
          <div className='flex-grow h-full container mx-auto flex flex-col justify-between'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
