let cuadros = document.querySelectorAll('.h3');

for (let [i, cv] of cuadros.entries()) {
    cv.addEventListener('click', function h3remove() {
        cv.classList.toggle("h3remove")
    })
}
