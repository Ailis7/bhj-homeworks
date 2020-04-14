let area = document.getElementById("editor");
area.textContent = localStorage.text;
let clearButton = document.querySelector(`.clear`)

area.addEventListener("keyup", () => {
    localStorage.setItem(`text`, area.value)
    console.log(localStorage.text)
});
clearButton.addEventListener("click", e => {
    e.preventDefault();
    localStorage.clear();
    area.textContent = "";
});