// Wait for the entire page to load
window.onload = function () {
  // Hide the spinner after 3 seconds (3000 milliseconds)
  setTimeout(function () {
    document.getElementById("spinner").style.display = "none"; // Hide the spinner
    document.getElementById("content").style.display = "block"; // Show the content
  }, 2000);
};
