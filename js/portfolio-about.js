//ZARNA SHARMA PORTFOLIO SITE - AUTHOR: ZARNA ALPESH SHARMA
var miniNav = document.getElementById("mini-nav");
var toggleButton = document.getElementById("toggle-menu");
var meLinksArray = document.getElementsByClassName("me");
var contactLinksArray = document.getElementsByClassName("contact");
function showNav() {//MENU TOGGLE FOR RESPONSIVE NAVIGATION
    if(miniNav.className === "hide") {
        miniNav.className = "row"; 
    } else {
        miniNav.className = "hide";
    }
}
toggleButton.onclick = showNav;
function changeContactClass() {
    var i;
    for(i=0; i<meLinksArray.length; i++) {
        meLinksArray[i].className =  "me hover";
    }
    for(i=0; i<contactLinksArray.length; i++) {
        contactLinksArray[i].className = "contact hover selected"
    }
}
function changeToMe() {//HIGHLIGHTS THE ME LINK, AS THE USER SCROLLED UP, AWAY FROM THE CONTACT DETAILS.
    var i;
    for(i=0; i<meLinksArray.length; i++) {
        meLinksArray[i].className =  "me hover selected";
    }
    for(i=0; i<contactLinksArray.length; i++) {
        contactLinksArray[i].className = "contact hover"
    }
}
window.onscroll = function(e) {//WHEN THE PAGE IS SCROLLED DOWN TO BOTTOM, THE CONTACT LINK GETS HIGHLIGHTED AS THE DETAILS ARE IN THE FOOTER
if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    changeContactClass();
}
if(window.pageYOffset == 0) {//WHEN THE PAGE IS NOT SCROLLED, SCROLL UP IS NOT VISIBLE, ON SCROLL IT APPEARS.
    changeToMe();
    document.getElementById("scrollUp").style.display = "none";
} else {
    document.getElementById("scrollUp").style.display = "block";
    }
}