// Helper script to ensure videos load properly on production environments
document.addEventListener('DOMContentLoaded', function() {
  console.log('Video loader script initialized');
  
  // Detect iOS devices - more robust detection
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
                /iPhone|iPad|iPod/i.test(navigator.userAgent);
  
  console.log('Is iOS device:', isIOS);
  
  // Set viewport height for mobile browsers
  function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log('Set viewport height variable');
  }
  
  // Set initial viewport height
  setViewportHeight();
  
  // Update viewport height on resize and orientation change
  window.addEventListener('resize', setViewportHeight);
  window.addEventListener('orientationchange', setViewportHeight);
  
  // Improve scrolling on iOS
  if (isIOS) {
    document.body.style.webkitOverflowScrolling = 'touch';
    
    // Enable scrolling on body
    document.body.style.overflow = 'auto';
    document.body.style.height = '100%';
    
    // Force redraw to ensure proper rendering
    document.body.style.display = 'none';
    document.body.offsetHeight; // Force reflow
    document.body.style.display = '';
    
    // Initialize Vimeo players with short delay to ensure page is ready
    setTimeout(initializeVimeoPlayers, 500);
  }
  
  // Find all video elements
  const videos = document.querySelectorAll('video');
  console.log(`Found ${videos.length} video elements`);
  
  // For each video element
  videos.forEach(function(video) {
    // Check if sources are loaded and video is ready
    const checkVideoSources = () => {
      const sources = video.querySelectorAll('source');
      
      if (sources.length === 0) {
        console.log('No source elements found, creating one');
        const source = document.createElement('source');
        source.src = '/videos/homepage-bg.mp4';
        source.type = 'video/mp4';
        video.appendChild(source);
        video.load();
      } else {
        console.log(`Found ${sources.length} source elements`);
      }
      
      // iOS specific attributes
      if (isIOS) {
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
        video.setAttribute('muted', '');
        video.muted = true;
        video.setAttribute('autoplay', '');
        video.setAttribute('preload', 'auto');
        
        // Additional iOS attributes for better playback
        video.setAttribute('x-webkit-airplay', 'allow');
        video.setAttribute('disablePictureInPicture', '');
        video.setAttribute('controls', 'false');
        
        // Force hardware acceleration
        video.style.transform = 'translateZ(0)';
        video.style.webkitTransform = 'translateZ(0)';
        video.style.backfaceVisibility = 'hidden';
        video.style.webkitBackfaceVisibility = 'hidden';
      }
    };
    
    // Check and fix sources
    checkVideoSources();
    
    // Try to play the video
    const attemptPlay = () => {
      if (video.paused) {
        console.log('Attempting to play video');
        
        // For iOS, we need to use a user interaction to start playback
        if (isIOS) {
          // Add multiple event listeners to try to trigger playback
          ['touchstart', 'touchend', 'click'].forEach(eventType => {
            document.addEventListener(eventType, function playVideoOnEvent() {
              video.play().catch(function(err) {
                console.log(`Could not play video after ${eventType}:`, err);
              });
              document.removeEventListener(eventType, playVideoOnEvent);
            }, { once: true });
          });
          
          // Also try to play automatically with multiple attempts
          let playAttempts = 0;
          const maxAttempts = 5;
          
          function attemptAutoplay() {
            if (playAttempts < maxAttempts) {
              video.play().then(() => {
                console.log('Auto-play succeeded on iOS');
              }).catch(err => {
                console.log(`Auto-play attempt ${playAttempts + 1} failed on iOS:`, err);
                playAttempts++;
                setTimeout(attemptAutoplay, 500);
              });
            }
          }
          
          setTimeout(attemptAutoplay, 100);
        } else {
          // Standard play attempt for non-iOS
          video.play()
            .then(() => {
              console.log('Video started playing successfully');
            })
            .catch(function(error) {
              console.log('Auto-play was prevented by the browser:', error);
              
              // Try again with user interaction
              document.addEventListener('click', function playVideoOnce() {
                video.play().catch(function(err) {
                  console.log('Still could not play video after user interaction:', err);
                });
                document.removeEventListener('click', playVideoOnce);
              }, { once: true });
            });
        }
      } else {
        console.log('Video is already playing');
      }
    };
    
    // If video is loaded, try to play it, otherwise wait for it to be ready
    if (video.readyState >= 2) { // HAVE_CURRENT_DATA or higher
      attemptPlay();
    } else {
      console.log('Video not ready yet, waiting for loadeddata event');
      video.addEventListener('loadeddata', attemptPlay);
      
      // Add a backup timeout in case loadeddata doesn't fire
      setTimeout(() => {
        if (video.paused) {
          console.log('Backup timeout: attempting to play video');
          attemptPlay();
        }
      }, 1000);
    }
    
    // Add error handling
    video.addEventListener('error', function(e) {
      console.error('Video error event triggered', e);
      
      // Try to recover by recreating the source
      setTimeout(function() {
        checkVideoSources();
        video.load();
        attemptPlay();
      }, 1000);
    });
  });
});

// Function to initialize Vimeo players for iOS
function initializeVimeoPlayers() {
  console.log('Initializing Vimeo players for iOS');
  
  // Function to interact with Vimeo iframe
  function interactWithVimeoIframe(iframe) {
    try {
      // Force play and other parameters
      if (iframe.contentWindow) {
        // Set autoplay
        iframe.contentWindow.postMessage(JSON.stringify({
          method: 'play'
        }), '*');
        
        // Set loop
        iframe.contentWindow.postMessage(JSON.stringify({
          method: 'setLoop',
          value: true
        }), '*');
        
        // Set quality to auto for better performance
        iframe.contentWindow.postMessage(JSON.stringify({
          method: 'setQuality',
          value: 'auto'
        }), '*');
        
        // Additional parameters for better iOS performance
        iframe.setAttribute('webkit-playsinline', '');
        iframe.setAttribute('playsinline', '');
      }
    } catch (e) {
      console.error('Error interacting with Vimeo iframe:', e);
    }
  }
  
  // Wait for Vimeo API to load
  function checkVimeoAPI() {
    if (window.Vimeo && window.Vimeo.Player) {
      console.log('Vimeo API loaded');
      
      // Find all Vimeo iframes
      const vimeoIframes = document.querySelectorAll('iframe[src*="player.vimeo.com"]');
      console.log(`Found ${vimeoIframes.length} Vimeo iframes`);
      
      vimeoIframes.forEach(iframe => {
        // Force iframe to hardware accelerate
        iframe.style.transform = 'translateZ(0)';
        iframe.style.webkitTransform = 'translateZ(0)';
        iframe.style.backfaceVisibility = 'hidden';
        iframe.style.webkitBackfaceVisibility = 'hidden';
        
        // Ensure iframe has proper attributes
        if (!iframe.hasAttribute('allow')) {
          iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
        }
        
        // Make multiple attempts to interact with iframe
        interactWithVimeoIframe(iframe);
        setTimeout(() => interactWithVimeoIframe(iframe), 1000);
        setTimeout(() => interactWithVimeoIframe(iframe), 2000);
      });
      
      // Add a click handler to the entire document to help with iOS autoplay restrictions
      document.addEventListener('touchend', function() {
        vimeoIframes.forEach(iframe => interactWithVimeoIframe(iframe));
      }, { once: true });
    } else {
      // Check again in a moment
      setTimeout(checkVimeoAPI, 500);
    }
  }
  
  // Start checking for Vimeo API
  checkVimeoAPI();
  
  // Listen for messages from Vimeo iframes
  window.addEventListener('message', function(event) {
    if (event.origin !== 'https://player.vimeo.com') return;
    
    try {
      const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
      
      // When a player is ready, send it a play command
      if (data.event === 'ready') {
        // Find the specific iframe or target all iframes if we can't find the specific one
        const iframes = document.querySelectorAll('iframe[src*="player.vimeo.com"]');
        iframes.forEach(iframe => interactWithVimeoIframe(iframe));
      }
    } catch (e) {
      // Ignore parsing errors
    }
  });
} 