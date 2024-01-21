// 'use client';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Styles/globals.scss';
import Footer from '@/app/Components/footer/Footer';
import { Providers } from '../app/provider';
import GotoTop from './Components/GotoTop';
import StateContextProvider from '@/context/StateContext';
import { Suspense } from 'react';
import SkeletonNavbar from './Components/skelton';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

const Navbar = dynamic(() => import('./Components/navs/Navbar'), {
  ssr: false,
  loading: () => <SkeletonNavbar />,
});

export const metadata: Metadata = {
  title: 'Code Granites',
  description: 'Illuminating Ideas and Forging Solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={workSans.variable}>
      <body className={workSans.className}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <StateContextProvider>
          <Suspense fallback={<SkeletonNavbar />}>
            <Navbar />
          </Suspense>
          <Providers>{children}</Providers>
          <Footer />
          <GotoTop />
        </StateContextProvider>
      </body>
    </html>
  );
}
