const button = document.querySelectorAll(".button");
const contCards = document.querySelectorAll(".card");
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    contCards.forEach(card => {
        card.classList.add("hide");
        console.log(card.dataset.name);
        console.log('target name:', e.target.dataset.name);
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            console.log(card);
            card.classList.remove("hide");
        }
    });
}
button.forEach(button => button.addEventListener("click", filterCards));