"use client";

import { useEffect } from 'react';

const MobileViewportFix = () => {
  useEffect(() => {
    // Force URL bar to hide on mobile by scrolling slightly
    const hideUrlBar = () => {
      if (typeof window !== 'undefined') {
        // Only on mobile devices
        const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const isSmallScreen = window.innerWidth <= 768;
        
        if (isMobile || isSmallScreen) {
          // Small scroll to trigger URL bar hide
          setTimeout(() => {
            window.scrollTo(0, 1);
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 10);
          }, 100);
        }
      }
    };

    // Trigger on page load
    hideUrlBar();
    
    // Also trigger on orientation change
    window.addEventListener('orientationchange', () => {
      setTimeout(hideUrlBar, 500);
    });

    // Add scroll behavior to encourage URL bar hiding
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Encourage URL bar to hide when scrolling down
          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // Scrolling down - URL bar should hide naturally
            document.body.style.transform = 'translateZ(0)'; // Force repaint
          }
          
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('orientationchange', hideUrlBar);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default MobileViewportFix;