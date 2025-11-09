'use client';

import { useEffect } from 'react';

/**
 * DynamicFavicon component
 * Changes the favicon every 5 seconds in a loop between favicon.ico and favicon2.ico
 * This creates an animated effect in the browser tab
 * 
 * Note: Make sure both favicon.ico and favicon2.ico exist in the public folder
 * or in src/app folder for Next.js to serve them correctly
 */
export default function DynamicFavicon() {
  useEffect(() => {
    // Array of favicon paths to cycle through
    // These paths are relative to the public folder or app directory
    const favicons = ['/favicon.ico', '/favicon2.ico'];
    
    // Current favicon index (starts at 0)
    let currentIndex = 0;
    
    /**
     * Updates the favicon in the document head
     * Handles multiple favicon link types (icon, shortcut icon, apple-touch-icon)
     * @param {string} faviconPath - Path to the favicon file
     */
    const updateFavicon = (faviconPath) => {
      // Get all existing favicon and shortcut icon links
      // This includes: link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]
      const existingLinks = document.querySelectorAll(
        "link[rel='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon']"
      );
      
      // Remove all existing favicon links (except those we want to keep like manifest)
      existingLinks.forEach((link) => {
        // Only remove icon and shortcut icon links, keep apple-touch-icon if needed
        if (link.getAttribute('rel') === 'icon' || link.getAttribute('rel') === 'shortcut icon') {
          link.parentNode?.removeChild(link);
        }
      });
      
      // Create new favicon link with timestamp to prevent caching
      const timestamp = Date.now();
      const faviconWithCache = `${faviconPath}?v=${timestamp}`;
      
      // Create icon link
      const iconLink = document.createElement('link');
      iconLink.rel = 'icon';
      iconLink.type = 'image/x-icon';
      iconLink.href = faviconWithCache;
      
      // Create shortcut icon link (for older browsers)
      const shortcutLink = document.createElement('link');
      shortcutLink.rel = 'shortcut icon';
      shortcutLink.type = 'image/x-icon';
      shortcutLink.href = faviconWithCache;
      
      // Get head element
      const head = document.getElementsByTagName('head')[0];
      
      // Append both links to head
      head.appendChild(iconLink);
      head.appendChild(shortcutLink);
    };
    
    /**
     * Switches to the next favicon in the array
     * Cycles back to the first favicon after the last one
     */
    const switchFavicon = () => {
      // Move to next favicon (using modulo to cycle back to 0 after last item)
      currentIndex = (currentIndex + 1) % favicons.length;
      
      // Update favicon with new path
      updateFavicon(favicons[currentIndex]);
    };
    
    // Set initial favicon (favicon.ico) after a short delay to ensure DOM is ready
    // This prevents conflicts with Next.js default favicon handling
    const initTimeout = setTimeout(() => {
      updateFavicon(favicons[0]);
    }, 100);
    
    // Set up interval to switch favicons every 5 seconds (5000ms)
    // Start switching after the first 5 seconds
    const intervalId = setInterval(switchFavicon, 2000);
    
    // Cleanup function to clear interval and timeout when component unmounts
    return () => {
      clearTimeout(initTimeout);
      clearInterval(intervalId);
      // Optionally reset to default favicon on unmount
      // updateFavicon(favicons[0]);
    };
  }, []); // Empty dependency array - runs only on mount/unmount

  // This component doesn't render anything visible
  return null;
}

