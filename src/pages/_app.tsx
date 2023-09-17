import ThemeProvider from '@/hooks/use-theme';

import { Cursor } from '@/components';

import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Cursor className="hidden dark:lg:block" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
