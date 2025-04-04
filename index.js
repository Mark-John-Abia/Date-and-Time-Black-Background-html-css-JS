function updateDateTime() {
    const now = new Date();
    
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    const formattedTime = now.toLocaleTimeString('en-US');
    
    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();
