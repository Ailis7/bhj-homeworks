let lotery = document.getElementById("timer");
let change = () => {  
    return function() {
        let check = lotery.textContent;
        if (parseFloat(check) === 0) {
            clearInterval(timerID);
            return alert("Вы победили в конкурсе");
        }
        check = --lotery.textContent;
        return lotery.textContent = check;
        }
};
let timerID = setInterval(change(), 1000)
//console.log(new Date("18:04:37").toLocaleTimeString("ru"));

// Повышенный уровень сложности
let count = document.getElementById("timer2");
let time = () => {
    return function() {
    let dataSplit = count.textContent.split(":")
    let sum = parseFloat(dataSplit[0]) * 3600 + parseFloat(dataSplit[1]) * 60 + parseFloat(dataSplit[2]) - 1;
    let sum1 = Math.floor(sum / 3600), sum2 = sum % 3600, sum3 = Math.floor(sum2 / 60), sum4 = sum2 % 60;
    if (sum === 0) {
        alert("Подтвердите скачивание файла!");
        location = "https://download.mozilla.org/?product=firefox-stub&os=win&lang=ru";
        clearInterval(timeCount);
    }
    function changeToString(num) {
        let str = num.toString();
        if (str.length === 1) str = "0" + str;
        return str;
    }
    dataJoin = [changeToString(sum1), changeToString(sum3), changeToString(sum4)];
    return count.textContent = dataJoin.join(":");
    }
}
let timeCount = setInterval(time(), 100);