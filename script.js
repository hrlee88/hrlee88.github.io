// Get the toggle button
const toggleButton = document.getElementById('toggle-mode');

// Function to toggle between day and night mode
function toggleMode() {
    document.body.classList.toggle('night-mode');
    const isNightMode = document.body.classList.contains('night-mode');
    localStorage.setItem('mode', isNightMode ? 'night-mode' : 'day-mode');
}

// Load the saved mode from local storage
const savedMode = localStorage.getItem('mode');
if (savedMode == 'night-mode') {
    document.body.classList.add('night-mode');
}

// Add click event listener to the button
toggleButton.addEventListener('click', toggleMode);
