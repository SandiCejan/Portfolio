var join = document.getElementById("join");
var join2 = document.getElementById("join2");
var join3 = document.getElementById("join3");
var join4 = document.getElementById("join4");
var join5 = document.getElementById("join5");
var panel = document.getElementById("panel");
var panel2 = document.getElementById("panel2");
var panel3 = document.getElementById("panel3");
var panel4 = document.getElementById("panel4");

var projectsContent = document.getElementById("projectsContent");
var projectssvg = document.getElementById("c");

function scroll() {
    var a = -document.body.getBoundingClientRect().top - 100
    if (a > 0)
        join.style.height = a + "px";
    else
        join.style.height = "0px";
    if (a > 500) {
        document.body.onscroll = scroll2
        panel.style.opacity = "0.5";
    }
}

function scroll2() {
    var a = -document.body.getBoundingClientRect().top - 850
    if (a > 0)
        join2.style.height = a + "px";
    else
        join2.style.height = "0px";
    if (a < -200) {
        document.body.onscroll = scroll
        panel.style.opacity = "0";
    } else if (a > 1000) {
        document.body.onscroll = scroll3
        panel2.style.opacity = "0.5";

    }
}

function scroll3() {
    var a = -document.body.getBoundingClientRect().top - 2050
    if (a > 0)
        join3.style.height = a + "px";
    else
        join3.style.height = "0px";
    if (a < -200) {
        document.body.onscroll = scroll2
        panel2.style.opacity = "0";
    } else if (a > 1000) {
        document.body.onscroll = scroll4
        panel3.style.opacity = "0.5";
    }
}

function scroll4() {
    var a = -document.body.getBoundingClientRect().top - 3300
    if (a > 0)
        join4.style.height = a + "px";
    else
        join4.style.height = "0px";
    if (a < -200) {
        document.body.onscroll = scroll3
        panel3.style.opacity = "0";
    } else if (a > 1000) {
        document.body.onscroll = scroll5
        panel4.style.opacity = "0.5";
    }
}

function scroll5() {
    var a = -document.body.getBoundingClientRect().top - 4550
    if (a > 0)
        join5.style.height = a + "px";
    else
        join5.style.height = "0px";
    if (a < -200) {
        document.body.onscroll = scroll4
        panel4.style.opacity = "0";
    } else if (a > 600) {
        document.body.onscroll = scroll6
        projectssvg.setAttribute("r", "100%");
        delay(500).then(() => then1());


    }
}

function scroll6() {
    var a = -document.body.getBoundingClientRect().top - 5150
    if (a < 0) {
        document.body.onscroll = scroll4
        projectsContent.style.opacity = "0";
        projectssvg.setAttribute("r", "0");
        document.body.style.color = "white";
        style.innerHTML = `
  
  ::-webkit-scrollbar-thumb {
     background: white;
  }
  ::-webkit-scrollbar-thumb:hover {
     background: rgb(212, 212, 212);
 }
  ::-webkit-scrollbar-track {
     background: black;
 }`;
    } else if (a > 500) {

    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
var style = document.createElement('style');
document.head.appendChild(style);

function then1() {
    projectsContent.style.opacity = "1";
    document.body.style.color = "black";
    style.innerHTML = `
  
 ::-webkit-scrollbar-thumb {
    background: black;
 }
 ::-webkit-scrollbar-thumb:hover {
    background: rgb(32, 32, 32);
}
 ::-webkit-scrollbar-track {
    background: white;
}`;
}

document.body.onscroll = scroll