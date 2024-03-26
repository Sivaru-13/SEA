
// Wait for the DOM content to be fully loaded
/*document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the About link
    var aboutLink = document.getElementById("header-about");

    // Add a click event listener to the About link
    aboutLink.addEventListener("click", function(event) {
        // Prevent the default action of the link (i.e., prevent it from navigating to another page)
        event.preventDefault();

        // Get a reference to the about-me section
        var aboutSection = document.querySelector(".about-me");

        // Scroll to the about-me section smoothly
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });

    // Get a reference to the Learn More button
   /* var learnMoreButton = document.querySelector('.intro button');

    // Add a click event listener to the Learn More button
    learnMoreButton.addEventListener("click", function(event) {
        // Prevent the default action of the button (i.e., prevent form submission)
        event.preventDefault();

        // Get a reference to the achievements section
        var achievementsSection = document.querySelector(".achievements");

        // Scroll to the achievements section smoothly
        achievementsSection.scrollIntoView({ behavior: "smooth" });
    });
	document.getElementById("learn-more").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
});

document.getElementById("learn-more").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
});

document.getElementById("popup").addEventListener("click", function(event) {
    if (event.target === document.getElementById("popup")) {
        document.getElementById("popup").style.display = "none";
    }
});
    // Get a reference to the Contact link
	var contactForm = document.getElementById("header-contact");

    // Add a submit event listener to the contact form
    contactForm.addEventListener("click", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get a reference to the contact section
        var contactSection = document.querySelector(".contact-info");

       
            // Scroll to the contact section
            contactSection.scrollIntoView({ behavior: "smooth" });
      
    });
}); */
// script.js
document.addEventListener("DOMContentLoaded", function() {
    var aboutLink = document.getElementById("header-about");
    var contactForm = document.getElementById("header-contact");

    aboutLink.addEventListener("click", function(event) {
        event.preventDefault();
        var aboutSection = document.querySelector(".about-me");
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });

    contactForm.addEventListener("click", function(event) {
        event.preventDefault();
        var contactSection = document.querySelector(".contact-info");
        contactSection.scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("learn-more").addEventListener("click", function() {
        document.getElementById("popup").style.display = "block";
    });

    document.getElementById("popup").addEventListener("click", function(event) {
        if (event.target === document.getElementById("popup")) {
            document.getElementById("popup").style.display = "none";
        }
    });
});
  

