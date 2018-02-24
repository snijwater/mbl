'use strict';

const initProductThumb = function() {
    let productThumb = {};

    productThumb.item = document.querySelectorAll('.product-thumb');
    productThumb.row = document.querySelector('.highlighted-products');


    for (var i = 0; i < productThumb.item.length; i++) {
        productThumb.item[i].addEventListener('mouseover', function(el) {
            this.classList.toggle('is-hovered');
            productThumb.row.classList.toggle('is-hovered');
        }, false);
    };

    for (var i = 0; i < productThumb.item.length; i++) {
        productThumb.item[i].addEventListener('mouseout', function(el) {
            this.classList.toggle('is-hovered');
            productThumb.row.classList.toggle('is-hovered');
        }, false);
    }
}
