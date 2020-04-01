let lang;
let pageLoaded;

const langs = {
    ua: {
        home: 'Головна',
        gallery_comp: 'Галерея',
        about_comp: 'Про нас',
        home_dropp: 'Головна',
        about_dropp: 'Про нас',
        gallery_dropp: 'Галерея',
        home_dropp1: 'Головна',
        about_dropp1: 'Про нас',
        gallery_dropp1: 'Галерея',
        get_it_now: 'Замовити',
        cans_bnt: 'Скасувати',
        conf_btn: 'Підтвердити',
        title: 'Введіть Email',
        valid: 'Поле має бути заповненим!'
    },
    ru: {
        home: 'Главная',
        gallery_comp: 'Галерея',
        about_comp: 'О нас',
        home_dropp: 'Главная',
        about_dropp: 'О нас',
        gallery_dropp: 'Галерея',
        home_dropp1: 'Главная',
        about_dropp1: 'O нас',
        gallery_dropp1: 'Галерея',
        get_it_now: 'Заказать',
        cans_bnt: 'Отменить',
        conf_btn: 'Подтвердить',
        title: 'Введите Email',
        valid: 'Поле не должно быть пустым!'

    },
    en: {
        home: 'Home',
        gallery_comp: 'Gallery',
        about_comp: 'About',
        home_dropp: 'Home',
        about_dropp: 'About',
        gallery_dropp: 'Gallery',
        home_dropp1: 'Home',
        about_dropp1: 'About',
        gallery_dropp1: 'Gallery',
        get_it_now: 'Order',
        cans_bnt: 'Cancel',
        conf_btn: 'Confirm',
        title: 'Enter Email',
        valid: 'Email field can not be empty!'

    },
};

document.addEventListener("DOMContentLoaded", () => {

    if (document.cookie.indexOf("language") == -1) {

        document.cookie = "language=en; path=/; max-age=2592000;";
    }

    pageLoaded = true;
    changeLanguage();

    let langButtons = document.querySelectorAll(".btn-lang");

    for (let button of langButtons) {

        if (button.getAttribute("data-lang") == lang) {

            button.classList.toggle("active");
        }
    }
});

function changeLanguage(event) {

    if (pageLoaded) {

        let position = document.cookie.indexOf("language");
        lang = document.cookie.slice((position + 9), (position + 12));
        pageLoaded = false;
        $('.language-select li').removeClass('active');
    } else {

        lang = event.target.getAttribute('data-lang');
        document.cookie = "language=" + lang + "; path=/; max-age=2592000;";
    }

    let language = langs[lang];

    for (let item in language) {

        document.getElementById(item).innerHTML = language[item];
    }
}

const langButtons = document.querySelectorAll(".btn-lang");

for (let button of langButtons) {

    button.onclick = changeLanguage;
}

$('.language-select').click(function() {

    $(this).toggleClass('open');
})

$('.language-select li').click(function() {

    $('.language-select li').removeClass('active');
    $(this).toggleClass('active');
})

let val = document.querySelector('.slider__item-content');

window.onload = function onLoad() {

    val.style.display = "block";
}