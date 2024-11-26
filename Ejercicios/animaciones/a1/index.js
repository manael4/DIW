function rotate2DCaja() {
    const caja = document.querySelector('.caja');
    caja.classList.toggle('caja-rot')

    const img = document.querySelector('.img');
    img.classList.toggle('img-rot')
}

function translateCaja() {
    const caja = document.querySelector('.caja');
    caja.classList.toggle('caja-trans')

    const img = document.querySelector('.img');
    img.classList.toggle('img-trans')
}

function rotate3DCaja() {
    const caja = document.querySelector('.caja');
    caja.classList.toggle('caja-3d')

    const img = document.querySelector('.img');
    img.classList.toggle('img-3d')
}

function skewCaja() {
    const caja = document.querySelector('.caja');
    caja.classList.toggle('caja-skew')

    const img = document.querySelector('.img');
    img.classList.toggle('img-skew')
}