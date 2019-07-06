/* Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл*/
/*
var arr = [1 ,2 ,4, 5, 7, 8];

rekurs(arr);

function rekurs(arr) {
	document.write(arr.shift() + '<br>');

	if (arr.length != 0) {
		rekurs(arr);
	}
}*/
/*
function func(arr) {
	alert(arr[0]);
	arr.splice(0, 1);
	if (arr.length > 0) {
		func(arr);
	}
}*/

/* Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. 
И так, пока сумма не станет однозначным числом (9 и менее)*/
/*
var num = 321;
var sum = 0;

function rekurs(num) {
	arr = String(num).split('');
	for (var i=0; i < arr.length; i++) {
		sum +=arr[i];
		if (sum > 9)
	}

}*/
