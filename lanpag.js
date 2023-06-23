// Execute JavaScript code once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the "Get Started" button element
    var getStartedButton = document.querySelector('.cta-button');
  
    // Add a click event listener to the button
    getStartedButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default action of the button
      alert('You clicked the "Get Started" button!');
    });
  });
  