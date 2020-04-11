let itemsBox = document.getElementById(`items`);
let loaderImg = document.querySelector(`.loader_active`);

if (localStorage.length > 0) {
    for (let key in localStorage) { // чертов localStorage сортирует как хочет :(
        if (!localStorage.hasOwnProperty(key)) continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
        itemsBox.insertAdjacentHTML(`beforeEnd`, `<div class="item">
        <div class="item__code">
            ${key}
         </div>
         <div class="item__value">
            ${localStorage[key]}
         </div>
         <div class="item__currency">
            руб.
         </div>
         </div>`);
    }
    loaderImg.classList.remove(`loader_active`);
}

let xhr = new XMLHttpRequest();
xhr.open(`GET`, `https://netology-slow-rest.herokuapp.com`);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        localStorage.clear()
        itemsBox.textContent = "";
        let response = JSON.parse(xhr.responseText).response.Valute;
        for (let key in response) {
            itemsBox.insertAdjacentHTML(`beforeEnd`, `<div class="item">
            <div class="item__code">
                ${key}
             </div>
             <div class="item__value">
                ${response[key].Value}
             </div>
             <div class="item__currency">
                руб.
             </div>
             </div>`);

            localStorage.setItem(key, response[key].Value);
        }
        loaderImg.classList.remove(`loader_active`);
    }
};