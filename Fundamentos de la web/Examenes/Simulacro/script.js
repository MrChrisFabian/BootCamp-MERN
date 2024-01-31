
let pettBruce = 9;
let pettPepper = 10;
let pettOscar = 11;
const DONATE = document.querySelector("#donate");
const SELECT = document.querySelector("#mascota");
const PETTINGCONT = document.querySelectorAll(".pettings");

DONATE.addEventListener('click', () => {
    DONATE.remove();
})
SELECT.addEventListener('change', () => {
    console.log(SELECT.value)
    if (SELECT.value == 2) {
        alert("Estas buscando un Perro")
    }
    if (SELECT.value == 1) {
        alert("Estas buscando un Gato")
    }
})
function petting(element) {
    let indice = parseInt(element.getAttribute("data-id"));
    switch (indice) {
        case 0:

            PETTINGCONT.item(indice).innerText = (pettBruce++) + " petting(s)"
            break;
        case 1:
            PETTINGCONT.item(indice).innerText = (pettPepper++) + " petting(s)"

            break;
        case 2:
            PETTINGCONT.item(indice).innerText = (pettOscar++) + " petting(s)"
            break;
    }
}

