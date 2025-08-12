"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    webVitals?: {
      getCLS: (callback: (metric: any) => void) => void;
      getFID: (callback: (metric: any) => void) => void;
      getFCP: (callback: (metric: any) => void) => void;
      getLCP: (callback: (metric: any) => void) => void;
      getTTFB: (callback: (metric: any) => void) => void;
    };
  }
}

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Load web-vitals library dynamically
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      // Function to send metrics to analytics service
      const sendToAnalytics = (metric: any) => {
        console.log('Performance metric:', metric);
        
        // Send to your analytics service (e.g., Google Analytics, Vercel Analytics)
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', metric.name, {
            event_category: 'Web Vitals',
            event_label: metric.id,
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            non_interaction: true,
          });
        }
      };

      // Measure Core Web Vitals
      onCLS(sendToAnalytics);
      onFID(sendToAnalytics);
      onFCP(sendToAnalytics);
      onLCP(sendToAnalytics);
      onTTFB(sendToAnalytics);
    }).catch((error) => {
      console.warn('Could not load web-vitals:', error);
    });

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.duration > 50) {
              console.warn('Long task detected:', {
                duration: entry.duration,
                startTime: entry.startTime,
              });
            }
          });
        });

        observer.observe({ entryTypes: ['longtask'] });

        // Cleanup on unmount
        return () => observer.disconnect();
      } catch (error) {
        console.warn('Performance monitoring setup failed:', error);
      }
    }
  }, []);

  // Component doesn't render anything
  return null;
};

export default PerformanceMonitor;