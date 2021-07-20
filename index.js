
// Select all tags that have the class drum from the HTML 
var drumButtons = document.querySelectorAll(".drum")

// For every button inside the HTML add an event listener that displays the alert when we click it
for(var i = 0 ; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        alert("I got clicked!")
    })
}


