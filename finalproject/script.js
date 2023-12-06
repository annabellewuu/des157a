(function(){
    'use strict';
    console.log('reading js');

    // Get the element with the ID "startButton" and add a click event listener
    const startMenuClickElement = document.getElementById("startButton");
    startMenuClickElement.addEventListener("click", function () {
        console.log("Clicked on Start Menu!");
        resetForm(); 
        // Move to the "form" section
        navigateTo("form"); 
    });

    // Get the element with the ID "formButton" and add a click event listener
    const formButton = document.getElementById("formButton");
    formButton.addEventListener("click", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        console.log("Clicked on Form!");
        // Handle the click event for the "formButton"
        generateMadlib();
    });

    // Get the element with the ID "storyButton" and add a click event listener
    const storyClickElement = document.getElementById("storyButton");
    storyClickElement.addEventListener("click", function () {
        console.log("Clicked on Story!");
        // Move to the "startMenu" section
        navigateTo("startMenu");
    });

    
    // Get the element with the ID "exitButton" and add a click event listener
    const exitButton = document.getElementById("exitButton");
    exitButton.addEventListener("click", function () {
        // Hide the overlay
        const overlay = document.getElementById("overlay");
        overlay.style.display = 'none';
        // Move to the "form" section
        navigateTo("form");
    });


    // Function to navigate between sections
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

    // Function to generate the madlib
    function generateMadlib() {
        // Get input values
        const adj1 = document.getElementById("adj1").value;
        const name1 = document.getElementById("name1").value;
        const color = document.getElementById("color").value;
        const noun1 = document.getElementById("noun1").value;
        const object = document.getElementById("object").value;
        const bodypart = document.getElementById("bodypart").value;
        const adj2 = document.getElementById("adj2").value;
        const sound = document.getElementById("sound").value;
        // Get elements
        const madlib = document.getElementById("madlib");
        const overlay = document.getElementById("overlay");

        // Check if all form fields are filled
        if (!adj1 || !name1 || !color || !noun1 || !object || !bodypart || !adj2 || !sound) {
            // Show the overlay if the form is not filled out
            overlay.style.display = 'block';
        } else {
            // Hide the overlay and generate the madlib
            overlay.style.display = 'none';

            const madlibText = `One <span class="user-word">${adj1}</span> evening, a little bunny named <span class="user-word">${name1}</span> decided it was time to go to sleep. 
            It hopped into its cozy <span class="user-word">${color}</span> <span class="user-word">${noun1}</span>, snuggled up with its favorite <span class="user-word">${object}</span>, and closed its <span class="user-word">${bodypart}</span> with a contented smile on its face. 
            The stars outside were <span class="user-word">${adj2}</span>, and the night was filled with the soothing sound of <span class="user-word">${sound}</span>. 
            <span class="user-word">${name1}</span> had the sweetest dreams as they drifted off to sleep.`;

            madlib.textContent = madlibText;
            // Set the innerHTML to include the generated madlib text
            madlib.innerHTML = madlibText;

            // Once the madlib is generated, navigate to the story section
            playSparkle();
            navigateTo("story");
        }
    }

    // Function to reset the form fields
    function resetForm() {
        // Reset the form fields
        document.getElementById("myform").reset();
    }

    // Function to play a sound effect
    function playSparkle() {
        const sparkleSound = document.getElementById('sparkle');
        sparkleSound.play(); 
    }

})();