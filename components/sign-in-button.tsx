'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function SignInButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('Importing Tauri shell API...');
      const { shell } = await import('@tauri-apps/api');

      console.log('Opening browser...');
      await shell.open('https://www.typetidy.com/sign-in');

      console.log('Browser opened successfully');
    } catch (error) {
      console.error('Error details:', error);
      setError(
        error instanceof Error ? error.message : 'Failed to open browser'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center gap-2'>
      <Button
        size='lg'
        onClick={handleClick}
        className='mt-8'
        disabled={isLoading}
      >
        {isLoading ? 'Opening browser...' : 'Sign in to Continue'}
      </Button>
      {error && <p className='text-sm text-red-500'>{error}</p>}
    </div>
  );
}
