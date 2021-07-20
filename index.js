
// Select all tags that have the class drum from the HTML 
var drumButtons = document.querySelectorAll(".drum")

// For every button inside the HTML add an event listener that displays the alert when we click it
for(var i = 0 ; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {

        // The current button's innerHTML
        var buttonInnerHTML = this.innerHTML;

        switch(buttonInnerHTML) {
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
                console.log(buttonInnerHTML)
        }  
    })
}



