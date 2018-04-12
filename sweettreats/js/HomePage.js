/*ANDRE'S SWEETTREATS HOMEPAGE JS FILE*/
/*AUTHOR: ZARNA ALPESH SHARMA*/

//THIS FUNCTION DISPLAYS THE DIV "WANT MORE" WHEN THE PARTICULAR IMAGE IS HOVERED ON
function showBlock(img) {
    switch(img.id.toString())
    {
        case 'one':
            first.style.display = "flex";
            this.onmouseout = function()
            {
                first.style.display = "none";
            }
        break;
        case 'two':
            second.style.display = "flex";
            this.onmouseout = function()
            {
                second.style.display = "none";
            }
        break;
        case 'three':
            third.style.display = "flex";
            this.onmouseout = function()
            {
                third.style.display = "none";
            }
        break;
        case 'four':
            fourth.style.display = "flex";
            this.onmouseout = function()
            {
            fourth.style.display = "none";
            }
        break;
        case 'five':
            fifth.style.display = "flex";
            this.onmouseout = function()
            {
            fifth.style.display = "none";
            }
        break;
        case 'six':
            sixth.style.display = "flex";
            this.onmouseout = function()
            {
            sixth.style.display = "none";
            }
        break;
        default:
        break;
    }
};
//WAIT FOR THE PAGE TO LOAD AND THEN ACCESS ALL ELEMENTS
window.onload = pageLoaded;

//THIS IS THE PAGELOADED FUNCTION THAT ACCESSES ALL THE ELEMENTS OF THE HTML PAGE
function pageLoaded() {
    var firstTry = document.getElementById("first");
    var dailySpecial = document.getElementById("special");
    var special = document.getElementById("specialcontainer");
    var specialBox = document.getElementById("specialBox");
    var today = new Date();
    var day = today.getDay();
    var toggleMenuBtn = document.getElementById("toggle-menu");
    var miniNav = document.getElementById("mini-nav");
    var special = document.getElementById("specialcontainer");
    var specialBox = document.getElementById("specialBox");
    var currentImage = document.getElementById("carouselMainImg"); //THIS IS THE HANDLE TO THE IMG ELEMENT ON THE HTML PAGE
    var imageGallery = ["images/cOne.jpeg","images/cTwo.jpeg","images/cThree.jpeg","images/cFour.jpeg","images/cFive.jpeg"]; //THIS IS THE ARRAY CONTAINING THE DIFFERENT SRC PATHS
    var linkOne = document.getElementById("imgOne");
    var linkTwo = document.getElementById("imgTwo");
    var linkThree = document.getElementById("imgThree");
    var linkFour = document.getElementById("imgFour");
    var linkFive = document.getElementById("imgFive");
    var linkArray = [linkOne, linkTwo, linkThree, linkFour, linkFive];
    var arrayIndex = 0;
    var nextIndex = 1;
    var carouselInterval = 5000;
    toggleMenuBtn.onclick = toggleResponsiveMenu;
    
    //THIS FUNCTION IS FOR THE RESPONSIVE NAVIGATION MENU - DROP DOWN
    function toggleResponsiveMenu() {
        if(miniNav.className === "toggleHide")
        {
            miniNav.className = "row show";
        } else {
            miniNav.className = "toggleHide";
        }
    };
    
    //THIS SWITCH CHANGES THE IMAGE AND TEXT UNDER THE DAILY SPECIALS SECTION AS PER THE DAY IN THE CLIENT'S BROWSER
    switch(day) {
        case 0:
            dailySpecial.src="images/sunday.jpeg";
            specialBox.innerHTML = "<p>Sunday Surprise !</p>";
        break;
        case 1:
            dailySpecial.src="images/monday.jpeg";
            specialBox.innerHTML = "<p>Monday Mania !</p>";
        break;
        case 2:
            dailySpecial.src="images/tuesday.jpeg";
            specialBox.innerHTML = "<p>Tuesday Twists !</p>";
        break;
        case 3:
            dailySpecial.src="images/wednesday.jpeg";
            specialBox.innerHTML = "<p>Wednesday Wishes !</p>";
        break;
        case 4:
            specialBox.innerHTML = "<p>Thursday Treats !</p>";
            dailySpecial.src="images/thursday.jpeg";
        break;
        case 5:
            dailySpecial.src="images/friday.jpeg";
            specialBox.innerHTML = "<p>Friday Fiesta !</p>";
        break;
        case 6:
            dailySpecial.src="images/saturday.jpeg";
            specialBox.innerHTML = "<p>Saturday Sins !</p>";
        break;
        default:
            alert("No specials");
        break;
    }
    
    //THIS DISPLAYS THE TEXT POPULATED BY THE SWITCH ON HOVER
    special.onmouseover = function() {
            specialBox.style.display = "flex";
    };
    special.onmouseout = function() {
            specialBox.style.display = "none";
    };
    
    /*LINKS CAROUSEL*/
    //THIS IS THE CAROUSEL OF THE LINKER BUTTONS UNDER THE IMAGE CAROUSEL WHICH CHANGE THE CSS CLASS AND TAKE TO THE ASSIGNED IMG ON CLICK
    linkOne.onclick = function() {
        autoSlide=clearInterval(autoSlide);
        linkOne.className = "linkers-selected";
        linkTwo.className = "linkers";
        linkThree.className = "linkers";
        linkFour.className = "linkers";
        linkFive.className = "linkers";
        currentImage.src="images/cOne.jpeg";
        arrayIndex = 0;
        autoSlide=setInterval(goForward,carouselInterval);
    };
    linkTwo.onclick = function() {
        autoSlide=clearInterval(autoSlide);
        linkTwo.className = "linkers-selected";
        linkOne.className = "linkers";
        linkThree.className = "linkers";
        linkFour.className = "linkers";
        linkFive.className = "linkers";
        arrayIndex = 1;
        currentImage.src="images/cTwo.jpeg";
        autoSlide=setInterval(goForward,carouselInterval);
    };
    linkThree.onclick = function() {
        autoSlide=clearInterval(autoSlide);
        linkThree.className = "linkers-selected";
        linkOne.className = "linkers";
        linkTwo.className = "linkers";
        linkFour.className = "linkers";
        linkFive.className = "linkers";
        currentImage.src="images/cThree.jpeg";
        arrayIndex = 2;
        autoSlide=setInterval(goForward,carouselInterval);
    };
    linkFour.onclick = function() {
        autoSlide=clearInterval(autoSlide);
        linkFour.className = "linkers-selected";
        linkOne.className = "linkers";
        linkTwo.className = "linkers";
        linkThree.className = "linkers";
        linkFive.className = "linkers";
        currentImage.src="images/cFour.jpeg";
        arrayIndex = 3;
        autoSlide=setInterval(goForward,carouselInterval);
    };
    linkFive.onclick = function()
    {
        autoSlide=clearInterval(autoSlide);
        linkFive.className = "linkers-selected";
        linkOne.className = "linkers";
        linkTwo.className = "linkers";
        linkThree.className = "linkers";
        linkFour.className = "linkers";
        currentImage.src="images/cFive.jpeg";
        arrayIndex = 4;
        autoSlide=setInterval(goForward,carouselInterval);
    };
    
    function goForward() { //going forward first, need to change the image, subtext and linker classnames.
        arrayIndex++; //so on going forward, I move the index one step ahead and change the arrays accordingly. since I know there are just 5 images I can check for the indexcounter not going beyond 4 and when it does that, it resets to 0.
        
        if(arrayIndex > 4) {
            arrayIndex = 0;
        }
        currentImage.src = imageGallery[arrayIndex]; //now flipping the image in the image holder.
        
        //now  for the linkers, the css of the new image link coming changes to  selected but the previous one reverses back to a class showing it as inactive.
        //so whatever my arrayIndex will be minus One will be the element linker for that image.
        var previousIndex = arrayIndex - 1;
        if(previousIndex < 0) {
            previousIndex = 4;
        }
        linkArray[arrayIndex].className = "linkers-selected";
        linkArray[previousIndex].className = "linkers"; //an error is thrown because there is no check for previousIndex going below 0. so It has to be reset to 4.
    };
    
    /*AUTOMATIC TIMER*/
    var autoSlide = setInterval(goForward, carouselInterval); //now lets set the automatic flipping to forward
    currentImage.onmouseover = pause;
    currentImage.onmouseout = play;
    function pause() {
        autoSlide = clearInterval(autoSlide);
    };
    function play() {
        autoSlide = setInterval(goForward, carouselInterval);
    };
};