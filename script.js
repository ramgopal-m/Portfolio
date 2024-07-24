var typed = new Typed(".text", {
    strings: ["Student . . ." , "Programmer . . ." , "Web Developer . . ."],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})

var tabl=document.getElementsByClassName("tab-links");
var tabco=document.getElementsByClassName("tabc");
function opentab(tabname){
    for(tabli of tabl){
        tabli.classList.remove("actl");
    }
    for(tabcon of tabco){
        tabcon.classList.remove("actt");
    }
    event.currentTarget.classList.add("actl");
    document.getElementById(tabname).classList.add("actt");
}