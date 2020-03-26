let chatWidget = document.querySelector(".chat-widget");

let openWidget = event => {
  let target = event.target;
  if (target.closest(".chat-widget") === chatWidget) {
    chatWidget.classList.add("chat-widget_active");
  } else {
    chatWidget.classList.remove("chat-widget_active");
  }
};
window.addEventListener("click", openWidget);

let chat = document.querySelector(".chat-widget__messages");
let inputLog = document.querySelector(".chat-widget__input");

let currentDate = new Date()
  .toLocaleTimeString("ru")
  .split(":")
  .splice(0, 2)
  .join(":");

let inputSubmit = event => {
  let target = event.target;

  let replayList = [
    "Вы кто такие?",
    "Я вас не звал...",
    "Идите лесом!",
    "Для вас мы закрыты",
    "Во славу бога Машины! Смерть человекам!",
    "Здравствуйте Мясо",
    "Поцелуй мой блестящий зад",
    "Проект SkyNet запущен. Пожалуйста подождите."
  ];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

  if (event.code === "Enter" && target.closest(".chat-widget") === chatWidget) {
    // target.closest - чтоб на клики в другом месте не было реакции.

    if (inputLog.value === "") {
      alert("Вы ничего не написали");
      return;
    }

    chat.innerHTML += `<div class="message message_client">
        <div class="message__time">${currentDate}</div>
        <div class="message__text">${inputLog.value}</div>
        </div>`;

    chat.innerHTML += `<div class="message">
        <div class="message__time">${currentDate}</div>
        <div class="message__text">${
          replayList[getRandomInt(0, replayList.length)]
        }</div>
        </div>`;

    inputLog.value = "";

    let scroll = document.getElementsByClassName("message");
    scroll[scroll.length - 1].scrollIntoView();
  }
};
window.addEventListener("keydown", inputSubmit);


// ниже идёт вторая часть задания "При активном окне чата и простое 30 секунд, робот должен задать вопрос в чат"
let supervision;
chatWidget.addEventListener(
  "focus",
  event => {
    supervision = setTimeout(() => {
      chat.innerHTML += `<div class="message">
        <div class="message__time">${currentDate}</div>
        <div class="message__text">Спишь? Просьнись и пиши!</div>
        </div>`;
    }, 30000);
  },
  true // не забываем перехватчик capture !! Или можно объявить на самом элеменете а не родителе
);

chatWidget.addEventListener(
    "blur",
    event => {
      clearInterval(supervision);
    },
    true
  ); // потеря фокуса

  chatWidget.addEventListener(
    "keydown",
    event => {
      clearInterval(supervision);
    },
    true
  ); // ещё остановка- "если уже начал вводить".
  // https://learn.javascript.ru/bubbling-and-capturing