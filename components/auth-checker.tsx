'use client';

import { useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';

export function AuthChecker() {
  useEffect(() => {
    const supabase = createClient();

    // Check auth status every 2 seconds
    const interval = setInterval(async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      // If user is found, refresh the page to show the authenticated view
      if (user) {
        clearInterval(interval);
        window.location.reload();
      }
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return null; // This component doesn't render anything
}
