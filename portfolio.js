document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('scroll-button');
    const arrow = document.getElementById('arrow');
    const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
    const scrollThreshold = (documentHeight - windowHeight) / 2;

    button.addEventListener('click', function () {
        if (scrollThreshold < window.scrollY) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }
    });

    window.addEventListener('scroll', function () {
        if (scrollThreshold < window.scrollY) {
            arrow.src = 'Images/Oldal/noun-arrow-19208020.png';
            button.setAttribute('title', 'Görgessen az oldal tetejére');
        } else {
            arrow.src = 'Images/Oldal/noun-arrow-1920802.png';
            button.setAttribute('title', 'Görgessen az oldal aljára');
        }
    });
});
