'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function ReturnToAppButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleReturn = async () => {
    setIsLoading(true);
    try {
      // Get Tauri window API
      const { getCurrent } = await import('@tauri-apps/api/window');
      // Get and focus the main window
      const mainWindow = getCurrent();
      await mainWindow.setFocus();
      // Close the browser window
      window.close();
    } catch (error) {
      console.error('Failed to return to app:', error);
      // If Tauri APIs fail, just try to close the window
      window.close();
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
        {isLoading ? 'Returning to App...' : 'Return to Desktop App'}
      </Button>
      <p className='text-xs text-muted-foreground mt-2'>
        You can close this window and go back to the app
      </p>
    </div>
  );
}
