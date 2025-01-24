function playGunshot() {
    // Play the gunshot audio
    const audio = document.getElementById('gunshotAudio');
    audio.play();
  
    // Show the gunshot image
    const image = document.getElementById('gunshotImage');
    image.style.display = 'block';
  }
  