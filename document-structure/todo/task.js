let taskInput = document.querySelector(".tasks__input");
let buttonTask = document.querySelector(".tasks__add");
let taskList = document.querySelector(".tasks__list");


let keys = Object.keys(localStorage);
for (let key of keys) {
    taskList.insertAdjacentHTML(`beforeEnd`, `<div class="task">
    <div class="task__title">
      ${localStorage.getItem(key)}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`);
}
console.log(localStorage);

let taskManager = event => {
    let target = event.target;

    if (event.code === "Enter" || target === buttonTask) {
        event.preventDefault();
        let tasker = document.createElement('div');
        tasker.classList.add("task");

        let taskTitle = document.createElement('div');
        taskTitle.classList.add("task__title");
        taskTitle.textContent = taskInput.value;

        let remover = document.createElement('a');
        remover.href = "#";
        remover.classList.add("task__remove");
        remover.innerHTML = `&times;`;

        taskList.insertAdjacentElement("beforeEnd", tasker);
        tasker.insertAdjacentElement("afterbegin", taskTitle);
        tasker.insertAdjacentElement("beforeEnd", remover);
        taskList.insertAdjacentElement("beforeEnd", tasker);


        localStorage.setItem(taskInput.value, taskInput.value);
        console.log(localStorage);
        taskInput.value = "";
        console.log(event.code)
    }
}

let removerTask = event => {
    let target = event.target;
    if (target.classList.contains("task__remove")) {
        let text = target.previousElementSibling.textContent.trim().toString();
        localStorage.removeItem(text);        
        target.parentElement.remove();
    }
}

window.addEventListener("click", taskManager);
window.addEventListener("keydown", taskManager);
window.addEventListener("click", removerTask);