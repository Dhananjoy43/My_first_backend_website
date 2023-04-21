
/*----------------Javascript for button swiching--------------------*/
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function showtab(tabname) {
    for (const tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}


/*----------------Javascript for sidebar--------------------*/
let sidebar = document.getElementById("sidebar");

function openmenu() {
    sidebar.style.right = "0";
}
function closemenu() {
    sidebar.style.right = "-200px";
}


/*----------------Javascript for sticky navbar--------------------*/
let navbar = document.getElementById("navbar");

window.onscroll = function () {
    if (window.pageYOffset >= sidebar.offsetTop) {
        navbar.classList.add("sticky");
    }
    else navbar.classList.remove("sticky");

}