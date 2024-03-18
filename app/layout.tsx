import type { Metadata } from 'next';
import './globals.css';
import { anonymous } from './fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Providers } from './providers';
import ContentWrapper from '@/components/ContentWrapper';

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
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <body>
        <Providers>
          <main className='flex min-h-screen flex-col items-center justify-between bg-[#f3f4f6] dark:bg-gray dark:text-white text-gray selection:bg-green selection:text-black'>
            <div className='flex-grow h-full container mx-auto flex flex-col justify-between'>
              <Navbar />
              <ContentWrapper>{children}</ContentWrapper>
              <Footer />
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
