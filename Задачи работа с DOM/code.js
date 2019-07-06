/*  Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'. */
/*
var arr = [1 , 3, 4, 6, 8, 9 ,2];

function hasElem(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 5) {
            return true;
        }
    }
return false;    
}

alert(hasElem(arr));*/

/* Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. 
То есть в нашем случае нужно проверить, 
что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'. */
/*
var n = 40;

function division() {
    for (i = 2; i <=30; i++) {
        if (n%i == 0) {
            return true;
        } 
    }

    return false;
}

alert(division(n));*/
/*
var num = 31;
var flag = false;
for (var i = 2; i < num; i++) {
	if (num % i == 0) {
		flag = true;
		break;
	}
}

if (flag == true) {
	alert('true');
} else {
	alert('false');
}*/

/*  Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.*/
/*
var arr = [1, 2, ,3 ,4, 5, 6, 6];

function same() {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i-1]) {
            return true;
        }
    }
    return false;
} 

alert(same(arr));*/

/* Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false*/
/*
function equal(a, b) {
    return a ==b;
}

alert(equal(2,3));*/

/*  Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false*/
/*
function sum(a,b) {
    return a + b >10;
}

alert(sum( 5, 5));

*/

/* Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.*/
/*
function negative(a) {
    return a < 0;
}

alert(negative(-2));*/

/* Выведите на экран таблицу умножения (как в школьной тетради) */
/*
for ( i = 1; i <= 9; i++ ) {
    for (j = 1; j <= 9; j++) {
    document.write(i *= j);
    }
    document.write('<br>');
}
*/
/*
str = '';

for (i = 1; i <= 9; i++) {
    str +=i;
}

alert(str);*/
/*
var str = '-';

for (i = 1; i <= 9; i++) {
    str += i;
    str = str + '-';

}

alert(str);*/
/*
str = '';

for ( i = 9; i >0; i--) {
    str +=i;
}

alert(str);

*/
/*
var str = '';

for ( i = 0; i <= 20; i++) {
    str += 'X';   
    document.write(str + '<br>');
} 
*/
/*
var str = '';

for (i = 1; i <= 9; i++ ) {
    for (j = 1; j <=i; j++) {
        document.write(i);
    }

    document.write(str + '<br>');
}*/

var str = '';

for (i = 0; i < 10; i++) {
    str = str + 'XX';
    document.write(str + '<br>');
}




