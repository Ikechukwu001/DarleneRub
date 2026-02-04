import { Playfair_Display, Lora } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/Components/Footer';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '700'],
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Darlene Rub - Professional Massage & Wellness Therapy',
  description:
    'Experience ultimate relaxation and rejuvenation with Darlene Rub’s expert massage services. Book your session today for personalized wellness therapy.',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  themeColor: '#8b6f47',
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${lora.variable}`}>
      <body className="font-sans bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
