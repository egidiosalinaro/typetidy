'use client';

import { Button } from '@/components/ui/button';

export function ScrollButton() {
  return (
    <Button
      size='lg'
      variant='outline'
      onClick={() => {
        document.getElementById('how-it-works')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }}
    >
      See How It Works
    </Button>
  );
}
