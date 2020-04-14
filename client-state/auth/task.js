let signinActive = document.getElementById('signin');
let welcomeForm = document.getElementById('welcome');
let userID = document.getElementById('user_id');

let signinState = (answer) => {
    if (answer !== null && answer.success === true) {
        signinActive.classList.remove('signin_active');
        welcomeForm.classList.add('welcome_active');
        userID.textContent = answer.user_id;

        localStorage.setItem(`user`, JSON.stringify({
            success: answer.success,
            user_id: answer.user_id
        }));
    } else if (answer !== null && answer.success === false) {
        alert(`Неверный логин/пароль`);
        uploadForm.reset();
    } else {
        if (localStorage.user !== undefined && JSON.parse(localStorage.user).success === true) {
            return signinState(JSON.parse(localStorage.user))
        }
        signinActive.classList.add('signin_active');
        welcomeForm.classList.remove('welcome_active');
    }
}
signinState(null);

let uploadForm = document.getElementById(`signin__form`);
uploadForm.addEventListener("submit", e => {
    e.preventDefault();

    let request = new XMLHttpRequest();
    let formData = new FormData(uploadForm);

    request.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    request.send(formData);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            signinState(JSON.parse(request.responseText));
        }
    }
});

let clearButton = document.querySelector(`.clear`)
clearButton.addEventListener("click", e => {
    e.preventDefault();
    localStorage.clear();
    signinState(null);
});