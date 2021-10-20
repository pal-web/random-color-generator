
let currentcolor = document.querySelector(".currentcolor");
let currentcolor = document.querySelector("body");
let currentcolor = document.querySelector(".generator-btn");

bodyElem.style.backbackgroundcolor =currentcolor.innerText;

generator.addEventlisterner("click",()=>{
let randomcolor= "";
    let characters = "0123456789abcdef";
    for(let i = 0; i < 6; i ++){
        randomcolor = randomcolor + characters[Math.floor(math.random() * 16)];


    }
    currentcolor.innerTextn= "#" =randomcolor;
    bodyElem.style.backbackgroundcolor = "#" + randomcolor;

})


