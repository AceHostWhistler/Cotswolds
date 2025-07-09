// Improved video loader script with better iOS compatibility
(function() {
  // Wait for DOM to be ready
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  // Detect iOS devices
  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  // Set viewport height for mobile browsers
  function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  // Initialize Vimeo players with proper settings for iOS
  function initVimeoPlayers() {
    // Check if Vimeo API is loaded
    if (typeof Vimeo === 'undefined') {
      // Load Vimeo API if not already loaded
      const script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.onload = setupPlayers;
      document.head.appendChild(script);
    } else {
      setupPlayers();
    }
  }

  // Setup all Vimeo players on the page
  function setupPlayers() {
    // Find all iframe elements
    const iframes = document.querySelectorAll('iframe[src*="player.vimeo.com"]');
    
    iframes.forEach(iframe => {
      // Skip already initialized players
      if (iframe.hasAttribute('data-vimeo-initialized')) return;
      
      // Mark as initialized
      iframe.setAttribute('data-vimeo-initialized', 'true');
      
      // Check if this is a background video
      const isBackground = iframe.src.includes('background=1');
      
      // Check if this is in a rounded container
      const isInRoundedContainer = isInRoundedParent(iframe);
      
      // For background videos, ensure they cover properly
      if (isBackground) {
        // Add cover class
        iframe.classList.add('vimeo-cover');
        
        // Wrap in container if not already wrapped
        if (!iframe.parentElement.classList.contains('vimeo-player-wrapper')) {
          const wrapper = document.createElement('div');
          wrapper.className = 'vimeo-player-wrapper';
          iframe.parentNode.insertBefore(wrapper, iframe);
          wrapper.appendChild(iframe);
        }
        
        // Special handling for iOS
        if (isIOS()) {
          // iOS needs special handling for video scaling
          const parent = iframe.parentElement;
          if (isInRoundedContainer) {
            // Scale up slightly for rounded containers on iOS
            iframe.style.transform = 'translate(-50%, -50%) scale(1.2)';
          }
        }
      }
    });
  }

  // Check if element is in a rounded container
  function isInRoundedParent(element) {
    let current = element;
    for (let i = 0; i < 5; i++) { // Check up to 5 levels up
      current = current.parentElement;
      if (!current) break;
      
      if (current.classList.contains('rounded-full') || 
          window.getComputedStyle(current).borderRadius.includes('%') ||
          parseInt(window.getComputedStyle(current).borderRadius) > 20) {
        return true;
      }
    }
    return false;
  }

  // Initialize everything when DOM is ready
  ready(function() {
    // Set initial viewport height
    setViewportHeight();
    
    // Update on resize and orientation change
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);
    
    // Initialize Vimeo players
    initVimeoPlayers();
    
    // Re-initialize players after a delay to catch any dynamically added ones
    setTimeout(initVimeoPlayers, 1000);
  });
})(); 