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
    if (previousUniqeValues.length >= (max - min + 1)){
      console.error(`Перебраны все числа из диапазона от ${ min } до ${ max}`);
    }
    while (previousUniqeValues.includes(currentUniqeValue)){
      currentUniqeValue = getRandomInteger(min, max);
    }
    previousUniqeValues.push(currentUniqeValue);
    return currentUniqeValue;
  };
}

/**
 * Составление комментария к фотографии из 1 или 2 комментариев
 * @param {Array} elements - массив элементов
 * @returns newComment - конечный комментарий
 */
function createComments(elements){
  const stringCount = getRandomInteger(1, 2);
  let newComment = '';
  console.log(stringCount);
  for (let i = 0;i <= stringCount - 1;i++){
    newComment = `${newComment + getRandomArrayElement(elements) } `;
  }
  return newComment;
}

export{getRandomInteger,getRandomArrayElement,getRandomUniqeValueFromRage,createComments};
