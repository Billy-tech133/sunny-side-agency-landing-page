const hamburg = document.querySelector('.btn-hamburger');
const modal = document.querySelector('.modal');

hamburg.addEventListener('click', function() {
    modal.classList.toggle("show-modal")
})