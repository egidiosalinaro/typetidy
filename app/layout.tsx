import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TypeTidy - Your Intelligent Writing Assistant',
  description:
    'TypeTidy is an AI-powered writing assistant that helps you write clear, error-free, and impactful content. Get real-time grammar, spelling, and style suggestions.',
  keywords: [
    'grammar checker',
    'writing assistant',
    'AI writing',
    'proofreading',
    'editing tool',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
