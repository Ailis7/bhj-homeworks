const showDiv = document.querySelector('div.reveal');

const isInViewport = () => {
    const viewportHeight = window.innerHeight;
    const elementTop = showDiv.getBoundingClientRect().top;

    if (elementTop > viewportHeight ? false : true) setTimeout(() => {showDiv.classList.add("reveal_active")}, 1000);
    // с небольшой задержкой - элегантней XD
};

window.addEventListener("scroll", isInViewport)