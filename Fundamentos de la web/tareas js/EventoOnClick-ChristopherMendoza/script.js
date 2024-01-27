const BotLogin = document.getElementById("sesion")
const BotAdd = document.getElementById("Agregar")
const BotLike = document.getElementById("megusta-1")
const BotLike2 = document.getElementById("megusta-2")

BotLogin.addEventListener("click", () => {
    BotLogin.innerHTML = "Logout";
});

BotAdd.addEventListener("click",()=>{
    BotAdd.remove();
})

BotLike.addEventListener("click", () => {
    alert("Ninja was liked");
});

BotLike2.addEventListener("click", () => {
    alert("Ninja was liked");
});

