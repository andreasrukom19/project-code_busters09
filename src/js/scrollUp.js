

const scrolltoTopBtn = document.querySelector ('.isShownBtn')
window.onscroll = () => {
    if (window.scrollY > 700) {
        scrolltoTopBtn.classList.remove('isHidden')
    } else if (window.scrollY < 700) {
        scrolltoTopBtn.classList.add('isHidden')
    }
};

scrolltoTopBtn.onclick = () => {
    window.scrollTo(0, 0);

};