import { Button } from '@/components/ui/button';
import { AppleIcon } from '@/components/icons';

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
            <Button className='w-full' size='lg'>
              Download for Mac
            </Button>
            <p className='text-xs text-center text-muted-foreground'>
              Version 1.0.0 • Released {new Date().toLocaleDateString()}
            </p>
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
