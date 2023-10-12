//an empty storage object here again
const headphoneObj = {}
const page = document.querySelector('html')

//a function that creates an HTML div to house the headphone object info.
//buckle up fellas, it's about to get ugly
//you could add helper functions for anything you don't want to type repeatedly, also. If we need to add ids or classes for styling later that can be done pretty simply with setAttribute()
function addHeadphone(headphoneObj) {
    //destructuring the headphone object that we'll pull out of the db so we have fewer arguments to pass in
    let { model_name, Brand, Price, Mic, Noise_cancelling, Bluetooth, year_model, quantity} = headphoneObj
    
    //making the html elements and passing in the data
    const resultDiv = document.createElement('div')
    document.body.appendChild(resultDiv)
    resultDiv.setAttribute('id', 'hdeaphoneDiv')

    const modelHeader = document.createElement('h2')
    modelHeader.innerHTML = 'Model Name:'
    resultDiv.appendChild(modelHeader)

    const modelName = document.createElement('p')
    modelName.innerHTML = model_name
    resultDiv.appendChild(modelName)

    const brandHeader = document.createElement('h2')
    brandHeader.innerHTML = 'Brand:'
    resultDiv.appendChild(brandHeader)

    const brand = document.createElement('p')
    brand.innerHTML = Brand
    resultDiv.appendChild(brand)

    const priceHeader = document.createElement('h2')
    priceHeader.innerHTML = 'Price:'
    resultDiv.appendChild(priceHeader)

    const price = document.createElement('p')
    price.innerHTML = Price
    resultDiv.appendChild(price)

    const micHeader = document.createElement('h2')
    micHeader.innerHTML = 'Mic:'
    resultDiv.appendChild(micHeader)

    const mic = document.createElement('p')
    mic.innerHTML = Mic
    resultDiv.appendChild(mic)

    const noiseHeader = document.createElement('h2')
    noiseHeader.innerHTML = 'Noise Cancellation:'
    resultDiv.appendChild(noiseHeader)

    const noise = document.createElement('p')
    noise.innerHTML = Noise_cancelling
    resultDiv.appendChild(noise)

    const bluetoothHeader = document.createElement('h2')
    bluetoothHeader.innerHTML = 'Bluetooth:'
    resultDiv.appendChild(bluetoothHeader)

    const bluetooth = document.createElement('p')
    bluetooth.innerHTML = Bluetooth
    resultDiv.appendChild(bluetooth)

    const yearHeader = document.createElement('h2')
    yearHeader.innerHTML = 'Year Model:'
    resultDiv.appendChild(yearHeader)

    const year = document.createElement('p')
    year.innerHTML = year_model
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
    let result = await axios.get('http://localhost:3001/headphones')
    let headphonesArray = result.data

    for (let i=0; i < headphonesArray.length ; i++){
        let headphoneObj = headphonesArray[i]
        addHeadphone(headphoneObj)
    }
}

//finally, running the populate function when the HTML loads
page.onload = populate()

//Running into a problem here where I can't scroll to see all of the results 