import { AppProvider } from '@/context/appContext';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Providers from '@/components/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Image Gallery',
  description: 'Add your image to the gallery',
};
type Props = {
  children: React.ReactNode;
  parallel: React.ReactNode;
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppProvider>
            <div className="min-h-screen  flex flex-col">
              <Navbar />
              {props.children}
              {props.parallel}
            </div>
          </AppProvider>
        </Providers>
      </body>
    </html>
  );
}
