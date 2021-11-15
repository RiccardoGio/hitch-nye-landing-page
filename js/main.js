function open(overlay) {
    overlay.classList.remove('closed');
}

function close(overlay) {
    overlay.classList.add('closed');
    console.log(overlay);
}


// Define event handler
const onPageLoad = (e) => {
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



