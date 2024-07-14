//массив имен для создания объектов

const NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон',
    'Леонардо',
    'Донаттело',
    'Рафаэль',
    'Микеланджело',
    'Антон',
    'Евгений',
    'Даниил',
    'Илья'
];

//массив описаний для фотографии

const DESCRIPTIONS = [
    'Красивая фотография',
    'Некрасивая фотография',
]

//массив комментарий

const COMMENT_MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

/**
 * Нахождение рандомного целого числа из диапазона
 * @param {int} a - первое число диапазона
 * @param {int} b - второе число диапазона
 * @returns {int} result - рандомное целое число
 */
function getRandomInteger (a, b) {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
}

/**
 * Нахождение рандомного элемента массива
 * @param {Array} elements - массив элементов
 * @returns рандомный элемент массива
 */
function getRandomArrayElement(elements) {
    return elements[getRandomInteger(0, elements.length - 1)];
}

/**
 * Нахождение уникального значения из диапазона
 * @param {int} min - минимальное значение диапазона
 * @param {int} max - максимальное значение диапазона
 * @returns currentUniqeValue - уникальное значение из диапазона
 */
function getRandomUniqeValueFromRage(min, max){
    const previousUniqeValues = [];

    return function(){
        let currentUniqeValue = getRandomInteger(min, max);
        if (previousUniqeValues.length >=(max-min+1)){
            console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
        }
        while (previousUniqeValues.includes(currentUniqeValue)){
            currentUniqeValue = getRandomInteger(min, max);
        }
        previousUniqeValues.push(currentUniqeValue);
        return currentUniqeValue;
    }
}

var generatePhotoId = getRandomUniqeValueFromRage(1, 25);
var generateUrl = getRandomUniqeValueFromRage(1, 25);
var commentId = getRandomUniqeValueFromRage(1, 250);

/**
 * Составление коммантария к фотографии из 1 или 2 комментариев
 * @param {Array} elements - массив элементов
 * @returns newComment - конечный комментарий
 */
function createComments(elements){
    const stringCount=getRandomInteger(1, 2);
    var newComment='';
    console.log(stringCount);
    for (let i=0;i<=stringCount-1;i++){
      newComment+=getRandomArrayElement(elements);
    }
    return newComment;
}

/**
 * Создание объекта фотографии
 * @returns объект фотографии
 */
function createPhotoObjects () {
    return {
        id: generatePhotoId(), //идентификатор опубликованной фотографии. От 1 до 25. Id не должны повторяться
        url: `photos/${generateUrl()}.jpg`, //адрес картинки вида photos/{{i}}.jpg, где {{i}} — число от 1 до 25. Адреса картинок не должны повторяться
        description: getRandomArrayElement(DESCRIPTIONS), //описание фотографии. Описание придумайте самостоятельно
        likes: getRandomInteger(15,200), //количество лайков, поставленных фотографии. Случайное число от 15 до 200
        comments: { //список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом
            id: commentId(), //у каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться
            avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`, //строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img
            message: createComments(COMMENT_MESSAGES), //Для формирования текста комментария — message — необходимо взять одно или два случайных предложения из перечня
            name: getRandomArrayElement(NAMES),//имена авторов должны быть случайными

        }
    };
}

//Количество объектов массива — описание фотографий, опубликованной пользователем
const PHOTO_COUNT = 25;

//Генерация массива фотографий
const photoObjects = Array.from({length: PHOTO_COUNT}, createPhotoObjects);

console.table(photoObjects);
