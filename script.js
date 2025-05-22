const bulb = document.getElementById("bulb");
const off = document.getElementById("off");
const on = document.getElementById("on");

function lightOn(){
    
    bulb.style.backgroundColor = "yellow";
    bulb.style.boxShadow = "yellow 1px 40px 80px 50px";
}
function lightOff(){
    bulb.style.backgroundColor = "rgba(128, 128, 128, 0.64)";
    bulb.style.boxShadow = "black 0px 10px 40px";
    
}