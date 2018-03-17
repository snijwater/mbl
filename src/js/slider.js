'use strict';

import { TweenLite } from 'gsap';

export const initSlider = function() {
    var slider = document.querySelector('.js-slider');

    if (!slider) {
        return false;
    }

    var nextTriggers = document.querySelectorAll('.js-slider-next');
    var currentItem = slider.querySelector('.slider__list__item.is-current');
    var currentPreview = slider.querySelector('.slider__previews__item.is-current');
    var nextItem = currentItem.nextElementSibling;
    var nextPreview = currentPreview.nextElementSibling;

    var animationItem = function() {
        var tl = new TimelineMax({ paused: true });

        tl.timeScale(2);
        TweenLite.defaultEase = Quart.easeOut;

        tl.set(nextItem, {
            x: '100%'
        }).set(nextPreview, {
            x: '100%'
        }).to(currentItem, 1, {
            x: '-100%'
        }).to(currentPreview, 1, {
            x: '-100%'
        }, 0).to(nextItem, 1, {
            x: '0%'
        }, 0).to(nextPreview, 1, {
            x: '0%'
        }, 0);

        return tl;
    }

    var itemAnimation = animationItem();

    var showNext = function() {
        // Don't do anything if the animation is still playing
        if (itemAnimation.isActive()) {
            return false;
        }

        // Rebuild timeline with new globals and play animation
        itemAnimation = animationItem();
        itemAnimation.play(0);

        // Switch globals
        var tempNextItem = nextItem;
        var tempNextPreview = nextPreview;

        currentItem = tempNextItem;
        currentPreview = tempNextPreview;
        nextItem = (tempNextItem.nextElementSibling) ? tempNextItem.nextElementSibling : slider.querySelector('.slider__list__item');
        nextPreview = (tempNextPreview.nextElementSibling) ? tempNextPreview.nextElementSibling : slider.querySelector('.slider__previews__item');
    }

    for (var a = 0; a < nextTriggers.length; a += 1) {
        if (!nextTriggers[a].getAttribute('data-click-attached')) {
            nextTriggers[a].addEventListener('click', function() {
                showNext();
            });

            nextTriggers[a].setAttribute('data-click-attached', true);
        }
    }
}
