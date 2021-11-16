function open(overlay) {
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;


    overlay.classList.add('open');

}

function close(overlay) {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    console.log(scrollY);

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



