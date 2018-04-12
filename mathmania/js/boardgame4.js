/*MATH MANIA JAVASCRIPT FILE*/

//GETTING ALL ELEMENTS
window.onload = function() {
    var stepsIncrease;
    var chanceBox = document.getElementById("chanceBox");
    var rollDice = document.getElementById("rollDice");
    var diceBox = document.getElementById("diceBox");
    var bOne = document.getElementById("bOne");
    var bTwo = document.getElementById("bTwo");
    var bThree = document.getElementById("bThree");
    var bFour = document.getElementById("bFour");
    var bFive = document.getElementById("bFive");
    var bSix = document.getElementById("bSix");
    var bSeven = document.getElementById("bSeven");
    var bEight = document.getElementById("bEight");
    var bNine = document.getElementById("bNine");
    var bTen = document.getElementById("bTen");
    var bEleven = document.getElementById("bEleven");
    var bTwelve = document.getElementById("bTwelve");
    var bThirteen = document.getElementById("bThirteen");
    var bFourteen = document.getElementById("bFourteen");
    var bFifteen = document.getElementById("bFifteen");
    var bSixteen = document.getElementById("bSixteen");
    var bSeventeen = document.getElementById("bSeventeen");
    var mainGame = document.getElementById("main-game");
    var gameIntro = document.getElementById("gameIntro");
    var bEighteen = document.getElementById("bEighteen");
    var bNineteen = document.getElementById("bNineteen");
    var bTwenty = document.getElementById("bTwenty");
    var playGame = document.getElementById("playGame");
    var indexCounter = 0;
    var correctAnswer="";
    var currentPosition, subtractedValue, indexCounterBefore, indexCounterAfter;
    var blocksArray = [bOne, bTwo, bThree, bFour, bFive, bSix, bSeven, bEight, bNine, bTen, bEleven, bTwelve, bThirteen, bFourteen, bFifteen, bSixteen, bSeventeen, bEighteen, bNineteen, bTwenty];
    var deactivatedBlocksArray = [];
    var questionBlock = document.getElementById("questionBlock");
    var optionOne = document.getElementById("option1");
    var optionTwo = document.getElementById("option2");
    var optionThree = document.getElementById("option3");
    var optionFour = document.getElementById("option4");
    var loseScreen = document.getElementById("losegame");
    var victoryScreen = document.getElementById("wingame");
    var incorrectAnswerCounter = 0;
    var progressFiller = document.getElementById("filler");
    var playAgainWin = document.getElementById("playAgainWin");
    var playAgainLose = document.getElementById("playAgainLose");
    var currentWidth, mainTimer;
    var flag=0;
    var timer = document.getElementById("timerBox");
    var countdown = 120;
    var chances = 3;
    
    //GAME SCREEN BECOMES VISIBLE ONCE THE USER BEGINS THE GAME
    playGame.onclick = function() {
        gameIntro.style.display = "none";
        mainGame.style.display = "block";
    };
    
    //THIS FUNCTION RESTARTS THE GAME
    function restartGame() {
        window.location.href="index.html";
    };
    playAgainLose.onclick = restartGame;
    playAgainWin.onclick = restartGame;
    
    //THIS FUNCTION POPULATES THE OPTION FIELDS FOR THE QUESTION
    function populateOptions() {
        var randomOptionOne = Math.floor(Math.random()*300);
        var randomOptionTwo = Math.floor(Math.random()*1000);
        var randomOptionThree = Math.random()*50;
        var optionArray = [randomOptionOne.toFixed(1), randomOptionTwo.toFixed(1), randomOptionThree.toFixed(1), correctAnswer.toFixed(1)];
        var randomizeOne = optionArray[Math.floor(Math.random()*optionArray.length)];
        optionArray.splice(optionArray.indexOf(randomizeOne), 1);
        optionOne.innerHTML = "<p>"+randomizeOne+"</p>";
        var randomizeTwo = optionArray[Math.floor(Math.random()*optionArray.length)];
        optionArray.splice(optionArray.indexOf(randomizeTwo), 1);
        optionTwo.innerHTML = "<p>"+randomizeTwo+"</p>";
        var randomizeThree = optionArray[Math.floor(Math.random()*optionArray.length)];
        optionArray.splice(optionArray.indexOf(randomizeThree), 1);
        optionThree.innerHTML = "<p>"+randomizeThree+"</p>";
        var randomizeFour = optionArray[Math.floor(Math.random()*optionArray.length)];
        optionArray.splice(optionArray.indexOf(randomizeFour), 1);
        optionFour.innerHTML = "<p>"+randomizeFour+"</p>";
    };
    
    //THIS FUNCTION DISPLAYS THE QUESTION AFTER THE DICE IS ROLLED
    function showQuestion() {
        rollDice.style.display = "none";
        var randomNumberOne = Math.floor(Math.random()*91);//GETS VALUE FOR FIRST Number
        var randomNumberTwo = Math.floor(Math.random()*91);//GETS THE SECOND NUMBER
        var operator = ["X", "+", "/", "-"];
        var randomOperator = operator[Math.floor(Math.random()*operator.length)];
        questionBlock.innerHTML = "<p>"+randomNumberOne+" "+randomOperator+" "+randomNumberTwo+"</p>";
        switch(randomOperator) {
            case "X":
                correctAnswer = randomNumberOne*randomNumberTwo;
            break;
            case "/":
                correctAnswer = randomNumberOne/randomNumberTwo;
            break;
            case "+":
                correctAnswer = randomNumberOne+randomNumberTwo;
            break;
            case "-":
                correctAnswer = randomNumberOne-randomNumberTwo;
            break;
            default:
                questionBlock.innerHTML = "<p>Refresh page</p>";
            break;
        }
        populateOptions();
    };
    
    //THIS FUNCTION MOVES THE CURRENT POSITION OF THE PLAYER TO A NEW BLOCK BASED ON THE NUMBER THAT APPEARS ON THE DICE
    function moveAhead() {
        currentPosition = indexCounter;
        currentPosition = indexCounter + stepsIncrease;
        indexCounter = currentPosition;
        if(indexCounter > 19) {
            currentPosition = currentPosition - 20;
            indexCounter = indexCounter - 20;
        }
        for(var i = 0; i<blocksArray.length; i++) {
            blocksArray[i].style.border = "1px solid #2B3D41";
        }
        if(blocksArray[currentPosition].className==="col-2 gameBlocks gameBlocksTransforms") {
            questionBlock.innerHTML = "<p>Ooops! Landed on the same spot. Roll Again.</p>";
            blocksArray[currentPosition].style.border = "5px solid #040F12";
        } else {
            blocksArray[currentPosition].className ="col-2 gameBlocks gameBlocksTransforms";
            blocksArray[currentPosition].style.border = "5px solid #040F12";
            showQuestion(); // SHOWS THE QUESTION TO BE SOLVED
        }
    };
    
    //THIS FUNCTION DISPLAYS THE LOSS MESSAGE
    function showLoseScreen() {
        clearInterval(mainTimer);
        mainGame.style.display = "none";
        victoryScreen.style.display = "none";
        loseScreen.style.display = "block";
    };
    
    //STARTS THE MAIN TIMER OF THE GAME TO 120 SECONDS
    function beginMainTimer() {
        timer.innerHTML = "<p>"+countdown+"</p>";
        mainTimer = setInterval(
            function() {
                timer.innerHTML = "<p>"+countdown--+"</p>";
                if(countdown < 0) {
                    clearInterval(mainTimer);
                    showLoseScreen();
                }
            }
        ,1000);
    };
    
    //ROLLS THE DICE AND MOVES THE PLAYER AHEAD
    rollDice.onclick = function() {
        stepsIncrease = Math.floor(Math.random()*6)+1;//dice roll
        diceBox.innerHTML = "<p>"+stepsIncrease+"</p>";
        moveAhead();
        if(flag === 0) {
            beginMainTimer(); //STARTS THE MAIN TIMER OF THE GAME
        }
    };
    
    //SHOWS THE VICTORY MESSAGE WHEN THE PLAYER WINS THE GAME
    function showVictoryMessage() {
        clearInterval(mainTimer);
        mainGame.style.display = "none";
        loseScreen.style.display = "none";
        victoryScreen.style.display = "block";
    };
    
    //MATCHES THE OPTION SELECTED BY THE USER TO THE CORRECT ANSWER
    function checkAnswer() {
        var correctAns = "<p>"+correctAnswer.toFixed(1)+"</p>"
        if(this.innerHTML === correctAns) {
            if(flag === 1) {
                currentWidth = currentWidth + 5;
            } else {
                currentWidth = 5;
            }
            flag = 1;
            progressFiller.style.backgroundColor = "#C11D00";
            progressFiller.style.width = ""+currentWidth+"%";
            blocksArray[currentPosition].style.border = "1px solid #2B3D41";
            if(currentWidth === 100) {
                showVictoryMessage();
            }
        } else {
            blocksArray[currentPosition].className ="col-2 gameBlocks";
            blocksArray[currentPosition].style.border = "1px solid #2B3D41";
            chances--;
            chanceBox.innerHTML = "<p>"+chances+"</p>";
            incorrectAnswerCounter++;
        }
        if(incorrectAnswerCounter === 3) {
            showLoseScreen();
        } else {
            questionBlock.innerHTML = "";
            optionOne.innerHTML = "";
            optionTwo.innerHTML = "";
            optionThree.innerHTML = "";
            optionFour.innerHTML = "";
            rollDice.style.display = "block";
            diceBox.innerHTML = "<p>Roll Again</p>";
        }
    };
    optionOne.onclick = checkAnswer;
    optionTwo.onclick = checkAnswer;
    optionThree.onclick = checkAnswer;
    optionFour.onclick = checkAnswer;
};