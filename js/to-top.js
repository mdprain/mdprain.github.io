/* BACK TO TOP BUTTON */

// Get the button:
toTopButton = document.getElementById("to-top");

// When the user scrolls down from the top of the document, show the button
function scrollFunction() {
    if (document.documentElement.scrollTop > 200) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", scrollFunction);
toTopButton.addEventListener("click", topFunction);