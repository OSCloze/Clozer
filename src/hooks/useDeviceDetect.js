// src/hooks/useDeviceDetect.js
import { useState, useEffect } from 'react';

export function useDeviceDetect() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
            return mobileRegex.test(userAgent);
        };

        setIsMobile(checkMobile());
    }, []);

    return { isMobile };
}