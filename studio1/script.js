// script.js
(function(){
    'use strict';
    console.log('reading js');

    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("myform");
        const madlib = document.getElementById("madlib");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const adj1 = document.getElementById("adj1").value;
            const name1 = document.getElementById("name1").value;
            const color = document.getElementById("color").value;
            const noun1 = document.getElementById("noun1").value;
            const object = document.getElementById("object").value;
            const bodypart = document.getElementById("bodypart").value;
            const adj2 = document.getElementById("adj2").value;
            const sound = document.getElementById("sound").value;

            if (!adj1 || !name1 || !color || !noun1 || !object || !bodypart || !adj2 || !sound) {
                madlib.textContent = "Please fill in all fields before creating the story.";
            } else {
                const madlibText = `One ${adj1} evening, a little bunny named ${name1} decided it was time to go to sleep. 
                It hopped into its cozy ${color} ${noun1}, snuggled up with its favorite ${object}, and closed its ${bodypart} with a contented smile on its face. 
                The stars outside were ${adj2}, and the night was filled with the soothing sound of ${sound}. 
                ${name1} had the sweetest dreams as they drifted off to sleep.`;
                madlib.textContent = madlibText;
            }
        });
    });

})();





