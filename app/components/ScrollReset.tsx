'use client';

import { useEffect } from 'react';

export default function ScrollReset() {
  useEffect(() => {
    if (performance.getEntriesByType('navigation')[0]?.type === 'reload') {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
