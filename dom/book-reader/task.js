let divBook = document.querySelector("div.book");

let fontChange = event => {
    let target = event.target;
    if (target.classList.contains("font-size")) {
        event.preventDefault();
        document.querySelector(".font-size_active").classList.remove("font-size_active");
        target.classList.add("font-size_active");

        if (target.dataset.size !== undefined) {
            divBook.classList.remove("font-size_small");
            divBook.classList.remove("font-size_big");
            divBook.classList.add(target.classList[1]);           
        } else {
            divBook.classList.remove("font-size_small");
            divBook.classList.remove("font-size_big");
        }
    }

    if (target.classList.contains("color")) {
        event.preventDefault();
        let parentControl = target.parentElement;

        parentControl.querySelector(".color_active").classList.remove("color_active");
        target.classList.add("color_active");

        if (target.dataset.color !== undefined) {
            divBook.classList.remove("font-size_small");
            divBook.classList.remove("font-size_big");
            divBook.classList.add(target.classList[1]);           
        } else {
            divBook.classList.remove("font-size_small");
            divBook.classList.remove("font-size_big");
        }
    }
}

window.addEventListener("click", fontChange);
