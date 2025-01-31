function blackground(card){
    let n = document.querySelector(".blackground");
    if (n.style.display == "block") {
        n.style.display = "none";
        card.classList.remove("fijar");
    } else {
        n.style.display = "block"
        card.classList.add("fijar");
    }
}