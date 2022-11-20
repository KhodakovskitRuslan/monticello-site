'use strict'
// animation blocks
const leftSideBlock = document.querySelector('.left-side__image-defoult');
const leftSideBlockReverse = document.querySelector('.left-side__image-reverse')

function animationBlocks(block, blockActive, fixed, inverseFixed) {
    if (window.screen.width > 1260) {
        block.addEventListener('mouseenter', function () {
            block.classList.add(blockActive, fixed)
        })

        block.addEventListener('mouseleave', function () {
            setTimeout(() => {
                block.classList.add(inverseFixed)
                block.classList.remove(fixed, blockActive)
            }, 2000);
            setTimeout(() => {
                block.classList.remove(inverseFixed)
            }, 5000)
        })
    }

}

animationBlocks(leftSideBlock, 'left-side__image-active', 'fixed', 'fixed-reverse')
animationBlocks(leftSideBlockReverse, 'left-side__image-active-2', 'fixed-2', 'fixed-reverse-2')


// buttons events

const buttonsMore = document.querySelectorAll('.button')

buttonsMore.forEach(button => {
    button.addEventListener('click', function (e) {
        e.target.previousElementSibling.classList.toggle('opened')
    })
});

// button to top 
function scrollFunction() {
    let btnToTop = document.querySelector('#to-top');

    if (document.documentElement.scrollTop >= 900) {
        btnToTop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        })
        btnToTop.classList.remove('btn-to-top-hidden');
        btnToTop.classList.add('btn-to-top');
    } else {
        btnToTop.classList.remove('btn-to-top');
        btnToTop.classList.add('btn-to-top-hidden');
    }
}

window.addEventListener('scroll', scrollFunction);

// burger
const burgerBtn = document.querySelector(`.menu-btn`)
const menu = document.querySelector('.menu')

burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('active')
    menu.classList.toggle('active')
})
