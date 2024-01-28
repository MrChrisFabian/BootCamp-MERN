let like1 = 12;
let like2 = 9;
let like3 = 10;
let elementLikes = document.querySelectorAll(".likes");

function like(element) {
    let indice = element.getAttribute("data-id");
    console.log(parseInt(indice))
    switch (parseInt(indice)) {
        case 0:
            console.log(elementLikes.item(indice))
            like1 += 1;
            elementLikes.item(indice).innerText = like1  + " likes";
            break;
        case 1:
            console.log(elementLikes.item(indice))
            like2 += 1;
            elementLikes.item(indice).innerText = like2  + " likes";
            break;
        case 2:
            console.log(elementLikes.item(indice))
            like3 += 1;
            elementLikes.item(indice).innerText = like3  + " likes";
            break;
    }
}