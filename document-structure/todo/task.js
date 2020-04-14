let taskInput = document.querySelector(".tasks__input");
let buttonTask = document.querySelector(".tasks__add");
let taskList = document.querySelector(".tasks__list");

let elements = JSON.parse(localStorage.getItem(`todoList`));

if (!!elements) {
    elements.forEach(elem => {
        taskList.insertAdjacentHTML(`beforeEnd`, `<div class="task">
    <div class="task__title">
      ${elem}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`);
    });
}

let taskManager = event => {
    let target = event.target;

    if (event.code === "Enter" || target === buttonTask) {
        let task = taskInput.value;
        if (task === "") return alert("Нужно ввести что-нибудь!");
        event.preventDefault();
        let tasker = document.createElement('div');
        tasker.classList.add("task");

        let taskTitle = document.createElement('div');
        taskTitle.classList.add("task__title");
        taskTitle.textContent = task;

        let remover = document.createElement('a');
        remover.href = "#";
        remover.classList.add("task__remove");
        remover.innerHTML = `&times;`;

        taskList.insertAdjacentElement("beforeEnd", tasker);
        tasker.insertAdjacentElement("afterbegin", taskTitle);
        tasker.insertAdjacentElement("beforeEnd", remover);
        taskList.insertAdjacentElement("beforeEnd", tasker);

        try {
            let localArr = JSON.parse(localStorage.getItem(`todoList`));
            localArr.push(task);
            localStorage.todoList = JSON.stringify(localArr);
        } catch (err) {
            localStorage.setItem(`todoList`, JSON.stringify([task]));
        }
        taskInput.value = "";
    }
}

let removerTask = event => {
    let target = event.target;
    if (target.classList.contains("task__remove")) {
        let text = target.previousElementSibling.textContent.trim().toString();
        let indexRemove = elements.indexOf(text);
        elements.splice(indexRemove, 1);
        localStorage.todoList = JSON.stringify(elements)
        target.parentElement.remove();
    }
}

window.addEventListener("click", taskManager);
window.addEventListener("keydown", taskManager);
window.addEventListener("click", removerTask);