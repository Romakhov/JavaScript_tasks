/*var i = 1;
while(i <= 50) {
    document.write(i++);
}*/

/*var arr = [1, 2, 3, 4, 5];

for (i = 0; i < arr.length; i++) {
    document.write(arr[i] + '<br>');
}*/

/*var arr = [2, 3, 4, 5];
var result = 1;
for (i = 0; i < arr.length; i++) {
    result *=arr[i];
}

alert(result);*/
/*
var obj = {
	'Минск': 'Беларусь',
	'Москва': 'Россия',
	'Киев': 'Украина'
};

for (var key in obj) {
	alert(key + ' - это ' + obj[key] + '.');
}
*/

/*var i = 1;
for(i=1; i <=100; i++) {
    document.write(i + '<br>');
}*/


/*for (i = 11; i <=33; i++) {
    document.write(i + '<br>');
}*/
/*
for (i = 0; i <=100; i++) {
    i += 2;
    alert(i);
}
*/
/*
var arr = [1, 3, -5 ,-4, 2, 2, -1, 0];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0 ) {
        sum +=arr[i];
        

    }

}

alert(sum);*/
/*
var arr = [ 1, 2, 5, 9, 4, 13, 4, 10];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 4) {
        alert("Есть!");
        break;
    } 
    
}*/
/*
var arr = ['10', '20', '30', '50', '235', '3000'];
for (var i = 0; i < arr.length; i++) {
	if (arr[i][0] == '1' || arr[i][0] == '2' || arr[i][0] == '5') {
		alert(arr[i]);
	}
}*/

/*var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var str = '';
for (var i = 0; i < arr.length; i++) {
	str += '-' + arr[i];
}

document.write(str + '-');*/

var week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
var day = 4;

for (var i = 0; i < week.length; i++) {
    if ( day == i) {
        document.write('<i>' + day + '</i>');
    }
    document.write(week[i] + '<br>');
}

for (var n = 1000, num = 0; n > 50; n /= 2, num++);
alert(n);
alert(num);