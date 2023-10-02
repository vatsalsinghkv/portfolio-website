import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: [
    '400', // Regular
    '500', // Medium
    '700', // Bold
  ],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: [
    '400', // Regular
    '500', // Medium
    '600', // Semibold
    '700', // Bold
  ],
});

const fontVariables = `${inter.variable} ${robotoMono.variable}`;

export default fontVariables;
