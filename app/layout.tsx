import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './Styles/globals.scss';
import Navbar from '@/app/Components/navs/Navbar';
import Footer from '@/app/Components/footer/Footer';
import { Providers } from '../app/provider';
import GotoTop from './Components/GotoTop';
import StateContextProvider from '@/context/StateContext';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: 'Code Granites',
  description: 'Illuminating Ideas and Forging Solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={workSans.variable}>
      <body className={workSans.className}>
        <StateContextProvider>
          <Navbar />
          <Providers>{children}</Providers>
          <Footer />
          <GotoTop />
        </StateContextProvider>
      </body>
    </html>
  );
}
