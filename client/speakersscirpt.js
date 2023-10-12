// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Define the URL of your server's API to fetch speakers data
    const apiUrl = "http://localhost:3001/speakers";
  
    // Function to make an HTTP GET request
    function fetchSpeakers() {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Handle the data received from the server and display it
          displaySpeakers(data);
        })
        .catch((error) => {
          console.error("Error fetching speakers:", error);
        });
    }
  
    // Function to display the list of speakers
    function displaySpeakers(speakers) {
      const speakersList = document.getElementById("speakers-list");
  
      if (speakers && speakers.length > 0) {
        speakersList.innerHTML = ""; // Clear the list
  
        // Create and append list items for each speaker
        speakers.forEach((speaker) => {
          const listItem = document.createElement("li");
          listItem.textContent = speaker.name;
          speakersList.appendChild(listItem);
        });
      } else {
        speakersList.innerHTML = "No speakers found.";
      }
    }
  
    // Call the fetchSpeakers function to load and display speakers when the page loads
    fetchSpeakers();
  });
  