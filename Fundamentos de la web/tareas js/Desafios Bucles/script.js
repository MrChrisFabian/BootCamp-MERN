const DESAFIOS = document.querySelectorAll(".output");
const BOTON = document.querySelector("#iniciar")
BOTON.addEventListener('click', () => {
    let sum = 0;
    let product = 1;
    for (let i = 1; i < 21; i++) {
        if (i % 2 == 0) {
            DESAFIOS.item(0).innerText += i + "\n";
        }
    }

    for (let i = 100; i > 2; i--) {
        if (i % 3 == 0) {
            DESAFIOS.item(1).innerText += i + "\n";
        }
    }

    for (let i = 4; i > -6; i -= 1.5) {
        DESAFIOS.item(2).innerText += i + "\n";
    }
    for (let i = 0; i < 101; i++) {
        sum += i;
        DESAFIOS.item(3).innerText = sum + "\n";
    }
    for (let i = 1; i < 13; i++) {
        product *= i;
        DESAFIOS.item(4).innerText = product + "\n";

    }

});