let question = document.querySelector(`.poll__title`);
let answers = document.querySelector(`.poll__answers`);

let xhr = new XMLHttpRequest();
xhr.open(`GET`, `https://netology-slow-rest.herokuapp.com/poll.php`);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
let questionID, answerID;
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        let response = JSON.parse(xhr.responseText).data;
        questionID = JSON.parse(xhr.responseText).id;
        question.textContent = response.title;

        let arrAnswers = response.answers;
        arrAnswers.forEach(element => {
            answers.insertAdjacentHTML(`beforeEnd`, `<button class="poll__answer">
            ${element}
          </button>`);
        });

    }
}

let answer = event => {
    alert(`Спасибо, ваш голос засчитан!`);
    let target = event.target;
    let youAnswerArr = [].slice.call(answers.querySelectorAll(".poll__answer"));
    let youAnswer = youAnswerArr.indexOf(target);

    let xhr = new XMLHttpRequest();
    xhr.open(`POST`, `https://netology-slow-rest.herokuapp.com/poll.php`);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`vote=${questionID}&answer=${youAnswer}`);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            let response = JSON.parse(xhr.responseText).stat;
            let sum = 0;
            response.forEach(elem => sum += elem.votes);
            answers.textContent = "";
            response.forEach(element => {
                answers.insertAdjacentHTML(`beforeEnd`, `<div>
                ${element.answer}: ${Math.round(10000 * element.votes / sum) / 100 + "%"}
              </div>`);
            });
        }
    }
}
answers.addEventListener(`click`, answer);
