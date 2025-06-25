// Helper script to ensure videos load properly on production environments
document.addEventListener('DOMContentLoaded', function() {
  console.log('Video loader script initialized');
  
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
    };
    
    // Check and fix sources
    checkVideoSources();
    
    // Try to play the video
    const attemptPlay = () => {
      if (video.paused) {
        console.log('Attempting to play video');
        
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