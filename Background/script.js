const colors = ["red", "blue", "lightgreen", "aqua", "yellow", "orange"]

// Every color can be represented with a six-value HEX code
//Ex. #A156DF
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

// Get DOM elements
const colorSpan = document.querySelector("#color");
const colorButton = document.querySelector("#get-color");
const randomButton = document.querySelector("#random-color");

colorButton.addEventListener("click", function() {
    console.log("Clicked!")
    // Get element from colors array
    let pickedColor = Math.floor(Math.random() * colors.length) 
    // Change background
    document.body.style.backgroundColor = colors[pickedColor]
    // Update colorSpan
    colorSpan.innerText = colors[pickedColor]
})

randomButton.addEventListener("click", function() {
    console.log("Clicked random!")
    // Start a HEX string
    let pickedColor = "#";
    // Pick 6 random values from HEX array
    // Loop over array 6 times
    for(let el=0; el<6; el++) {
        pickedColor += hex[Math.floor(Math.random() * hex.length)];
        console.log(pickedColor)
    }
    // Set background
    document.body.style.backgroundColor = pickedColor;
    // Update colorSpan
})