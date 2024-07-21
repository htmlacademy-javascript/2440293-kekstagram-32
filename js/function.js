
/**
 * Проверка длины
 * @param {string} string - проверяемая строка
 * @param {int} maxLength - максимальная длина
 * @returns {boolean} - истина, если не больше максимальной длины
 */
function checkStringLenght(string, maxLength) {
  return (maxLength >= string.length);
}

// Строка короче 20 символов
console.log(checkStringLenght('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
console.log(checkStringLenght('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
console.log(checkStringLenght('проверяемая строка', 10)); // false

/**
 * Проверка палиндрома
 * @param {string} string - проверяемая строка
 * @returns {boolean} - истина, если палиндром
 */
function checkPalindrom(string) {
  let newString = string.replaceAll(' ','');
  newString = newString.toLowerCase();
  let lastIndex = newString.length - 1;
  for (let i = 0;i < Math.floor(newString.length / 2);i++){
    if (newString[i] !== newString[lastIndex]){
      return false;
    } else{
      lastIndex -= 1;
    }
  }
  return true;
}
// Строка является палиндромом
console.log(checkPalindrom('топот')); // true
// Несмотря на разный регистр, тоже палиндром
console.log(checkPalindrom('ДовОд')); // true
// Это не палиндром
console.log(checkPalindrom('Кекс')); // false
// Это палиндром
console.log(checkPalindrom('Лёша на полке клопа нашёл ')); // true

/**
 * Проверка целого положительного числа в строке
 * @param {string} string - проверяемая строка
 * @returns resultNumber - целое положительно число из строки
 */
function returnInteger(string){
  string = string.toString();
  const lastIndex = string.length;
  let resultNumber = '';
  let symbol;
  for (let i = 0;i < lastIndex;i++){
    symbol = parseInt(string[i], 10);
    if (Number.isNaN(symbol) === false){
      resultNumber += symbol;
    }
  }
  resultNumber = parseInt(resultNumber, 10);
  return resultNumber;
}
console.log(returnInteger('2023 год')); // 2023
console.log(returnInteger('ECMAScript 2022')); // 2022
console.log(returnInteger('1 кефир, 0.5 батона')); // 105
console.log(returnInteger('агент 007')); // 7
console.log(returnInteger('а я томат')); // NaN

console.log(returnInteger(2023)); // 2023
console.log(returnInteger(-1)); // 1
console.log(returnInteger(1.5)); // 15
