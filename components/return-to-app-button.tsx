'use client';

import { Button } from '@/components/ui/button';

export function ReturnToAppButton() {
  return (
    <div className='pt-4'>
      <Button size='lg' className='w-full' onClick={() => window.close()}>
        Return to Desktop App
      </Button>
      <p className='text-xs text-muted-foreground mt-2'>
        You can close this window and go back to the app
      </p>
    </div>
  );
}
