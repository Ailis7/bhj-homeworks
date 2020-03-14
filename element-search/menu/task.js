let delegationBody = document.querySelector("body");

function menuClick(event) {
    //debugger;
    let target = event.target;
    if (target.getAttribute("href") === "") {
        event.preventDefault();

        const bro = target.nextElementSibling;
        bro.classList.toggle("menu_active");

        target.textContent === "Услуги" ?
            target.closest(".menu__item").previousElementSibling.children[1].classList.remove("menu_active") :
            target.closest(".menu__item").nextElementSibling.children[1].classList.remove("menu_active");
    }
}

delegationBody.addEventListener("click", menuClick);