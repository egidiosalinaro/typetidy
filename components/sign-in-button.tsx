'use client';

import { Button } from '@/components/ui/button';
import { shell } from '@tauri-apps/api';

export function SignInButton() {
  return (
    <Button
      size='lg'
      onClick={() => shell.open('https://www.typetidy.com/sign-in')}
      className='mt-8'
    >
      Sign in to Continue
    </Button>
  );
}
