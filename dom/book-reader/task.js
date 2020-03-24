let divBook = document.querySelector("div.book");
let text = document.querySelector(".book__control_color");
let background = document.querySelector(".book__control_background");

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

        divBook.classList.remove("color_white");
        divBook.classList.remove("color_gray");
        divBook.classList.remove("color_gray_text");
        divBook.classList.remove("color_black");
        divBook.classList.remove("color_whitesmoke");

        if (parentControl === text) {
            if (target.dataset.color !== undefined) divBook.classList.add(target.classList[1]);
            let bro = background.querySelector(".color_active");
            //if (target === bro) return;
            if (bro.dataset.color !== undefined) divBook.classList.add(bro.classList[1]);
        } else {
            if (target.dataset.color !== undefined) divBook.classList.add(target.classList[1]);
            let bro = text.querySelector(".color_active");
            //if (target === bro) return;
            if (bro.dataset.color !== undefined) divBook.classList.add(bro.classList[1]);
        }
        
    }
}

window.addEventListener("click", fontChange);
