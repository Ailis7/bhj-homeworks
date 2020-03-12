let mainModal = document.getElementById("modal_main");
mainModal.classList.add("modal_active");

// let twoModal = document.getElementsByClassName("modal__close");
// twoModal[0].onclick = function() {
//     twoModal[0].closest(".modal").classList.remove("modal_active");
// }
// console.log(twoModal[0])
// это через цыкл закрытие (можно дописать)

let delegationBody = document.querySelector("body");

function closeClick(event) {
    let target = event.target;
    if (target.classList.contains("modal__close") === false) return;
    target.closest(".modal_active").classList.remove("modal_active");
    if (target.classList.contains("show-success")) {
        let success = document.getElementById("modal_success");
        success.classList.add("modal_active");
    }
}
delegationBody.addEventListener("click", closeClick);