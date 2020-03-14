let delegationBody = document.querySelector("body");

function imgSlider(event) {
    let target = event.target;
    let activImg = document.querySelector(".slider__item_active");
    let nextImg; 
    if (target.classList.contains("slider__arrow_next")) {
        nextImg = activImg.nextElementSibling;
        if (nextImg === null) nextImg = activImg.parentElement.firstElementChild;
        nextImg.classList.add("slider__item_active");

    } else if (target.classList.contains("slider__arrow_prev")) {
        nextImg = activImg.previousElementSibling;
        if (nextImg === null) nextImg = activImg.parentElement.lastElementChild;
        nextImg.classList.add("slider__item_active");
    }
    activImg.classList.remove("slider__item_active");
}

delegationBody.addEventListener("click", imgSlider);