const img = document.querySelector('.slider__image');
const dots = document.querySelectorAll('.slider__dot');
// Создадим массив всех изображений
const imgArr = ['./img/Mask_1.png','./img/Mask_2.png','./img/Mask_3.png'];
// Создаем текущий индекс
let currentIndex = 0;

// Функция смены индекса у dots
function changeIndex(ind) {
    //Получаем индекс 
    currentIndex = ind;
    // Произвести процесс смены слайдов
    slide(currentIndex);
}

function nextIndex(direction){
    currentIndex +=direction;
    // дополнительно делаем проверку чтобы индекс не вышел за пределы
    if(currentIndex >= imgArr.length){
        // Получаем первый элемент путем обнуления
        currentIndex = 0;
    } else if (currentIndex<0) {
        // Получаем последний элемент
        currentIndex = imgArr.length - 1;
    }
    slide(currentIndex);    
}

function slide(index){
    img.style.display = 'none';
    setTimeout(()=>{
        img.style.display = 'block';
    }, 0);
    //меняем атрибут src
    img.src = imgArr[index];
    //Обновляем точки
    updateDots(index);
    
}
// Активный статус 
function updateDots(index) {
    for (let dot of dots) {
        dot.classList.remove('activ');
    }
    dots[index].classList.add('activ');
}
//Саму функцию нужно повесить на кнопки при событии клика
const btnLeft = document.querySelector('.slider__nav-left');
const btnRight = document.querySelector('.slider__nav-right');

 btnLeft.addEventListener('click', ()=>{
    nextIndex(-1)
});
btnRight.addEventListener('click', ()=>{
    nextIndex(1)
});
// Функция обработки клика, которая меняет индекс либо в большую либо в меньшую сторону.
// direction(направление) - параметр, который принимает функция
/*
function slide(direction){
    currentIndex +=direction;
    // дополнительно делаем проверку чтобы индекс не вышел за пределы
    if(currentIndex >= imgArr.length){
        // Получаем первый элемент путем обнуления
        currentIndex = 0;
    } else if (currentIndex<0) {
        // Получаем последний элемент
        currentIndex = imgArr.length - 1;
    }
    //меняем атрибут src
    img.src = imgArr[currentIndex];
}

const btnLeft = document.querySelector('.slider__nav-left');
const btnRight = document.querySelector('.slider__nav-right');

 btnLeft.addEventListener('click', ()=>{
    slide(-1)
});
btnRight.addEventListener('click', ()=>{
    slide(1)
});
*/

