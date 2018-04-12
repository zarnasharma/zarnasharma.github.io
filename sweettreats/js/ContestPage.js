/*ANDRE'S SWEETTREATS CONTEST PAGE JS FILE*/
/*AUTHOR: ZARNA ALPESH SHARMA*/
window.onload = pageLoaded;

//LOADING ALL ELEMENTS AND DECLARING VARIABLES
function pageLoaded() { 
    var frameOne = document.getElementById("gameIntro");
    var frameTwo = document.getElementById("gameStatic");
    var levelIndicator = document.getElementById("questionCounter");
    var cookieBarFill = document.getElementById("cookieBar");
    var frameTwoGames = document.getElementById("gameFrames");
    var testImage = document.getElementById("stimulusFrame");
    var distractors = document.getElementById("testFrames");
    var stimulusImage = document.getElementById("stimulusImage");
    var playGame = document.getElementById("playGame");
    var timer = document.getElementById("timerBox");
    var finalScreen = document.getElementById("finalScreen");
    var placeOne = document.getElementById("one");
    var placeTwo = document.getElementById("two");
    var placeThree = document.getElementById("three");
    var placeFour = document.getElementById("four");
    var placeFive = document.getElementById("five");
    var placeSix = document.getElementById("six");
    var playGameAgain = document.getElementById("playGameAgain");
    var playAgain = document.getElementById("playAgain");
    var distArray = [];
    var testTimer, mainTimer, currentImageNumber, currentTestImage;
    var countdown = 29;
    var lvlCounter = 0; //GAME LEVEL COUNTER FOR LEVEL NUMBER
    var imageArray = [ //THIS ARRAY HOLDS ALL THE IMAGES DISPLAYED IN THE GAME
        'images/distractorImages/distOne.jpeg',
        'images/distractorImages/distTwo.jpeg',
        'images/distractorImages/distThree.jpeg',
        'images/distractorImages/distFour.jpeg',
        'images/distractorImages/distFive.jpeg',
        'images/distractorImages/distSix.jpeg',
        'images/distractorImages/distSeven.jpeg',
        'images/distractorImages/distEight.jpeg',
        'images/distractorImages/distNine.jpeg',
        'images/distractorImages/distTen.jpeg',
        'images/distractorImages/distEleven.jpeg',
        'images/distractorImages/distTwelve.jpeg',
        'images/distractorImages/distThirteen.jpeg',
        'images/distractorImages/distFourteen.jpeg',
        'images/distractorImages/distFifteen.jpeg',
        'images/distractorImages/distSixteen.jpeg',
        'images/distractorImages/distSeventeen.jpeg'
    ];
    var toggleMenuBtn = document.getElementById("toggle-menu");
    var miniNav = document.getElementById("mini-nav");
    function toggleResponsiveMenu() {
        if(miniNav.className === "toggleHide") {
            miniNav.className = "row show";
        } else {
            miniNav.className = "toggleHide";
        }
    };
    toggleMenuBtn.onclick = toggleResponsiveMenu;
    
    //THIS FUNCTION RETURNS A NUMBER THAT HELPS SELECT ANY ONE OF THE IMG SRC FROM THE ARRAY
    function randomImage() {
        return Math.floor(Math.random()*17);
    };
    
    //THIS FUNCTION SETS ONE OF THE SIX BLOCKS OF DISTRACTOR FRAMES WITH THE CORRECT SOLUTION IMG 
    function testImageSetter() {
        currentImageNumber = randomImage(); //holder for the image to be placed as test image
        currentTestImage = imageArray[currentImageNumber];
        stimulusImage.src = currentTestImage;
    };
    
    //THIS METHOD CHECKS WHETHER THE IMAGE CLICKED BY THE USER WAS THE TEST IMAGE. DONE BY COMPARING THE SRC OF BOTH IMAGES.
    function compareAnswers() {
        mainTimer = clearInterval(mainTimer);
        var wholeSrc = this.src;
        var startIndex = wholeSrc.indexOf("images");
        var finalSrc = wholeSrc.substring(startIndex);
        if(finalSrc === currentTestImage) {
            var cookies = "<div class='col-1'><img src='images/cookie.png' alt='cookie coins' class='responsiveImg'/></div>";
            cookieBarFill.innerHTML += cookies;
        }
        //THIS IS A FALLBACK THAT ENSURES THAT THE PLAYER DOESNT COMPLETE THE GAME. GENERATES A RANDOM NUMBER AND COMPARES IT WITH 2, GAME ENDS WHEN THERE IS A MATCH
        if(lvlCounter < 10) {
            var oopsEnd = Math.floor(Math.random()*4)+1;
            if(oopsEnd === 2) {
                clearInterval(mainTimer);
                distractors.style.display = "none";
                frameTwo.style.display = "none";
                oopsScreen.style.display = "block";
            } else {
                distArray = [];
                displayTestImage();
            }
        } else {
            clearInterval(mainTimer);
            distractors.style.display = "none";
            frameTwo.style.display = "none";
            oopsScreen.style.display = "block";
        }
    };
    
    //THIS IS THE MAIN FUNCTION THAT POPULATES THE OTHER FIVE PLACEHOLDER WITH RANDOM IMAGES FROM THE ARRAY APART FROM THE CURRENT TEST IMAGE
    function testFramesSetter() {
        var testSpot = Math.floor(Math.random()*6)+1;
        imageArray.splice(currentImageNumber, 1);
        while(distArray.length < 5) {
            var random = Math.floor(Math.random()*16);
            var distImage = imageArray[random];
            if(distArray.indexOf(distImage)=== -1) {
                distArray.push(distImage);
            }
        }
        switch(testSpot) {
            case 1:
                placeOne.src = currentTestImage;
                placeOne.onclick = compareAnswers;
                placeTwo.src = distArray[0];
                placeTwo.onclick = compareAnswers;
                placeThree.src = distArray[1];
                placeThree.onclick = compareAnswers;
                placeFour.src = distArray[2];
                placeFour.onclick = compareAnswers;
                placeFive.src = distArray[3];
                placeFive.onclick = compareAnswers;
                placeSix.src = distArray[4];
                placeSix.onclick = compareAnswers;
            break;
            case 2:
                placeTwo.src = currentTestImage;
                placeTwo.onclick = compareAnswers;
                placeOne.src = distArray[0];
                placeOne.onclick = compareAnswers;
                placeThree.src = distArray[1];
                placeThree.onclick = compareAnswers;
                placeFour.src = distArray[2];
                placeFour.onclick = compareAnswers;
                placeFive.src = distArray[3];
                placeFive.onclick = compareAnswers;
                placeSix.src = distArray[4];
                placeSix.onclick = compareAnswers;
            break;
            case 3:
                placeThree.src = currentTestImage;
                placeThree.onclick = compareAnswers;
                placeTwo.src = distArray[0];
                placeTwo.onclick = compareAnswers;
                placeOne.src = distArray[1];
                placeOne.onclick = compareAnswers;
                placeFour.src = distArray[2];
                placeFour.onclick = compareAnswers;
                placeFive.src = distArray[3];
                placeFive.onclick = compareAnswers;
                placeSix.src = distArray[4];
                placeSix.onclick = compareAnswers;
            break;
            case 4:
                placeFour.src = currentTestImage;
                placeFour.onclick = compareAnswers;
                placeTwo.src = distArray[0];
                placeTwo.onclick = compareAnswers;
                placeThree.src = distArray[1];
                placeThree.onclick = compareAnswers;
                placeOne.src = distArray[2];
                placeOne.onclick = compareAnswers;
                placeFive.src = distArray[3];
                placeFive.onclick = compareAnswers;
                placeSix.src = distArray[4];
                placeSix.onclick = compareAnswers;
            break;
            case 5:
                placeFive.src = currentTestImage;
                placeFive.onclick = compareAnswers;
                placeTwo.src = distArray[0];
                placeTwo.onclick = compareAnswers;
                placeThree.src = distArray[1];
                placeThree.onclick = compareAnswers;
                placeFour.src = distArray[2];
                placeFour.onclick = compareAnswers;
                placeOne.src = distArray[3];
                placeOne.onclick = compareAnswers;
                placeSix.src = distArray[4];
                placeSix.onclick = compareAnswers;
            break;
            case 6:
                placeSix.src = currentTestImage;
                placeSix.onclick = compareAnswers;
                placeTwo.src = distArray[0];
                placeTwo.onclick = compareAnswers;
                placeThree.src = distArray[1];
                placeThree.onclick = compareAnswers;
                placeFour.src = distArray[2];
                placeFour.onclick = compareAnswers;
                placeFive.src = distArray[3];
                placeFive.onclick = compareAnswers;
                placeOne.src = distArray[4];
                placeOne.onclick = compareAnswers;
            break;
            default:
                alert("Something is not right with this page. Please check back later");
            break;
        };
        imageArray.splice(currentImageNumber, 0, currentTestImage);
    };
    
    //STARTS THE MAIN TIMER SET TO 60 SECONDS, AFTER WHICH, THE FINAL SCREEN APPEARS
    function beginMainTimer() {
        timer.innerHTML = "<p>"+countdown+"</p>";
        mainTimer = setInterval(
            function() {
                timer.innerHTML = "<p>"+countdown--+"</p>";
                if(countdown < 0) {
                    clearInterval(mainTimer);
                    distractors.style.display = "none";
                    frameTwo.style.display = "none";
                    finalScreen.style.display = "block";
                }
            }
        ,1000);
    };
    
    //FILLS THE PROBE PLACEHOLDERS WITH IMAGES, HIDES THE TEST IMAGE AND STOPS THE TIMER, ALSO CALLS THE FUNCTION THAT STARTS THE MAIN TIMER
    function displayDistractors() { 
        clearInterval(testTimer);
        testImage.style.display = "none";
        distractors.style.display = "block";
        testFramesSetter();
        beginMainTimer();
    };
    
    //DISPLAY THE TEST IMAGE TO BE MEMORIZED
    function displayTestImage() {
        frameOne.style.display = "none";
        lvlCounter++;
        levelIndicator.innerHTML = "<p>Level "+lvlCounter+"</p>";
        testImage.style.display = "flex";
        distractors.style.display = "none";
        testImageSetter(); //CALLING THE METHOD THAT FILLS THE PLACEHOLDER WITH IMAGE
        testTimer = setInterval(displayDistractors, 3000);//THIS IMAGE WILL BE DISPLAYED FOR 3 SECONDS, AFTER WHICH PROBE IMAGES ARE DISPLAYED
    };
    
    //PLAYER BEGINS GAME ON CLICK
    playGame.onclick = function() {
        frameOne.style.display = "none";
        frameTwo.style.display = "block";
        displayTestImage();
    };
    
    //THIS FUNCTION RELOADS THE PAGE ON PLAY AGAIN CLICK
    function restartGame() {
        window.location.href="contests.html";
    };
    playGameAgain.onclick = restartGame;
    playAgain.onclick = restartGame;
};