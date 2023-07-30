"use strict";

const screen = document.getElementById("calculator-screen");
const buttonContainer = document.getElementById("calculator-buttons");
const extraButtonsContainer = document.getElementById("extra-buttons");
const keySound = document.getElementById("key-sound");
let numbersContainer = "";

console.log(keySound);

buttonContainer.addEventListener("click",e=>{
    if(e.target.classList.contains("button")){
        keySound.currentTime = 0;
numbersContainer += e.target.innerHTML;
screen.firstElementChild.innerHTML = numbersContainer;
keySound.play();

}
else if(e.target.classList.contains("equal")){
    keySound.currentTime = 0;
screen.children[1].innerHTML = resolvOperation();
numbersContainer = resolvOperation();
screen.firstElementChild.innerHTML = numbersContainer;
keySound.play()
}
});

extraButtonsContainer.addEventListener("click", e =>{
if(e.target.classList.contains("delete-one")){
    keySound.currentTime = 0;
numbersContainer = String(numbersContainer).slice(0,-1);
screen.firstElementChild.innerHTML = numbersContainer;
keySound.play();

}
else if(e.target.classList.contains("delete-all"))
numbersContainer = "";
keySound.currentTime = 0;
screen.firstElementChild.innerHTML = numbersContainer;
screen.children[1].innerHTML = numbersContainer;
keySound.play()
});


const resolvOperation = ()=> eval(screen.firstElementChild.innerHTML);
