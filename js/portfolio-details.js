//ZARNA SHARMA PORTFOLIO SITE - AUTHOR: ZARNA ALPESH SHARMA
var miniNav = document.getElementById("mini-nav");
var toggleButton = document.getElementById("toggle-menu");
var contactLinksArray = document.getElementsByClassName("contact");
var nextBtn = document.getElementById("next"); //FORWARD BUTTON
var backBtn = document.getElementById("back"); //BACKWARD BUTTON
var sliderHolder = document.getElementById("mainCarouselHolder");
var stageOne = document.getElementById("stageOne");
var stageTwo = document.getElementById("stageTwo");
var stageThree =  document.getElementById("stageThree");
var stageFour =  document.getElementById("stageFour");
var stageFive = document.getElementById("stageFive");
var sliderArray = [stageOne, stageTwo, stageThree, stageFour, stageFive];
var arrayIndex  = 0;
function showNav() {//MENU TOGGLE FOR RESPONSIVE NAVIGATION
    if(miniNav.className === "hide") {
        miniNav.className = "row"; 
    } else {
        miniNav.className = "hide";
    }
}
toggleButton.onclick = showNav;
/* for(var i =0; i<sliderArray.length; i++)
{
    console.log(sliderArray[i].innerHTML);
} */
//SLIDER
function goForward() {
    console.log(arrayIndex);
    arrayIndex++;
    //there are 5 slides so the arrayIndex cannot go beyond 4 and when it does, we reset it to 0
    if(arrayIndex > 4)
    {
        console.log(arrayIndex);
        arrayIndex = 0;
    }
    console.log(arrayIndex);
    console.log(sliderArray[arrayIndex]);
    sliderArray[arrayIndex].className = "row";
    console.log(sliderArray[arrayIndex]);
    sliderHolder.innerHTML = sliderArray[arrayIndex].innerHTML;
}
function goBackwards()
{
    //now since we need to go back in the array, we shall decrement the array index
    arrayIndex--;
    if(arrayIndex < 0)
    {
        arrayIndex = 4;
    }
    //flipping the current slide to the previous one
    sliderHolder.innerHTML = sliderArray[arrayIndex].innerHTML;
}
function changeContactClass() {
    var i;
    for(i=0; i<contactLinksArray.length; i++) {
        contactLinksArray[i].className = "contact hover selected";
    }
}
function removeContactHover() {
    var i;
    for(i=0; i<contactLinksArray.length; i++) {
        contactLinksArray[i].className = "contact hover";
    }
}
nextBtn.onclick = goForward;
backBtn.onclick = goBackwards;
window.onscroll = function(e) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        changeContactClass();
    }
    if(window.pageYOffset == 0) {
    removeContactHover();
    document.getElementById("scrollUp").style.display = "none";
    } else {
        document.getElementById("scrollUp").style.display = "block";
    }
};