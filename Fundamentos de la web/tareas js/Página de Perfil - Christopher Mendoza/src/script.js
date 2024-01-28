let requestCont = 2;
let connectionCont = 498;
let nombres = ["Fabián López","Jone Doe","Geronimo Ramos","Luján Casco"]
let nombre;
function newName(){
    nombre = nombres[Math.floor(Math.random() * nombres.length)]; 
    document.querySelector("#Name").innerHTML=nombre;
}
function accept(element) {
    requestCont -= 1;
    connectionCont += 1;
    let padre = element.parentNode.parentNode;
    padre.remove();
    document.querySelectorAll(".contador").item(0).innerText = requestCont;
    document.querySelectorAll(".contador").item(1).innerText = connectionCont;
}

function decline(element) {
    requestCont -= 1;
    let padre = element.parentNode.parentNode;
    padre.remove();
    document.querySelectorAll(".contador").item(0).innerText = requestCont;
}