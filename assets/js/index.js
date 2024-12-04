const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuBg = document.querySelector('.menu-bg');


document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');

    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');

    }


});

window.addEventListener('scroll', function() {
    const headerTop = document.querySelector('.header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});





function toggleActiveState(item) {
    const allItems = document.querySelectorAll('.faq-list-item');

    allItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });

    item.classList.toggle('active');
}

document.querySelectorAll('.faq-list-item').forEach(item => {
    item.addEventListener('click', () => toggleActiveState(item));

});

const iconElement = document.querySelector('.call-checkout');

iconElement.addEventListener('click', () => {
    iconElement.classList.toggle('active');
});

const iconAgree = document.querySelector('.agree-tools');

iconAgree.addEventListener('click', () => {
    iconAgree.classList.toggle('active');
});



function toggleActiveHost(item) {
    const allItems = document.querySelectorAll('.host-faq-item');

    allItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });

    item.classList.toggle('active');
}

document.querySelectorAll('.host-faq-item').forEach(item => {
    item.addEventListener('click', () => toggleActiveHost(item));

});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.switch-block').forEach(function (element) {
        element.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const selectInput = document.querySelector('.select-input');
    const selectLabel = document.querySelector('.select-label');

    selectInput.addEventListener('focus', function () {
        selectLabel.classList.add('active');
    });

    document.addEventListener('click', function (event) {
        if (!selectLabel.contains(event.target)) {
            selectLabel.classList.remove('active');
        }
    });

    selectLabel.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});