(function(){
    'use strict';
    console.log('reading js');

    
    const startMenuClickElement = document.getElementById("startMenuClick");
    startMenuClickElement.addEventListener("click", function () {
        console.log("Clicked on Start Menu!");
        resetForm(); 
        navigateTo("form");
    });

        // Example: Add a click event listener to the "formButton" element
    const formButton = document.getElementById("formButton");
    formButton.addEventListener("click", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Add your logic for handling the click event
        console.log("Clicked on Form!");
        generateMadlib();
    });


    const storyClickElement = document.getElementById("storyClick");
    storyClickElement.addEventListener("click", function () {
        console.log("Clicked on Story!");
        navigateTo("startMenu");
    });

    
    const exitButton = document.getElementById("exitButton");
    exitButton.addEventListener("click", function () {
        // Hide the overlay
        const overlay = document.getElementById("overlay");
        overlay.style.display = 'none';

        // If the exit button is pressed, navigate back to the form
        navigateTo("form");
    });

    // Example: Add logic for moving between sections
    function navigateTo(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected section
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }

    function generateMadlib() {
        const adj1 = document.getElementById("adj1").value;
        const name1 = document.getElementById("name1").value;
        const color = document.getElementById("color").value;
        const noun1 = document.getElementById("noun1").value;
        const object = document.getElementById("object").value;
        const bodypart = document.getElementById("bodypart").value;
        const adj2 = document.getElementById("adj2").value;
        const sound = document.getElementById("sound").value;
        const madlib = document.getElementById("madlib");
        const overlay = document.getElementById("overlay");

        if (!adj1 || !name1 || !color || !noun1 || !object || !bodypart || !adj2 || !sound) {
            // Show the overlay if the form is not filled out
            overlay.style.display = 'block';
        } else {
            // Hide the overlay and generate the madlib
            overlay.style.display = 'none';
            const madlibText = `One ${adj1} evening, a little bunny named ${name1} decided it was time to go to sleep. 
            It hopped into its cozy ${color} ${noun1}, snuggled up with its favorite ${object}, and closed its ${bodypart} with a contented smile on its face. 
            The stars outside were ${adj2}, and the night was filled with the soothing sound of ${sound}. 
            ${name1} had the sweetest dreams as they drifted off to sleep.`;
            madlib.textContent = madlibText;

            // Once the madlib is generated, navigate to the story section
            playSparkle();
            navigateTo("story");
        }
    }

    function resetForm() {
        // Reset the form fields
        document.getElementById("myform").reset();
    }
        
    function playSparkle() {
        const sparkleSound = document.getElementById('sparkle');
        sparkleSound.play(); 
    }

})();