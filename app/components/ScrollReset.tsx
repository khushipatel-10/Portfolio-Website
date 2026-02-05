'use client';

import { useEffect } from 'react';

export default function ScrollReset() {
  useEffect(() => {
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries.length > 0) {
      const navEntry = navEntries[0] as PerformanceNavigationTiming;
      if (navEntry.type === 'reload') {
        window.scrollTo(0, 0);
      }
    }
  }, []);

  return null;
}
