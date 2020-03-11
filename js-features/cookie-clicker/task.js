const cookiesClick = document.getElementById("cookie");
const clickCount = document.getElementById("clicker__counter");
const time = document.getElementById("timeCount");

cookiesClick.onclick = function () {
    clickCount.textContent = parseFloat(clickCount.textContent) + 1;
    cookiesClick.width = (cookiesClick.width === 250) ? 200 : 250;

    let previosTime = point();
    //console.log(previosTime)
    let result = (previosTime.length / (previosTime[previosTime.length - 1] - previosTime[0])) * 1000;
    time.textContent = result.toFixed(3);
}

function memory() {
    let bank = [];
    return function () {
        bank.push(new Date());
        elementOfDate = new Date() - 1000;
        let findElemnt = bank.reverse().find(element => element <= elementOfDate);
        let findIndex = bank.reverse().lastIndexOf(findElemnt);
        bank.splice(0, findIndex + 1);
        return bank
    }
}
let point = memory();