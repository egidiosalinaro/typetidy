import { Button } from '@/components/ui/button';

export default function DesktopApp() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground'>
      <div className='w-full max-w-5xl items-center justify-between font-mono text-sm'>
        <h1 className='text-4xl font-bold mb-8'>Welcome to TypeTidy</h1>
        <p className='text-xl mb-4'>
          Your TypeScript companion app is ready to use.
        </p>

        <div className='grid grid-cols-2 gap-4 mt-8'>
          <Button size='lg' variant='default'>
            New Project
          </Button>
          <Button size='lg' variant='outline'>
            Open Project
          </Button>
        </div>
      </div>
    </main>
  );
}
