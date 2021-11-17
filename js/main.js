let previousPosition

function open(overlay, event) {
    event.preventDefault();
    overlay.classList.add('open');
    document.body.classList.add('overflow-hidden');
}

function close(overlay) {
    overlay.classList.remove('open');
    document.body.classList.remove('overflow-hidden');
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



