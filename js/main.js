let previousPosition

function open(overlay, event) {
    event.preventDefault();
    overlay.classList.add('open');
}

function close(overlay) {
    overlay.classList.remove('open');
}


// Define event handler
const onPageLoad = (e) => {
    setTimeout(function() { window.scrollTo(0, 1) }, 100);

    const overlay = document.getElementById('overlay');
    const closeOverlay = document.querySelectorAll('.close-overlay');
    const openOverlay = document.querySelectorAll('.open-overlay');

    const openOverlayHandler = open.bind(null, overlay)
    const closeOverlayHandler = close.bind(null, overlay)

    closeOverlay.forEach(element => {
        element.addEventListener('click', closeOverlayHandler);
    });

    openOverlay.forEach(element => {
        element.addEventListener('click', openOverlayHandler);
    });

};

// Listen for `DOMContentLoaded` event
document.addEventListener('DOMContentLoaded', onPageLoad);



