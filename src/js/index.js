// SCSS
import '../scss/main.scss'; // Import SCSS for webpack to compile.

// Vendor
import Scrollbar from 'smooth-scrollbar';

// Custom
import { initCart } from './cart';
import { initProductThumb } from './product-thumb';
import { initSlider } from './slider';
// Init
document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelector('.js-slider')) { initSlider(); }
    if (document.querySelector('.cart')) { initCart(); }
    if (document.querySelector('.product-thumb')) { initProductThumb(); }

    Scrollbar.init(document.querySelector('main'));
});
