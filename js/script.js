/* TERMINAL TYPING EFFECT */

// The array of words to display on each page load
const text = new Array (
    " ./cybersecurity && ./composing"
);

// The overall speed of the typing
const speed = 60;
const slowSpeed = 240;

// Initially start at the beginning of the array i.e. 0th element
let textPos = 0; 

// Starting with a '$' character, like a Linux terminal
let result = '$'; 
 
function typingEffect() {
    // Get element from page
    let output = document.getElementById("typing");

    // Iterate through each letter, and append the substring each time
    for (let i = 0; i < text.length; i++) {
        textPos++;
        output.innerHTML = result + text[i].substring(0, textPos);

        // If the character is a blank space, cause a slight delay on output
        if (output.innerHTML.charAt(textPos) == ' ') {
            setTimeout("typingEffect()", slowSpeed);
        } else {
            setTimeout("typingEffect()", speed);
        }
    }
}

// Load function when the page is ready
document.addEventListener("readystatechange", function(event) {
    if(event.target.readyState == "interactive") {
        typingEffect();
    }
});