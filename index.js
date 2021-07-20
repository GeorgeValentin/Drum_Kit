function selectAllElements(className) {
    var elements = document.querySelectorAll(className);

    return elements;
}

function playSoundsForClickEvents(HTMLElement) {
    // For every button inside the HTML add an event listener that, when the click event happens runs the anonymopus function
    for(var i = 0 ; i < HTMLElement.length; i++) {
        HTMLElement[i].addEventListener("click", function() {

            // The current button's innerHTML
            var buttonInnerHTML = this.innerHTML;

            // Determine the sound based on the button that was clicked
            determineSound(buttonInnerHTML);  

            animateButton(buttonInnerHTML)

        })
    }
}

function determineSound(key) {
    switch(key) {
        case "w":
                // Create an HTML audio element from the tom-1.mp3 sound file
                var tom1 = new Audio("sounds/tom-1.mp3")
                    
                // Call the play() method to play the sound attached to it
                tom1.play() 
            break;

        case "a":
                var tom1 = new Audio("sounds/tom-2.mp3")
                tom1.play() 
            break;

        case "s":
                var tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play() 
            break;

        case "d":
                var tom4 = new Audio("sounds/tom-4.mp3")
                tom4.play() 
            break;

        case "j":
                var snare = new Audio("sounds/snare.mp3")
                snare.play() 
            break;

        case "k":
                var crash = new Audio("sounds/crash.mp3")
                crash.play() 
            break;

        case "l":
                var kick = new Audio("sounds/kick-bass.mp3")
                kick.play() 
            break;

        default:
            console.log(key)
    }  
}

function animateButton(currentKey) {

    // We get the element(button) with the class of the currentKey
    var activeButton = document.querySelector("." + currentKey)

    var buttonOfDrums = selectAllElements(".drum")

    for(var i = 0 ; i < buttonOfDrums.length; i++) {
        if(activeButton === buttonOfDrums[i]) {
            // Add the class .pressed to the activeButton
            activeButton.classList.add("pressed")

            // Wait 0.1 seconds and then remove the .pressed class from the activeButton element
            setTimeout(function() {
                activeButton.classList.remove("pressed")
            }, 100)
        } 
    }
}

// Select all tags that have the class drum from the HTML 
var drumButtons = selectAllElements(".drum")

playSoundsForClickEvents(drumButtons)

// When the keydown event happens (= when a key is pressed) run the anonymous function
// The "event" parameter is what results after the keydown event happens
document.addEventListener("keydown", function(event) {

    var pressedKey = event.key

    if(event.code === "Space") {
        console.log(event.key)
    } else {
        // Determine the sound based on the button that was pressed
        determineSound(pressedKey)

        animateButton(pressedKey)
    }
})
