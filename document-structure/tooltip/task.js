showTooltip = event => {
    event.preventDefault();
    //debugger;
    let target = event.target;
    let deletableElement = document.querySelector(".tooltip");
    (deletableElement !== null) ? deletableElement.remove(): ``;

    if (target.classList.contains("has-tooltip")) {
        let ascent = target.getBoundingClientRect();
        let tooltipDiv = document.createElement('div');
        tooltipDiv.classList.add("tooltip", "tooltip_active");
        tooltipDiv.textContent = target.title;
        tooltipDiv.setAttribute(`style`, `left: ${ascent.left}px; top: ${ascent.top + ascent.height}px;`);
        target.insertAdjacentElement("afterEnd", tooltipDiv);
    }
}

window.addEventListener("click", showTooltip);