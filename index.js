import Current from "./current.js";

let canvas= document.querySelector("#canvas");
let context= canvas.getContext("2d");  
let current = new Current(context);


requestAnimationFrame(startloop);

function startloop(){
    current.update();    
    requestAnimationFrame(startloop);
}