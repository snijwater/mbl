function initCart() {
    const cartButton = document.querySelector('.js-open-cart');

    cartButton.addEventListener('click', function() {
        document.querySelector('body').classList.toggle('cart-opened');
    }, false);
}
