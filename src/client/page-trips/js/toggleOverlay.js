const toggleOverlay = () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.querySelector('.container').classList.add('blur');
    document.querySelector('body').appendChild(overlay);
};

export default toggleOverlay;
