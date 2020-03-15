let delegationBody = document.querySelector("body");
let list = document.querySelector(".dropdown__list")
let activeValue = document.querySelector(".dropdown__value")

function dropdownChoise(event) {
    let target = event.target;
   if (target.tagName == "DIV") list.classList.toggle("dropdown__list_active");
    if (target.tagName === "A") {
        event.preventDefault();
        activeValue.textContent = target.textContent;
        list.classList.toggle("dropdown__list_active");
    }
}
delegationBody.addEventListener("click", dropdownChoise);