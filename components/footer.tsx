import Link from 'next/link';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className='border-t bg-muted/50'>
      <div className='container py-16'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='space-y-3'>
            <h3 className='text-lg font-semibold'>TypeTidy</h3>
            <p className='text-sm text-muted-foreground'>
              Making writing better, everywhere you type.
            </p>
          </div>

          <div className='space-y-3'>
            <h3 className='text-lg font-semibold'>Product</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/pricing'
                  className='text-sm text-muted-foreground hover:text-foreground'
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href='/download'
                  className='text-sm text-muted-foreground hover:text-foreground'
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  href='#how-it-works'
                  className='text-sm text-muted-foreground hover:text-foreground'
                >
                  How it Works
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-3'>
            <h3 className='text-lg font-semibold'>Company</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-sm text-muted-foreground hover:text-foreground'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-sm text-muted-foreground hover:text-foreground'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/careers'
                  className='text-sm text-muted-foreground hover:text-foreground'
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-3'>
            <h3 className='text-lg font-semibold'>Legal</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/privacy'
                  className='text-sm text-muted-foreground hover:text-foreground'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/terms'
                  className='text-sm text-muted-foreground hover:text-foreground'
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href='/cookies'
                  className='text-sm text-muted-foreground hover:text-foreground'
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} TypeTidy. All rights reserved.
          </p>
          <div className='flex items-center gap-4'>
            <Link
              href='https://twitter.com'
              className='text-muted-foreground hover:text-foreground'
            >
              <TwitterIcon className='h-5 w-5' />
            </Link>
            <Link
              href='https://github.com'
              className='text-muted-foreground hover:text-foreground'
            >
              <GitHubIcon className='h-5 w-5' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
      fill='none'
      stroke='currentColor'
    >
      <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
      fill='none'
      stroke='currentColor'
    >
      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
    </svg>
  );
}
