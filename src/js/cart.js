'use strict';

const initCart = function() {

    let cart = {}
    cart.openButton = document.querySelector('.js-open-cart');
    cart.closeButton = document.querySelector('.js-close-cart');

    cart.openCart = function(){
        document.querySelector('body').classList.toggle('cart-opened');
    }

    cart.closeCart = function(){
        document.querySelector('body').classList.remove('cart-opened');
    }

    cart.openButton.addEventListener('click', function() {
        cart.openCart();
    }, false);

    cart.closeButton.addEventListener('click', function() {
        cart.closeCart();
    }, false);
}
