const secciones = document.querySelectorAll('section');
secciones.forEach(section => {
    section.addEventListener('click', function () {
        secciones.forEach(sec => sec.classList = "section not-expanded");
        this.classList = "section is-expanded";
    });
    const closeButton = section.querySelector('.close-section');
    closeButton.addEventListener('click', function (event) {
        event.stopPropagation();
        secciones.forEach(section => {
            section.classList = "section";
        });
    });
});