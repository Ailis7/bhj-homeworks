const inputCheck = document.querySelectorAll(".interest__check");
const listLi = document.querySelectorAll(".interest");

let bigCheck = (event, recursionTarget) => {
  //debugger;
  let subordinate = event.target
    .closest(".interest")
    .querySelectorAll(".interest");
  let arrSubordinate = [].slice.call(subordinate);
  arrSubordinate.forEach(element => {
    element.querySelector(".interest__check").checked = event.target.checked;
  });

  let target = event.target;
  target = recursionTarget === undefined ? target : recursionTarget;

  let parent = target.closest(".interests").querySelectorAll(".interest");
  let arrParent = [].slice.call(parent);

  let parentCheckBox;
  if (target.closest(".interests").tagName !== "DIV") {
    parentCheckBox = target
      .closest(".interests")
      .parentElement.querySelector(".interest__check");
  } else {
    parentCheckBox = target
      .closest(".interest")
      .querySelector(".interest__check");
    parent = target.closest(".interest").querySelectorAll(".interest");
    arrParent = [].slice.call(parent);
  }

  // console.log(arrParent.forEach(
  //   element => console.log(element.querySelector("label").textContent, element.querySelector(".interest__check").checked)
  // ))
  if (
    arrParent.every(
      element => element.querySelector(".interest__check").checked
    )
  ) {
    parentCheckBox.indeterminate = false;
    parentCheckBox.checked = true;
  } else if (
    arrParent.some(element => element.querySelector(".interest__check").checked)
  ) {
    parentCheckBox.indeterminate = true;
    parentCheckBox.checked = false;
  } else {
    parentCheckBox.indeterminate = false;
    parentCheckBox.checked = false;
  }
  if (parentCheckBox === target) return;
  bigCheck(event, parentCheckBox);
};

window.addEventListener("change", bigCheck);
