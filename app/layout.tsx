import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { ThemeSwitcher } from '@/components/theme-switcher';
import Image from 'next/image';
import Link from 'next/link';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  // Include all the weights we need
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
});

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
    <html lang='en' suppressHydrationWarning>
      <body className={`${jakarta.variable} font-sans`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <header className='fixed w-full top-0 z-50 border-muted bg-background/80 backdrop-blur-sm'>
            <div className='container flex h-14 items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Link href='/' className='flex items-center gap-2'>
                  <Image
                    src='/logo.svg'
                    alt='TypeTidy Logo'
                    width={32}
                    height={32}
                  />
                  <span className='font-semibold text-lg text-foreground'>
                    TypeTidy
                  </span>
                </Link>
              </div>
              <nav className='flex items-center gap-6'>
                <ThemeSwitcher />
              </nav>
            </div>
          </header>
          <div className='pt-14'>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
