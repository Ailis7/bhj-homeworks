let close = document.querySelector(".modal__close");

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}

let closeState = () => {
    if (getCookie('modal') === `closeWindow`) {
        let modalActive = document.querySelector('.modal_active');
        modalActive.classList.remove(`modal_active`);
    }
}
closeState();

close.addEventListener("click", () => {
    document.cookie = `modal=closeWindow`;
    closeState();
})
