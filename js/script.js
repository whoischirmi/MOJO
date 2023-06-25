//АККОРДЕОН
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})



//СЛАЙДЕР
// Важно, чтобы было постороено дом дерево и ничего не сломалось
window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Текущий слайд
    let slideIndex = 1,
        slides = document.querySelectorAll('.swipe-comment'),
        prev = document.querySelector('.left-arrow'),
        next = document.querySelector('.right-arrow'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
        
        showSlides(slideIndex);
    // Принимала аргумент номер слайда, который нужно показать
    function showSlides (n) {
        // дополнительно делаем проверку чтобы индекс не вышел за пределы
        if (n > slides.length) {
            // Возвращаемся к первому слайду
            slideIndex = 1;
        }
        if (n < 1) {
            // Возвращаемся к последнему слайду
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
        
    }
    function plusSlides(n) {
        showSlides(slideIndex += n); 
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });
    //Создаем событие клика на родителя, используя делегирование событий
    dotsWrap.addEventListener('click', function(event) {
        // перебираем все dot и узнаем на какую именно кликнули
        for (let i = 0; i < dots.length + 1; i++) {
            // проверяем элемент на соответствие и узнаем номер точки
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });
});


// //ФИЛЬТРАЦИЯ
// //Получаем табы (переключатели), родительский элемент табов, и контент табов
// let tab = document.querySelectorAll(".s7-btn"),
// info = document.querySelector(".btns"),
// tabContect = document.querySelectorAll(".card");
// //Функция которая скрывает контентные табы
// function hideTabContect(a) {
// for (let i = a; i < tabContect.length; i++) {
//     tabContect[i].classList.remove("show");
//     tabContect[i].classList.add("hide");
// }
// }
// //Скрываются все кроме 1 элемента
// hideTabContect(1);
// //Функция показа контентных табов
// function ShowTabContect(b) {
// if (tabContect[b].classList.contains("hide")) {
//     tabContect[b].classList.remove("hide");
//     tabContect[b].classList.add("show");
// }
// }

// //Создаем событие клика на родителя, используя делегирование событий
// info.addEventListener("click", function (event) {
// let target = event.target;

// if (target && target.classList.contains("s7-btn")) {
//     // Связь элементов при совпадении target
//     for (let i = 0; i < tab.length; i++) {
//         //если совпадают
//         if (target == tab[i]) {
//             //Скрываем все табы
//             hideTabContect(0);
//             // удаляем класс активности таба
//             tab.forEach((item) => {
//                 item.classList.remove("activee");
//             });
//             //элементу target(на который кликнули) добавляем активный класс
//             target.classList.add("activee");

//             //Совпадение по нумерации
//             ShowTabContect(i);

//             break;
//         }
//     }
// }
// });

//БУРГЕР-МЕНЮ
const burger = document.querySelector('.burger'); 
const menuItems = document.querySelector('.menu-items'); 

burger.addEventListener('click', () => { 
    menuItems.classList.toggle('showw'); 
});

//МОДАЛЬНОЕ ОКНО (вариант 2)
const cookies = document.getElementById("cookies");
const cookiesBtn = document.getElementById("cookies__btn");

cookiesBtn.addEventListener("click", function () {
	cookies.style.display = "none";
});