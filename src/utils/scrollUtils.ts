/**
 * Utility function to ensure pages start from the top when loaded
 * This can be called in the useEffect hook of page components
 */
export const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    // Use multiple methods to ensure scroll restoration works across browsers
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
    // Force layout recalculation for stubborn cases
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100);
  }
};

/**
 * Hook to ensure a page component starts from the top when loaded
 * This can be used in page components
 */
export const useScrollToTop = () => {
  if (typeof window !== 'undefined') {
    // Use requestAnimationFrame to ensure this happens after the browser has painted
    requestAnimationFrame(() => {
      scrollToTop();
    });
  }
}; 