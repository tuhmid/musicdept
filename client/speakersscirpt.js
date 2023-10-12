
// document.addEventListener("DOMContentLoaded", function () {
//     // Define the URL of your server's API to fetch speakers data
//     const apiUrl = "http://localhost:3001/speakers";
  
//     // Function to make an HTTP GET request
//     function fetchSpeakers() {
//       fetch(apiUrl)
//         .then((response) => response.json())
//         .then((data) => {
//           // Handle the data received from the server and display it
//           displaySpeakers(data);
//         })
//         .catch((error) => {
//           console.error("Error fetching speakers:", error);
//         });
//     }
  
//     // Function to display the list of speakers
//     function displaySpeakers(speakers) {
//       const speakersList = document.getElementById("speakers-list");
  
//       if (speakers && speakers.length > 0) {
//         speakersList.innerHTML = ""; // Clear the list
  
//         // Create and append list items for each speaker
//         speakers.forEach((speaker) => {
//           const listItem = document.createElement("li");
//           listItem.textContent = speaker.name;
//           speakersList.appendChild(listItem);
//         });
//       } else {
//         speakersList.innerHTML = "No speakers found.";
//       }
//     }
  
//     // Call the fetchSpeakers function to load and display speakers when the page loads
//     fetchSpeakers();
//   });
  
const speakerObj = {}
const page = document.querySelector('html')
function addSpeaker(speakerObj) {
  //destructuring the headphone object that we'll pull out of the db so we have fewer arguments to pass in
  let { modelName, brand, price, bluetooth, surroundSound, yearModel, quantity, auxPort} = speakerObj
  
  //making the html elements and passing in the data
  const resultDiv = document.createElement('div')
  document.body.appendChild(resultDiv)
  resultDiv.setAttribute('id', 'speakerDiv')

  const modelHeader = document.createElement('h2')
  modelHeader.innerHTML = 'Model Name:'
  resultDiv.appendChild(modelHeader)

  const model_name = document.createElement('p')
  model_name.innerHTML = modelName
  resultDiv.appendChild(model_name)

  const brandHeader = document.createElement('h2')
  brandHeader.innerHTML = 'Brand:'
  resultDiv.appendChild(brandHeader)

  const brandName = document.createElement('p')
  brandName.innerHTML = brand
  resultDiv.appendChild(brandName)

  const priceHeader = document.createElement('h2')
  priceHeader.innerHTML = 'Price:'
  resultDiv.appendChild(priceHeader)

  const price$ = document.createElement('p')
  price$.innerHTML = price
  resultDiv.appendChild(price$)

  const surroundSoundHeader = document.createElement('h2')
  surroundSoundHeader.innerHTML = 'Surround Sound:'
  resultDiv.appendChild(surroundSoundHeader)

  const surround_sound = document.createElement('p')
  surround_sound.innerHTML = surroundSound
  resultDiv.appendChild(surround_sound)

  const auxportHeader = document.createElement('h2')
  auxportHeader.innerHTML = 'Aux Port:'
  resultDiv.appendChild(auxportHeader)

  const auxport = document.createElement('p')
  auxport.innerHTML = auxPort
  resultDiv.appendChild(auxport)

  const bluetoothHeader = document.createElement('h2')
  bluetoothHeader.innerHTML = 'Bluetooth:'
  resultDiv.appendChild(bluetoothHeader)

  const blue_tooth = document.createElement('p')
  blue_tooth.innerHTML = bluetooth
  resultDiv.appendChild(blue_tooth)

  const yearHeader = document.createElement('h2')
  yearHeader.innerHTML = 'Year Model:'
  resultDiv.appendChild(yearHeader)

  const year = document.createElement('p')
  year.innerHTML = yearModel
  resultDiv.appendChild(year)

  const qntyHeader = document.createElement('h2')
  qntyHeader.innerHTML = 'Quantity:'
  resultDiv.appendChild(qntyHeader)

  const qnty = document.createElement('p')
  qnty.innerHTML = quantity
  resultDiv.appendChild(qnty)
}

//the function to populate the page
async function populate(){
  let result = await axios.get('http://localhost:3001/speakers')
  let speakersArray = result.data

  for (let i=0; i < speakersArray.length ; i++){
      let speakerObj = speakersArray[i]
      addSpeaker(speakerObj)
  }
}

//finally, running the populate function when the HTML loads
page.onload = populate()

//Running into a problem here where I can't scroll to see all of the results 