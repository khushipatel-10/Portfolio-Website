'use client';

import { useEffect } from 'react';

export default function ScrollReset() {
    useEffect(() => {

        window.history.replaceState(null, "", window.location.pathname);
        // ensure page starts at top
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return null;
}
