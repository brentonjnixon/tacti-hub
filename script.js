// Function to turn on and off the red lens mode wk5

function toggleRedLens() {
    document.body.classList.toggle("red-lens-active");
    
    // Save user preference setting so it stays when switching pages
    if (document.body.classList.contains("red-lens-active")) {
        localStorage.setItem("redLens", "enabled");
    } else {
        localStorage.setItem("redLens", "disabled");
    }
}

// Function to get the military time for Zulu and Local clocks wk5

function updateTacticalClocks() {
    var now = new Date();
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    // Zulu Time setup
    var zuluDay = String(now.getUTCDate()).padStart(2, '0');
    var zuluHours = String(now.getUTCHours()).padStart(2, '0');
    var zuluMinutes = String(now.getUTCMinutes()).padStart(2, '0');
    var zuluSeconds = String(now.getUTCSeconds()).padStart(2, '0');
    var zuluMonth = months[now.getUTCMonth()];
    var zuluYear = String(now.getUTCFullYear()).slice(-2);

    // Local Time setup
    var localDay = String(now.getDate()).padStart(2, '0');
    var localHours = String(now.getHours()).padStart(2, '0');
    var localMinutes = String(now.getMinutes()).padStart(2, '0');
    var localSeconds = String(now.getSeconds()).padStart(2, '0');
    var localMonth = months[now.getMonth()];
    var localYear = String(now.getFullYear()).slice(-2);

    // Combining everything into strings to display
    var zuluText = "ZULU DTG: " + zuluDay + zuluHours + zuluMinutes + zuluSeconds + "Z " + zuluMonth + " " + zuluYear;
    var localText = "LOCAL DTG: " + localDay + localHours + localMinutes + localSeconds + "L " + localMonth + " " + localYear;

    // Locate display ID from the HTML file
    var zuluDiv = document.getElementById("zulu");
    var localDiv = document.getElementById("local");

    if (zuluDiv) {
        zuluDiv.textContent = zuluText;
    }
    if (localDiv) {
        localDiv.textContent = localText;
    }
}

// Run Red Lens automatically when the webpage finishes loading wk5

window.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("redLens") === "enabled") {
        document.body.classList.add("red-lens-active");
    }
    
    // Run the clock function right away and keep updating it every second wk5
    updateTacticalClocks();
    setInterval(updateTacticalClocks, 1000);
});

// Contact Form added wk6

// Collect DOM elements

    var contactForm = document.getElementById("contactForm");
    var emailField = document.getElementById("senderEmail");
    var confirmationBanner = document.getElementById("formConfirmation");
    var errorBanner = document.getElementById("formError");

//Form Handler and validation rules

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
// Validate user email input, strict validation rule

    var emailValue = emailField.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.com$/;

// Confirm user input email matches pattern

    if (!emailPattern.test(emailValue)) {

        errorBanner.style.display = "block";
        confirmationBanner.style.display = "none";
        emailField.style.border = "2px solid rgb(255, 77, 77)";

// Hides error message if input passes validation, displays successful submission

    } else {

        errorBanner.style.display = "none";
        confirmationBanner.style.display = "block";
        emailField.style.border = "";
        this.reset(); 

    }
});

// Real-time monitoring of user input to inform user of errors

emailField.addEventListener("input", function() {

        errorBanner.style.display = "none";
        emailField.style.border = "";
});