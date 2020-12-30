'user strict'

/* Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число */

/* первое решение*/
const currentValues = [4, -2, 5, 19, -130, 0, 10];
const minValue = Math.min(null, currentValues);
const maxValue = Math.max(null, currentValues);


/* второе решение*/
function getMinAndMaxNumbers() {
  return [getMin(arguments), getMax(arguments)];
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

function getMin(arr) {
  let max = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
getMinAndMaxNumbers();


/* Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79. */

const currentValues = [12, 15, 20, 25, 59, 79];

function averageOfValues(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum / arr.length;
}
averageOfValues(currentValues);



//Выведите на экран случайное целое число от 1 до 100.
const randomValue = Math.ceil(Math.random()*100);



//Заполните массив 10-ю случайными целыми числами.

