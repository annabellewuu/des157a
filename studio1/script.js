// script.js
document.getElementById('generate').addEventListener('click', function () {
    const noun = document.getElementById('noun').value;
    const verb = document.getElementById('verb').value;
    const adjective = document.getElementById('adjective').value;
    
    const story = `Once upon a time, there was a ${adjective} ${noun}. It loved to ${verb} all day long. The end.`;

    document.getElementById('story').textContent = story;
});
