setInterval(() => {
    let currentActivRotator = document.querySelector(".rotator__case_active");
    currentActivRotator.classList.remove("rotator__case_active");

    if (currentActivRotator.nextElementSibling === null) {
        currentActivRotator.parentElement.children[0].classList.add("rotator__case_active");
    } else {
        currentActivRotator.nextElementSibling.classList.add("rotator__case_active");
    }
}, 1000);