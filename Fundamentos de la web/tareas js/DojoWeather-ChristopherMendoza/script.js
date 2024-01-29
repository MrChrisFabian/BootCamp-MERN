function removeCookie(element) {
    element.parentNode.parentNode.remove()
}
function changeGrade() {
    if (select.value == 1) {
        let tempMin;
        let tempMax;
        for (let i = 0; i < minimos.length; i++) {
            tempMin = (parseInt(minimos.item(i).innerText));
            tempMax = (parseInt(maximos.item(i).innerText));
            minimos.item(i).innerText = Math.round((tempMin * 9 / 5) + 32) + "°"
            maximos.item(i).innerText = Math.round((tempMax * 9 / 5) + 32) + "°"
        }

    }
    else {
        for (let i = 0; i < minimos.length; i++) {
            tempMin = ["24°", "27°", "21°", "26°"]
            tempMax = ["18°", "19°", "16°", "21°"]
            minimos.item(i).innerText = tempMin[i];
            maximos.item(i).innerText = tempMax[i];
        }
    }

}
function changeCity() {
    alert("Cargando informe meteorológico…")
}
let minimos = document.querySelectorAll(".min");
let maximos = document.querySelectorAll(".max");
const select = document.querySelector("#grados")

