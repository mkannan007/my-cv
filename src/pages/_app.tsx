import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
