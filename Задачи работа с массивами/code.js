/* Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее*/
/*
var arr = [];
var str = 'x';
for (var i = 0; i < 10; i++) {
	arr.push(str);
	str += 'x';
}
console.log(arr);*/

/* Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее*/
/* 
var arr = [];
var str = '';

for (var i = 1; i < 10; i ++) {
    var str = '';
    for (var j = 1; j <= i; j++) {
        str = str + i;
    }
    arr.push(str);
}

console.log(arr);*/

/* Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, 
которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].*/

/*
function arrayFill(value, amount) {

    var arr = [];

    for (var i=0; i < amount; i++) {
        arr.push(value);
    }

    return arr;
}

console.log(arrayFill('x',5));*/

/* Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. */


/*
function func(arr) {
var sum = 0;

for ( i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > 10) {
        return i + 1;
    }
} 

}


console.log(func([2, 3, 5, 6, 8]));*/
/*
var arr = [2, 3, 5, 6, 8];
var result = [];

for ( i = arr.length-1; i >= 0; i--) {
    result.push(arr[i]);
}

console.log(result);*/
/*
var arr = [[1, 2, 3], [4, 5], [6]];
var sum = 0;

for (var i = 0; i < arr.length; i ++) {
    for (j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}

console.log(sum);*/

var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        for (var k=0; k < arr[i][j].length; k++) {
            sum += arr[i][j][k];
        }
    }
}

console.log(sum);