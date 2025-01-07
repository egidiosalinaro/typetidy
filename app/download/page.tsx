import { Button } from '@/components/ui/button';
import { AppleIcon } from '@/components/icons';
import Link from 'next/link';

export default function DownloadPage() {
  return (
    <div className='min-h-screen'>
      <div className='max-w-4xl mx-auto py-20 px-4'>
        <div className='text-center space-y-4 mb-16'>
          <h1 className='text-4xl font-bold text-foreground'>
            Download TypeTidy
          </h1>
          <p className='text-xl text-muted-foreground'>
            Get started with TypeTidy today and transform your writing
            experience
          </p>
        </div>

        <div className='bg-card border rounded-xl p-8 max-w-md mx-auto'>
          <div className='space-y-6'>
            <div className='flex items-center justify-center'>
              <AppleIcon className='h-20 w-20 text-foreground' />
            </div>
            <div className='text-center space-y-2'>
              <h2 className='text-2xl font-semibold text-foreground'>
                macOS Version
              </h2>
              <p className='text-sm text-muted-foreground'>
                Compatible with macOS 11.0 (Big Sur) and later
              </p>
            </div>
            <Link
              href='https://github.com/egidiosalinaro/typetidy/releases/latest/download/TypeTidy.dmg'
              className='w-full'
            >
              <Button className='w-full' size='lg'>
                Download for Mac (Universal)
              </Button>
            </Link>
            <p className='text-xs text-center text-muted-foreground'>
              Version 1.0.0 • {new Date().toLocaleDateString()}
            </p>
            <div className='text-xs text-center text-muted-foreground space-y-2'>
              <p>After downloading:</p>
              <ol className='list-decimal list-inside text-left space-y-1'>
                <li>Open the .dmg file</li>
                <li>Drag TypeTidy to your Applications folder</li>
                <li>Open TypeTidy from your Applications</li>
              </ol>
            </div>
          </div>
        </div>

        <div className='mt-16 text-center space-y-4'>
          <h2 className='text-xl font-semibold text-foreground'>
            Windows & Linux Versions
          </h2>
          <p className='text-muted-foreground'>
            Coming soon! We're working hard to bring TypeTidy to more platforms.
          </p>
        </div>
      </div>
    </div>
  );
}
