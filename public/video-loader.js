// Helper script to ensure videos load properly on production environments
document.addEventListener('DOMContentLoaded', function() {
  console.log('Video loader script initialized');
  
  // Detect iOS devices
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  
  console.log('Is iOS device:', isIOS);
  
  // For iOS devices, we also want to try initializing Vimeo players
  if (isIOS) {
    initializeVimeoPlayers();
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
          // Add touchstart event to the document to play video on first touch
          document.addEventListener('touchstart', function playVideoOnTouch() {
            video.play().catch(function(err) {
              console.log('Could not play video after touch:', err);
            });
            document.removeEventListener('touchstart', playVideoOnTouch);
          }, { once: true });
          
          // Also try to play automatically
          setTimeout(() => {
            video.play().catch(err => console.log('Auto-play failed on iOS:', err));
          }, 100);
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
  
  // Wait for Vimeo API to load
  function checkVimeoAPI() {
    if (window.Vimeo && window.Vimeo.Player) {
      console.log('Vimeo API loaded');
      
      // Find all Vimeo iframes
      const vimeoIframes = document.querySelectorAll('iframe[src*="player.vimeo.com"]');
      console.log(`Found ${vimeoIframes.length} Vimeo iframes`);
      
      vimeoIframes.forEach(iframe => {
        try {
          // Force play on all Vimeo players
          if (iframe.contentWindow) {
            iframe.contentWindow.postMessage(JSON.stringify({
              method: 'play'
            }), '*');
          }
        } catch (e) {
          console.error('Error interacting with Vimeo iframe:', e);
        }
      });
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
      const data = JSON.parse(event.data);
      
      // When a player is ready, send it a play command
      if (data.event === 'ready') {
        const iframe = document.querySelector(`iframe[src*="player.vimeo.com/video/${data.player_id}"]`);
        
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage(JSON.stringify({
            method: 'play'
          }), '*');
        }
      }
    } catch (e) {
      // Ignore parsing errors
    }
  });
} 