'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function ReturnToAppButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleReturn = () => {
    setIsLoading(true);
    try {
      window.close();
    } catch (error) {
      console.error('Failed to close window:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='pt-4'>
      <Button
        size='lg'
        className='w-full'
        onClick={handleReturn}
        disabled={isLoading}
      >
        {isLoading ? 'Closing...' : 'Close and Return to App'}
      </Button>
      <p className='text-xs text-muted-foreground mt-2'>
        Close this window to return to the TypeTidy app
      </p>
    </div>
  );
}
