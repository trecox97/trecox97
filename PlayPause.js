      // Get the audio element and button
      const audio = document.getElementById("my_audio");
      const playPauseBtn = document.getElementById("playPauseBtn");

      // Function to update the button text based on the audio state
      function updateButtonText() {
         if (audio.paused) {
            playPauseBtn.textContent = "Play";  // Change text to "Play" if audio is paused
         } else {
            playPauseBtn.textContent = "Pause";  // Change text to "Pause" if audio is playing
         }
      }

      // Function to toggle play and pause
      function togglePlayPause() {
         if (audio.paused) {
            audio.play();  // Play the audio if it is paused
         } else {
            audio.pause();  // Pause the audio if it is playing
         }
         updateButtonText();  // Update button text after play/pause action
      }

      // Add click event listener to the button
      playPauseBtn.addEventListener("click", togglePlayPause);

      // Optionally, auto-play the song when the page loads
      window.onload = function () {
         audio.play();
         updateButtonText();  // Set the button text to "Pause" when the song starts playing
      };

      // Ensure button text reflects the correct state when the audio is manually paused
      audio.addEventListener('pause', updateButtonText);
      audio.addEventListener('play', updateButtonText);