
/* elements & variables */
var navBarProfilePic = document.getElementsByClassName("navBar__bgPicture")[0];
var navBarDownloadCV = document.getElementsByClassName("navBar__CVbtn")[0];
var professionalSection = document.getElementById("professional");
var homeDownloadCV = document.getElementsByClassName("home__downloadCV")[0];
var SideBar = document.getElementById("navBar");
var porcentageBars = document.getElementsByClassName("professional__percentBar");
var verticalLine = document.getElementsByClassName("experince__line")[0];
var vectorsPoints = document.getElementsByClassName("experince__point");
var flipButton = document.getElementsByClassName("flip__btn");
var awardsSection = document.getElementById("awardsInterest");
var navBarScrolled = false;



/* FUNCTIIONS */

/* General Functions */
function detectMob() { 
    if( navigator.userAgent.match(/Android/i||/webOS/i||/iPhone/i||/iPad/i||/iPod/i||/BlackBerry/i||/Windows Phone/i)){
        return true;
    } 
    else {
        return false;
    }
}

function isNotMobile() {
    return !detectMob() || window.innerWidth > 768;
}

/* Navigation Functions */
function navBarSlide() {
    const hasScrolled = document.documentElement.scrollTop >= (homeDownloadCV.offsetTop + homeDownloadCV.clientHeight);
    if (hasScrolled && !navBarScrolled) {
        navBarScrolled = true;
        removeNavClasses();
    }
    if (!hasScrolled && navBarScrolled) {
        navBarScrolled = false;
        addNavClasses(); 
    }
}
function removeNavClasses () {
    navBarProfilePic.classList.remove("navBar__profilePic--offview");
    navBarDownloadCV.classList.remove("navBar__CVbtn--offview");
}

function addNavClasses () {
    navBarProfilePic.classList.add("navBar__profilePic--offview");
    navBarDownloadCV.classList.add("navBar__CVbtn--offview");
}

function openNav() {
    removeNavClasses();
    SideBar.classList.add("navBar__sideBar--open");
}

function closeNav() {
    addNavClasses();
    SideBar.classList.remove("navBar__sideBar--open");
}

function slideEventListener() {
    if (isNotMobile()) {
        document.addEventListener("scroll", navBarSlide);
    } 
    else {
        document.removeEventListener("scroll", navBarSlide);
    }
}

function updateSideBar () {
    window.innerWidth <= 768 ? closeNav() : navBarSlide();
}

/* Professional Skills Section */

function loadingBarPorcentages () {
    Array.from(porcentageBars).forEach(porcentageBar => {
        var widthBar = (parseInt(porcentageBar.textContent.substr(0, porcentageBar.textContent.length-1)) - 20).toString();
        var widthBarStr = "calc(" + widthBar + "vw)";
        if (porcentageBar.style.width != widthBarStr){
            if ((porcentageBar.getBoundingClientRect().bottom) < window.innerHeight){
                porcentageBar.style.width = "calc("+porcentageBar.textContent.substr(0, porcentageBar.textContent.length-1)+"vw - 20vw";
            }
        }        
    });
}

/* Experience Section */

function movingExperienceLine(){
    if(isNotMobile()){
        if(vectorsPoints[1].getBoundingClientRect().top < window.innerHeight){
            var heightLine = (vectorsPoints[vectorsPoints.length-1].offsetTop - vectorsPoints[0].offsetTop);
            verticalLine.style.height = (heightLine.toString() + "px");
        }
    }
}

/* Awards & Interest Section */

function flipList() {
    if(awardsSection.classList.contains("flip-vertical-right")){
        awardsSection.classList.remove("flip-vertical-right");
        awardsSection.classList.add("flip-vertical-left");
    }
    else if (awardsSection.classList.contains("flip-vertical-left")) {
        awardsSection.classList.remove("flip-vertical-left");
        awardsSection.classList.add("flip-vertical-right");
    }
    else {
        awardsSection.classList.add("flip-vertical-right");
    }
}

/* EVENTLISTENER */

slideEventListener();

window.addEventListener("resize", slideEventListener);
window.addEventListener("resize", updateSideBar);

loadingBarPorcentages();
document.addEventListener("scroll", loadingBarPorcentages);

document.addEventListener("scroll", movingExperienceLine);