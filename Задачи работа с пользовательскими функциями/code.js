/* Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(),
 которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.*/

/*var arr = [ 1 ,2 , -6 ,-2 ,5 ,6 ,-1 ,-3];
var result = [];*/

/* 1) Берем каждый символ массива и присваиваем числу
2) isPositive(число) - проверяет, положительно или отрицательно число, возвращает true 
3) в массива result запишем числа положительные*/
/*
for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (isPositive(num) == true) {
        result.push(num);
    } 
}

console.log(result);

function isPositive() {
    return num > 0;
}*/

/* Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.*/
/*
function isNumberInRange(num) {
    if (num > 0 && num <= 10) {
        return true;
    } else {
        return false;
    }
}

console.log(isNumberInRange(5));*/

/* Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.*/
/*
var arr = [ 1 ,2 , -6 ,-2 ,5 ,6 ,-1 ,-3, 12];
var result = [];

for (i = 0; i < arr.length; i++) {
    num = arr[i];
    if (isNumberInRange(num) == true) {
        result.push(num);
    }
}

console.log(result);

function isNumberInRange(num) {
    if (num > 0 && num <= 10) {
        return true;
    } else {
        return false;
    }
}*/

/*Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр */
/*1) Переводит число в строку и переводит в символы массива
2) В цикле складывает все символы массива, присваивает переменной sum - Функция getDigitsSum */


/*
function getDigitsSum(num) {
	var num = String(num);
	var sum = 0;
	for (var i = 0; i < num.length; i++) {
		sum += Number(num[i]);
	}
	return sum;
}


/* Найдите все года от 1 до 2018, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.*/
/*
for ( i = 1; i < 2018; i++ ) {
    if (getDigitsSum(i) == 13) {
        console.log(i);
    }
}
*/

/* Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число 
и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false. */
/*
function isEven(n) {
    if (n%2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(5));*/

/* Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать 
только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.*/
/*
var arr = [2 ,4 ,7, 9, 2, 6, 4, 3, 8];
var result = [];
var n;

for (i = 0; i < arr.length; i++) {
    if (isEven(arr[i])) {
        result.push(arr[i]);
    }
}

console.log(result);

function isEven(n) {
    if (n%2 == 0) {
        return true;
    } else {
        return false;
    }
}
*/

/* Сделайте функцию getDivisors, 
которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).*/

function getDivisors(num) {
    var arr = [];

    for (i = 0; i <= num; i++) {
        if (num% i == 0 ) {
            arr.push(i);
        }
    }

    return arr;
}

console.log(getDivisors(15));