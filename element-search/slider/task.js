let delegationBody = document.querySelector("body");

function imgSlider(event) {
    let target = event.target;
    let sliderArr = Array.prototype.slice.call(document.getElementsByClassName("slider__item"));
    let activImg = document.querySelector(".slider__item_active");
    let nextImg; 
    
    let dotsArr = document.getElementsByClassName("slider__dot");
    let activeDot = document.querySelector(".slider__dot_active");
    if (activeDot !== null) activeDot.classList.remove("slider__dot_active");

    if (target.classList.contains("slider__arrow_next")) {
        nextImg = activImg.nextElementSibling;
        if (nextImg === null) nextImg = activImg.parentElement.firstElementChild;

    } else if (target.classList.contains("slider__arrow_prev")) {
        nextImg = activImg.previousElementSibling;
        if (nextImg === null) nextImg = activImg.parentElement.lastElementChild;
        
    } else if (target.classList.contains("slider__dot")) {
        let indexCurrentDot = Array.prototype.slice.call(dotsArr).indexOf(target);
        nextImg = sliderArr[indexCurrentDot];
    } else return
    nextImg.classList.add("slider__item_active");
    let currentIndex = sliderArr.indexOf(nextImg);

    dotsArr[currentIndex].classList.add("slider__dot_active");
    activImg.classList.remove("slider__item_active");
}

delegationBody.addEventListener("click", imgSlider);