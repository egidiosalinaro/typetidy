import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/server';
import { SignInButton } from '@/components/sign-in-button';

export default async function DesktopApp() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <main className='flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground'>
        <div className='w-full max-w-5xl flex flex-col items-center text-center space-y-8'>
          <h1 className='text-4xl font-bold'>Welcome to TypeTidy</h1>
          <div className='space-y-4 max-w-lg'>
            <p className='text-xl text-muted-foreground'>
              To use TypeTidy and access all its features, you'll need to sign
              in first.
            </p>
            <p className='text-sm text-muted-foreground'>
              Your work will be synced across devices and you'll get access to
              all TypeTidy features.
            </p>
          </div>
          <SignInButton />
        </div>
      </main>
    );
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground'>
      <div className='w-full max-w-5xl items-center justify-between font-mono text-sm'>
        <h1 className='text-4xl font-bold mb-8'>Welcome to TypeTidy</h1>
        <p className='text-xl mb-4'>Welcome back, {user.email}</p>

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
