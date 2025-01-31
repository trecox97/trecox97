
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Function to load external HTML content into a specific container
  const loadContent = (url, containerId) => {
    return fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(containerId).innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading content:', error);
      });
  };

  // Load the footer
  Promise.all([
    loadContent('footer.html', 'footer-container')
  ])
});