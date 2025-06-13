// Helper script to ensure videos load properly on production environments
document.addEventListener('DOMContentLoaded', function() {
  // Find all video elements
  const videos = document.querySelectorAll('video');
  
  // For each video element
  videos.forEach(function(video) {
    // If the video is not playing, try to play it
    if (video.paused) {
      video.play().catch(function(error) {
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
  });
}); 