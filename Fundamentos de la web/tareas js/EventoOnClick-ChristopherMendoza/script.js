const BotLogin = document.getElementById("sesion")
const BotAdd = document.getElementById("Agregar")
const BotLike = document.getElementById("megusta-1")
const BotLike2 = document.getElementById("megusta-2")
let likes1 = 14;
let likes2 = 50;
BotLogin.addEventListener("click", () => {
    BotLogin.innerHTML = "Logout";
});

BotAdd.addEventListener("click",()=>{
    BotAdd.remove();
})

BotLike.addEventListener("click", () => {
    likes1+=1;
    BotLike.innerText = likes1 + " Likes";
    alert("Ninja was liked");
});

BotLike2.addEventListener("click", () => {
    likes2+=1;
    BotLike2.innerText = likes2 + " Likes";
    alert("Ninja was liked");
});

