(function(){
    'use strict'; // Enable strict mode for better error handling
    console.log('reading JS'); // Log a message to the console

    // Get references to HTML elements
    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    // Game data object to store various game-related information
    const gameData = {
        dice: ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    // Function to initialize the game by clearing HTML elements
    function initializeGame() {
        game.innerHTML = '';
        score.innerHTML = '';
        actionArea.innerHTML = '';
    }

    // Event listener for the "Start Game" button
    startGame.addEventListener('click', function() {
        // Randomly select the starting player
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        // Initialize the game by clearing HTML elements
        initializeGame();

        // Display game control elements
        gameControl.innerHTML = '<h2></h2>';
        gameControl.innerHTML += '<button id="quit" class="red-button">Wanna Quit?</button>';

        // Event listener for the "Quit" button to reload the page
        document.getElementById('quit').addEventListener('click', function() {
            location.reload();
        });

        // Set up the initial turn
        setUpTurn();
    });

    // Function to set up a player's turn
    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';

        // Event listener for the "Roll" button
        document.getElementById('roll').addEventListener('click', function() {
            throwDice();
            playDiceRollSound();
        });
    }

    // Function to simulate rolling the dice
    function throwDice() {
        actionArea.innerHTML = '';
        //test snake eyes
        /* gameData.roll1 = 1;
        gameData.roll2 = 1; */
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}" class="dice-image">
                            <img src="${gameData.dice[gameData.roll2-1]}" class="dice-image">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if( gameData.rollSum === 2 ){
            // Handle the case of rolling snake eyes
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>'
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            // Show the current score and set up the next turn after a delay
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            // Handle the case of rolling a one on either die
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            // Set up the next turn after a delay
            setTimeout(setUpTurn, 2000);
        } else {
            // Update the player's score and provide options to roll again or pass
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll Again</button> or <button id="pass">Pass</button>';

            // Event listeners for the "Roll Again" and "Pass" buttons
            document.getElementById('rollagain').addEventListener('click', function() {
                setUpTurn();
            });

            document.getElementById('pass').addEventListener('click', function() {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            // Check for winning conditions
            checkWinningCondition();
        }
    }

    // Function to check for winning conditions
    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            // Display the winner and update game control elements
            score.innerHTML = `<h2>${gameData.players[gameData.index]} is the <br> WINNER! <br> with ${gameData.score[gameData.index]} points!</h2>`;
            playWinSound();
            actionArea.innerHTML = '';
            document.getElementById('quit').classList.add('red-button');
            document.getElementById('quit').innerHTML = "Start a New Game?";
        } else {
            // Display the current score if the game is not over
            showCurrentScore();
        }
    }

    // Function to play a winning sound
    function playWinSound() {
        const winSound = document.getElementById('winSound');
        winSound.play();
    }

    // Function to play a dice roll sound
    function playDiceRollSound() {
        const diceRollSound = document.getElementById('diceRollSound');
        diceRollSound.play(); 
    }

    // Function to display the current score
    function showCurrentScore() {
        score.innerHTML = `<p>${gameData.players[0]}'s score: <strong>${gameData.score[0]}</strong> <br> 
                            ${gameData.players[1]}'s score: <strong>${gameData.score[1]}</strong></p>`;
    }

    // Event listener for the "Open" button to show the overlay
    document.querySelector('.open').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay').className = 'showing';
    });

    // Event listener for the "Close" button to hide the overlay
    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
    });

    // Event listener for the "Escape" key to hide the overlay
    document.addEventListener('keydown', function (event){
        if (event.key == "Escape"){
            document.getElementById('overlay').className = 'hidden';
        }
    });
})();
