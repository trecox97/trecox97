function playGunshot() {
  // Play the audio
  var audio = document.getElementById("gunshotAudio");
  audio.play();

  // Create a new image element
  var newImage = document.createElement("img");
  newImage.src = "Images/gunshot.png";  // Set the image source
  newImage.alt = "Gunshot";             // Add alt text
  newImage.style.width = "100px";       // Set image size (optional)
  newImage.style.height = "auto";       // Maintain aspect ratio

  // Append the image to the content div
  var contentDiv = document.getElementById("content");
  contentDiv.appendChild(newImage);
}
