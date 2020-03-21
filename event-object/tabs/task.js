const delegationBody = document.querySelector("body");
const navigations = Array.prototype.slice.call(document.querySelectorAll("div.tab__navigation div"));
const contents = Array.prototype.slice.call(document.querySelectorAll("div.tab__contents div.tab__content")); 

let clicker = event => {
    let target = event.target;
    if (navigations.includes(target)) {
        let currentActivNav = document.querySelector(".tab_active");
        currentActivNav.classList.remove("tab_active");
        target.classList.add("tab_active");
        
        let index = navigations.indexOf(target);
        let currentActivContent = document.querySelector(".tab__content_active");
        currentActivContent.classList.remove("tab__content_active");
        contents[index].classList.add("tab__content_active");
    } 
}

delegationBody.addEventListener("click", clicker);