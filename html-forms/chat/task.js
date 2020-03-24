let chatWidget = document.querySelector(".chat-widget");

let openWidget = event => {
    let target = event.target;
     if (target.closest(".chat-widget") === chatWidget) {
        chatWidget.classList.add("chat-widget_active");
    } else {
        chatWidget.classList.remove("chat-widget_active");
    }
} 
window.addEventListener("click", openWidget);

let chat = document.querySelector(".chat-widget__messages");
console.log(chat.innerHTML);

let inputLog = document.querySelector(".chat-widget__input");

let inputSubmit = event => {
    let target = event.target;
     console.log(event.code === "Enter");
    console.log(inputLog.value);
}

window.addEventListener("keydown", inputSubmit);

