const toggleOverlay = () => {
    if (document.querySelector('.overlay')) {
        document.body.removeChild(document.querySelector('.overlay'));
        document.querySelector('.container').classList.remove('blur');
    } else {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.querySelector('.container').classList.add('blur');
        document.querySelector('body').appendChild(overlay);
    }
};

export default toggleOverlay;
