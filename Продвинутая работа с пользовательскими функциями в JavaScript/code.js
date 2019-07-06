/* Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте 
вспомогательную функцию ucfirst, которая будет
 получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой*/

 var str ='abcde abcde abcde';
var newArr = [];

var arr = str.split(' ');

alert(arr);
/*for (var i = 0; i < arr.length; i++) {
	newArr.push(ucfirst(arr[i]));
}

var newStr = newArr.join(' ');
alert(newStr);

function ucfirst(str) {
	return str[0].toUpperCase() + str.substr(1);
}*/
