const BUTON = document.querySelector("#inicio");
BUTON.addEventListener('click', () => {
    for (let i = 1; i < 101; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            document.querySelector(".numeros").innerText += i + ": " + "FuzzBuzz" + "\n";
        }
        else if (i % 5 == 0) {
            document.querySelector(".numeros").innerText += i + ": " + "Buzz" + "\n";
        }

        else if (i % 3 == 0) {
            console.log(i)
            document.querySelector(".numeros").innerText += i + ": " + "Fuzz" + "\n";
        }
        else{
            document.querySelector(".numeros").innerText += i + ": " +  "\n";
        }
    }
})