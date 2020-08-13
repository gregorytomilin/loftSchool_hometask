// #1 Фильтрация строки
// Создать переменную со строковым значением. Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки. Результат вывести в консоль.

const string = "Привет! Как дела?";
let vowelsArr = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

function getVowels(string) {
    string = string.toLowerCase();

    let vowelsFromString = ''
    for (let i = 0; i < string.length; i++) {

        if (vowelsArr.includes(string[i])) {
            vowelsFromString += string[i];
        }

    }
    return vowelsFromString;
}

console.log(getVowels(string));




/////////////////////////////////////////////////////////////////////////////////////
// #2 Выборка объекта
// Сформировать произвольный массив объектов, описывающий, например, работников компании, в каждом объекте должны содержаться сл. свойства (поля) - name (содержащее имя сотрудника) и поле salary (содержащее зарплату сотрудника от 0 до 3000). Сформировать функцию в которую будет передан в качестве аргумента этот массив и возвращен из функции массив содержащий имена всех сотрудников, чья зарплата превышает 1000.

const workers = [
    { "name": "John", "salary": 500 },
    { "name": "Mike", "salary": 1300 },
    { "name": "Linda", "salary": 1500 }
];

function getWorthyWorkers(workersArray) {
    let richWorkersForBigTaxes = []
    workersArray.forEach(element => {
        if (element.salary > 1000) {
            richWorkersForBigTaxes.push(element.name)
        }
    });

    return richWorkersForBigTaxes;
}


console.log(getWorthyWorkers(workers))


/////////////////////////////////////////////////////////////////////////////////////

// Анализ строки
// Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла. Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.


const path = "/users/download/index.html";

function isHtml(somePath) {
    checkData = somePath.slice(-5);
    if (checkData === '.html') {
        return true
    } else {
        return false
    }
}

console.log(isHtml(path))


//   #1 Фильтрация массива
// Создайте функцию которая в качестве аргумента принимает целое число, и проверяет четное оно или нет. Затем создайте произвольный массив целых чисел. И используя функцию проверки числа на четность, создайте из готового массива новый, который будет содержать только четные числа. Результат выведите в консоль.


const mixedArray = [3, 13, 74, 14, -12, 1, 1, 29, 10];

const isEven = num => {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
};

console.log(isEven(3))

function filterArray(someNumArray, someCheckingFunc) {
    let evenNumsArray = [];
    someNumArray.forEach(numOfArray => {
        if (someCheckingFunc(numOfArray)) {
            evenNumsArray.push(numOfArray)
        }
    })

    return evenNumsArray
}

console.log(filterArray(mixedArray, isEven));





/////////////////////////////////////////////////////////////////////////////////////
// Простой Слайдер
let arrowRight = document.querySelector('#right');
let arrowLeft = document.querySelector('#left');
let simpleSliderWrapper = document.querySelector('.simpleSlider');
let simpleSliderBody = document.querySelector('.simpleSlider__body');
let simpleSliderItem = document.querySelectorAll('.simpleSlider__item');
let maxScrollWidth = simpleSliderBody.scrollWidth - simpleSliderWrapper.offsetWidth;
let sliderBodyPosition = 0;

function sliderMoveLeft() {
    sliderBodyPosition -= 100;
    if (sliderBodyPosition < 0) {
        sliderBodyPosition = maxScrollWidth;
    }
    simpleSliderBody.style.transform = `translate(-${sliderBodyPosition}px)`
}


function sliderMoveRight() {
    sliderBodyPosition += 100;
    if (sliderBodyPosition > maxScrollWidth) {
        sliderBodyPosition = 0;
    }
    simpleSliderBody.style.transform = `translate(-${sliderBodyPosition}px)`
}

arrowRight.addEventListener('click', (e) => {
    e.preventDefault();
    sliderMoveRight()
})

arrowLeft.addEventListener('click', (e) => {
    e.preventDefault();
    sliderMoveLeft()
})



/////////////////////////////////////////////////////////////////////////////////////
// #2 Модальное окно
// На странице создан произвольный контент и кнопка вызова модального окна. По нажатию нужно отобразить оверлей (блок с затемнением) и модальное окно по середине экрана. Разметка внутри оверлея должа быть создана при помощи javaScript. Закрыть модальное окно можно нажатием на кнопку закрыть либо по клику вне области модального окна.

let openBtn = document.querySelector('.open_Btn');
let overlayBlock = document.querySelector('.overlay');

openBtn.addEventListener('click', ()=>{

    overlayBlock.style.visibility = 'visible';
    overlayBlock.style.opacity = '1';
    let popUpBody = document.createElement('div');

    popUpBody.innerHTML = '<p>hello<p/><button class="close">✖</button>'
    popUpBody.addEventListener('click',(e)=>{ e.stopPropagation() })
    overlayBlock.appendChild(popUpBody);

    let child = overlayBlock.lastChild;

    overlayBlock.addEventListener('click',removeChild);
    overlayBlock.querySelector('.close').addEventListener('click',removeChild);

    function removeChild() {

            overlayBlock.style.visibility = 'hidden';
            overlayBlock.style.opacity = '0';
            overlayBlock.removeChild(child);
            this.removeEventListener('click', removeChild)
    }


})