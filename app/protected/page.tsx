import { createClient } from '@/utils/supabase/server';
import { CheckCircle2 } from 'lucide-react';
import { redirect } from 'next/navigation';
import { ReturnToAppButton } from '@/components/return-to-app-button';

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/sign-in');
  }

  return (
    <div className='flex-1 w-full min-h-screen flex flex-col items-center justify-center p-8'>
      <div className='max-w-md w-full space-y-8 text-center'>
        <div className='flex flex-col items-center gap-4'>
          <CheckCircle2 className='h-12 w-12 text-green-500' />
          <h1 className='text-2xl font-bold'>Successfully Authenticated!</h1>
        </div>

        <p className='text-muted-foreground'>
          You're now signed in as {user.email}. You can return to the TypeTidy
          desktop app to continue.
        </p>

        <ReturnToAppButton />
      </div>
    </div>
  );
}
