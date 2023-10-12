//constants for HTML elements
const searchBtn = document.querySelector('#searchHeadphones')
const model = link('#modelName')
const brand = link('#brand')
const price = link('#price')
const mic = link('#mic')
const noise = link('#noise')
const bluetooth = link('#bluetooth')
const year = link('#year')
const qnty = link('#quantity')

//Empty object to store headphone info in for later destructuring
const headphoneObj = {}

//helper function so I can stop typing query selector repeatedly
function link(id){
    return document.querySelector(id)
}

//function to take the values from the headphone object in the database and pass them through to their respective sections in the DOM
function addData(headphoneObj){

    let { model_name, Brand, Price, Mic, Noise_cancelling, Bluetooth, year_model, quantity} = headphoneObj

    model.innerHTML = model_name
    brand.innerHTML = Brand
    price.innerHTML = Price
    mic.innerHTML = Mic
    noise.innerHTML = Noise_cancelling
    bluetooth.innerHTML = Bluetooth
    year.innerHTML = year_model
    qnty.innerHTML = quantity
}

//click handler that searches within the db and pulls out all objects of a given brand
searchBtn.onclick = async () => {
    //getting all of the headphones in the db:
    let brandInput = document.querySelector('#headphoneInput').value
    let result = await axios.get(`http://localhost:3001/headphones/${brandInput}`)

    let headphones = result.data //this is an array of all headphone objects

    for (let i=0; i < headphones.length ; i++){
        let headphoneObj = headphones[i]
        addData(headphoneObj)
    }
}
//I think ideally we would be creating HTML elements so we can accomodate as many items of a certain brand as we have in the database (e.g. if we have three different apple products, we only have pre-made space in the HTML for one)


//speakers >>>
const searchBtn2 = document.querySelector('#searchHeadphones')
const surrSound = link('#surroundSound')
const aux = link('#auxPort')

const speakerObj = {}

function addDataSpeakers(speakerObj) {
    model.innerHTML = speakerObj.modelName;
    brand.innerHTML = speakerObj.brand;
    price.innerHTML = speakerObj.price;
    bluetooth.innerHTML = speakerObj.bluetooth;
    year.innerHTML = speakerObj.yearModel;
    quantity.innerHTML = speakerObj.quantity;
     }
  
searchBtn2.onclick = async () => {
    // Getting the brand input from the search bar
    const brandInput = document.querySelector('#speakerInput').value;
  
    try {
      // Send a GET request to the server to search for speakers with the specified brand
      const response = await axios.get(`http://localhost:3001/speakers/${brandInput}`);

      //NOT WORKING WHY
      
      const speakers = response.data;
  
      // Check if any speakers were found
      if (speakers.length > 0) {
        // Display the data for the first speaker found
        const firstSpeaker = speakers[0];
        addData(firstSpeaker);
      } else {
        // No speakers found for the specified brand
        model.innerHTML = 'Not Found';
        brand.innerHTML = '';
        price.innerHTML = '';
        bluetooth.innerHTML = '';
        year.innerHTML = '';
        quantity.innerHTML = '';
      }
    } catch (error) {
      // Handle errors
      console.error(error);
    }
};