
/* elements & variables */
var navBarProfilePic = document.getElementsByClassName("navBar__bgPicture")[0];
var navBarDownloadCV = document.getElementsByClassName("navBar__CVbtn")[0];
var professionalSection = document.getElementById("professional");
var homeDownloadCV = document.getElementsByClassName("home__downloadCV")[0];
var SideBar = document.getElementById("navBar");
var porcentageBars = document.getElementsByClassName("professional__percentBar");
var navBarScrolled = false;

/* FUNCTIIONS */

/*General Functions*/
function detectmob() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true;
    } 
    else {
        return false;
    }
}
/*Navigation Functions*/
function navBarSlide() {
    if (document.documentElement.scrollTop >= (homeDownloadCV.offsetTop + homeDownloadCV.clientHeight) && !navBarScrolled) {
        navBarScrolled = true;
        removeNavClasses();
    }
    if (document.documentElement.scrollTop < (homeDownloadCV.offsetTop + homeDownloadCV.clientHeight) && navBarScrolled) {
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
    if (!detectmob() || window.innerWidth > 768) {
        document.addEventListener("scroll", navBarSlide);
    } 
    else {
        document.removeEventListener("scroll", navBarSlide);
    }
}

function updateSideBar () {
    if (window.innerWidth <= 768) {
        closeNav();
    } else {
        navBarSlide();
    }
}

/* Professional Skills Section */

function barPorcentagesLoad () {
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


/* EVENTLISTENER */

slideEventListener();

window.addEventListener("resize", slideEventListener);
window.addEventListener("resize", updateSideBar);

barPorcentagesLoad();
document.addEventListener("scroll", barPorcentagesLoad);