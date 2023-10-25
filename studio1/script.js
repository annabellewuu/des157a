// script.js
(function(){
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('#myform');
    const madLib = document.querySelector("#madlib");


    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const adj1 = document.querySelector('#adj1').value;
        const name1 = document.querySelector('#name1').value;
        const color = document.querySelector('#color').value;
        const noun1 = document.querySelector('#noun1').value;
        const object = document.querySelector('#object').value;
        const bodypart = document.querySelector('#bodypart').value;
        const adj2 = document.querySelector('#adj2').value;
        const sound = document.querySelector('#sound').value;


        /* const myText = `<p>You typed the words: ${noun1}, ${noun2}, ${adj}, ${verb}</p>`; */

        let myText = '';

        if(adj1 == ''){
            myText = "Please give me an adjective:"
            document.querySelector('#adj1').focus();
        } 
        else if(name1 == ''){
            myText = "Please give me a name!"
            document.querySelector('#name1').focus();
        }
        else if(adj == ''){
            myText = "Please provide an adjective!"
            document.querySelector('#adj').focus();
        
        else if(verb == ''){
            myText = "Please provide a verb!"
            document.querySelector('#verb1').focus();
        }
        else{
            myText = `<p>You typed the words: ${noun1}, ${noun2}, ${adj}, ${verb}</p>`;
            document.querySelector('#noun1').value = '';
            document.querySelector('#noun2').value = '';
            document.querySelector('#adj').value = '';
            document.querySelector('#verb1').value = '';
        }

        madLib.innerHTML = myText;
    
        
    });

})();





/* document.getElementById('generate').addEventListener('click', function () {
    const noun = document.getElementById('noun').value;
    const verb = document.getElementById('verb').value;
    const adjective = document.getElementById('adjective').value;
    
    const story = `Once upon a time, there was a ${adjective} ${noun}. It loved to ${verb} all day long. The end.`;

    document.getElementById('story').textContent = story;
}); */
