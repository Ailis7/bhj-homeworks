let collection = event => {
    let target = event.target;
    let basket = document.querySelector(".cart__products");

    if (target.classList.contains("product__quantity-control_inc")) {
        ++target.previousElementSibling.textContent;
    } else if (target.classList.contains("product__quantity-control_dec")) {
        --target.nextElementSibling.textContent;
        if (target.nextElementSibling.textContent < 1)
            target.nextElementSibling.textContent = 1
    } else if (target.classList.contains("product__add")) {
        let parent = target.closest(".product");
        let cardArr = [].slice.call(basket.querySelectorAll(".cart__product"));

        let basketCard = document.createElement('div');
        basketCard.classList.add("cart__product");
        basketCard.dataset.id = parent.dataset.id;

        let basketImg = document.createElement('img');
        basketImg.classList.add("cart__product-image");
        basketImg.src = parent.querySelector(".product__image").src;
        basketCard.insertAdjacentElement("afterbegin", basketImg);

        let basketCount = document.createElement("div");
        basketCount.classList.add("cart__product-count");
        basketCount.textContent = parent.querySelector(".product__quantity-value").textContent;
        basketCard.insertAdjacentElement("beforeend", basketCount);

        let currentIndex;
        cardArr.forEach(element => {
            if (element.dataset.id === parent.dataset.id) {
                return currentIndex = cardArr.indexOf(element);
            }
        });
        if (currentIndex !== undefined) {
            let currentCard = cardArr[currentIndex].querySelector(".cart__product-count");
            return currentCard.textContent = (parseFloat(currentCard.textContent) + parseFloat(basketCount.textContent));
        }

        basket.insertAdjacentElement("beforeend", basketCard);
    }
}
// доп задания понимаю как сделать, но вот эффект перемещения боюсь долго буду ковырять. По принципу предыдущих заданий
// так что здесь пропущу, и так отстаю =)
window.addEventListener("click", collection);