function nevar(){
    let copos = document.querySelector(".copos");
    copos.classList.add("nevar");
    let sonido = document.querySelector("audio");
    sonido.play();
    setTimeout(()=>{
        copos.classList.remove("nevar");
    },10000);
}
