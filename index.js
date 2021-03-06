'user strict'

/* Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число */

// Первое решение (Math.min & Math.max) 
const arrNums1 = [4, -2, 19, -130, 0, 10];

function getMinMaxNums1(arr) {
  const minNumber = getMin(arr); 
  const maxNumber = getMax(arr);
  return [minNumber, maxNumber];
}

function getMin(arr) {
  return Math.min.apply(null, arr);
}

function getMax(arr) {
  return Math.max.apply(null, arr);
}
console.log(getMinMaxNums1(arrNums1));


// Второе решение
const arrNums2 = [4, 1, 55, 0, 10];

function getMinMaxNums2(arr) {
  const minNumber = getMin(arr); 
  const maxNumber = getMax(arr);
  return [minNumber, maxNumber];
}
function getMin(arr) {
  let min = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
function getMax(arr) {
  let max = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(getMinMaxNums2(arrNums2));


/* Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79. */
const arrayValues = [12, 22, 33];

function getAverageOfValues(arr){
  let sum = 0;
  for(let i = 1; i < arr.length; i++){
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(getAverageOfValues(arrayValues));


/* 1. Выведите на экран случайное целое число от 1 до 100
  2. Заполните массив 10-ю случайными целыми числами. */
function getRandomArray(arrayLength, randomNumsRange) {
  let arr = new Array();
  for (let i = 0; i < arrayLength; i++) {
    arr.push(Math.ceil(Math.random() * randomNumsRange));
  }
  return arr;
}

// Задачи на работу с массивами в JavaScript
/*
  Работа с concat:
  1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
*/
const arrayToConcat1 = [1, 2, 3];
const arrayToConcat2 = [4, 5, 6];

function getArraysConcat(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(getArraysConcat(arrayToConcat1, arrayToConcat2));


/*
  Работа с reverse:
  2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
*/
const arrayToReverse = [1, 2, 3];

function getArrrayReverse(arr) {
  return arr.reverse();
}
console.log(getArrrayReverse(arrayToReverse));


/* Работа с push, unshift:
  3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
  4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
*/
const arrayToPushUnshift = [1, 2, 3];

function getArrayPush(arr) {
  arr.push(4, 5, 6);
  return arr;
}
console.log(getArrayPush(arrayToPushUnshift));

function getArrayUnshift(arr) {
  arr.unshift(4, 5, 6);
  return arr;
}
console.log(getArrayUnshift(arrayToPushUnshift));


/*
  Работа с shift, pop:
  5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
  6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
*/
const arrayToShift = ['js', 'css', 'jq'];
const arrayToPop = ['js', 'css', 'jq'];

function getArrayShift(arr) {
  return arr.shift(4, 5, 6);
}
console.log(getArrayShift(arrayToShift));

function getArrayPop(arr) {
  return arr.pop(4, 5, 6);;
}
console.log(getArrayPop(arrayToPop));


/*
  Работа со slice:
  7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
  8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
*/
const arrayToSlice1 = [1, 2, 3, 4, 5];
const arrayToSlice2 = [1, 2, 3, 4, 5];

function getArraySlice1(arr) {
  return arr.slice(0, 3);
}
console.log(getArraySlice1(arrayToSlice1));

function getArraySlice2(arr) {
  return arr.slice(3);
}
console.log(getArraySlice2(arrayToSlice2));


/* Работа со splice: */
// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const arrayToSplice1 = [1, 2, 3, 4, 5];

function getArraySplice1(arr) {
  arr.splice(1, 2);
  return arr;
}
console.log(getArraySplice1(arrayToSplice1));


// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const arrayToSplice2 = [1, 2, 3, 4, 5];

function getArraySplice2(arr) {
  const newArrayToSplice2 = arr.splice(1, 3);
  return newArrayToSplice2;
}
console.log(getArraySplice2(arrayToSplice2));


// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const arrayToSplice3 = [1, 2, 3, 4, 5];

function getArraySplice3(arr) {
  arr.splice(3, 0, 'a', 'b', 'c');
  return arr;
}
console.log(getArraySplice3(arrayToSplice3));


// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arrayToSplice4 = [1, 2, 3, 4, 5];

function getArraySplice4(arr) {
  arr.splice(1, 0, 'a', 'b');
  arr.splice(6, 0, 'c');
  arr.splice(8, 0, 'e');
  return arr;
}
console.log(getArraySplice4(arrayToSplice4));


/*
  Работа с sort:
  13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
*/
const arrayToSort = [3, 4, 1, 2, 7];

function getArraySort(arr) {
  return arr.sort();
}
console.log(getArraySort(arrayToSort));


/*
  Работа с Object.keys:
  14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
*/
const newObject = {js:'test', jq: 'hello', css: 'world'};

function getObjectKeys(object) {
  return Object.keys(object);
}
console.log(getObjectKeys(newObject));


/*
  1. Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет
*/
function hasElem(arr, str) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      return true;
    }
  }
  return false;
}
console.log(hasElem([11, 22, 33], 'string')); // false
console.log(hasElem([11, 22, 'string'], 'string')); // true


/*
  2. Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.
*/
const arrayIncludeValue = [1, 2, 3];

function hasNum(arr) {
  return arr.includes(2);
}
console.log(hasNum(arrayIncludeValue)); // true


/*
  3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true, а если нет - вернуть false.
*/
const arrayWithNums = [0, 1, 3, 3];

function hasDuplicateOfNums(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
}
console.log(hasDuplicateOfNums(arrayWithNums));
