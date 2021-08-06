let hoverTarget = document.querySelector('.navigation-item')

const embolden = function(event) {
    hoverTarget.style.fontWeight = 900;
}

hoverTarget.addEventListener('mouseover', embolden);

