$(function() {
    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>'
    });
});

/*===========================MOUSEWHEEL EVENT SCRIPT======================================================*/
var slickSlide = $('.slider__inner');
slickSlide.on('mousewheel', function(e) {
    if (e.deltaY < 0) {
        e.preventDefault();
        $(this).slick('slickNext');
    } else {
        e.preventDefault();
        $(this).slick('slickPrev');
    }
});

/*==========================================ROTATION BACKGROUND IMAGE =====================================================*/
const background = document.querySelector('.slide');

background.addEventListener('mousemove', rotate);

function rotate(event) {
    const $image = $('.slick-current .slider__background-image');
    const halfHeight = $image.height() / 2;

    $image.css('transform', 'rotateX(' + (event.screenY - halfHeight) / 40 + 'deg) rotateY(' + (event.screenX - halfHeight) / 80 + 'deg)');
}

/*=========================GALLERY SCRIPT==================================================*/
$(document).ready(function() {
    const $content = $('.content');
    const $document = $(document);
    let counter = 0;
    let isMouseMoved = false;

    $content.on('mousedown', () => {
        $document.on('mousemove', handleMouseMove);
    });
    $content.on('click', function() {
        $document.off('mousemove', handleMouseMove);
        if (counter > 1) {
            counter = 0;
            return;
        }
        open($(this));
    });
    $(document).on('click', '.popup img', function() {
        return false;
    }).on('click', '.popup', function() {
        close();
    });
    const handleMouseMove = () => {
        counter++;
    };

    function open($content) {
        $('.second-content').addClass('pop');
        var $gallery = $content.clone().prop({ class: 'popup' });
        $('body').append($gallery);
        $gallery.append('<div class="close-btn"><i class="icon-cancel"></i></div>');
        $gallery.children().wrapAll("<article></article>");

        setTimeout(function() {
            $('.popup').addClass('pop');
        }, 100);
    }

    function close() {
        var $closer = $('article').find('img, .close-btn');
        $closer.addClass('closepopup');
        setTimeout(function() {
            $('.second-content').removeClass('pop');
            $('.popup').remove()
        }, 200);
    }
})


/*========================OPEN/CLOSE POPUP FORM SCRIPT===========================*/

function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("Home").reset();
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    if (closeForm) {
        $('#valid').text('');
    }
}
/*=================================================================================*/

/*===============================CHANGE MENU TITLE SCRIPT===================================================*/


//UPDATED  
$('.slider__inner').on('afterChange', function(event, slick, currentSlide) {
    $('.cont').hide();
    $('.cont[data-id=' + (currentSlide + 1) + ']').show();
});

function openFirst() {
    $('.slider__inner').slick('slickGoTo', 0);
}

function openSecond() {
    $('.slider__inner').slick('slickGoTo', 1);
}

function openThird() {
    $('.slider__inner').slick('slickGoTo', 2);
}

/*===========================chek email for valid ====================*/
$(document).ready(function() {
    var pattern = /^[a-z0-9._-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?([a-z]{2,6}\.)?[a-z]{2,6}$/i;
    var mail = $('#mail');
    mail.blur(function() {
        if (mail.val() != '') {
            if (mail.val().search(pattern) == 0) {
                $('#valid').text('');
                $('#submit').attr('disabled', false);
                mail.removeClass('error').addClass('ok');
            } else {
                $('#valid').text('Не подходит');
                $('#submit').attr('disabled', true);
                mail.addClass('ok');
            }
        } else {
            $('#valid').text('Поле e-mail не должно быть пустым!');
            mail.addClass('error');
            $('#submit').attr('disabled', true);
        }
    });

});

/* ==========================MULTYLANGE=====
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

const changeLanguage = function(event) {
    let lang = event.target.getAttribute('data-lang');

    lang = langs[lang];

    for (let item in lang) {
        document.getElementById(item).innerHTML = lang[item];
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
    var setLang = $('.language-select').data('location'),
        dataLangSelect = $(this).data('lang')
    $('.language-select').data('location', dataLangSelect);
    $('.language-select li').removeClass('active');
    $(this).toggleClass('active');
})

let val = document.querySelector('.slider__item-content');
window.onload = function onLoad() {
    val.style.display = "block";
}*/

//console.log(document.cookie);
//console.log(window.langs);