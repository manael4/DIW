var aux = null;
var fallos = 0;
var intentos = 0;
var parejas = 0;
function girarCarta(cartaGirada){
    if (!cartaGirada.classList.contains('girada')) {
        cartaGirada.classList.add('girada');
        setTimeout(comparar,1001,cartaGirada);
        if (parejas===3) {
            setTimeout(alert("Ganaste!!!!"),3001);
        }
    } else {
        document.getElementById("cartaGirada").innerHTML="Esta carta ya está girada, elige otra";
    }
}

function comparar(carta1){
    if (aux==null) {
        aux = carta1;
    } else {
        intentos++;
        if (aux.id==carta1.id) {
            parejas++;
        } else {
            aux.classList.remove('girada');
            carta1.classList.remove('girada');
            fallos++;
        }
        aux=null;
        document.getElementById("intentos").innerHTML="Intentos: "+intentos;
        document.getElementById("fallos").innerHTML="Fallos: "+fallos;
        document.getElementById("parejas").innerHTML="Parejas: "+parejas;
    }
}