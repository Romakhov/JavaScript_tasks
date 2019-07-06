/*var date = new Date();
alert(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());*/
/*
var date = new Date();
var months = ["Январь", "Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
var month = date.getMonth();
alert(months[month]);*/


/*document.write(date.getDay() + '<br>');
document.write(date.getMonth() + '<br>');
document.write(date.getFullYear() + '<br>');*/
/*
function isZero(num) {
    if (num > 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
} 

alert(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + isZero(date.getDate()) + '.' + isZero(date.getMonth() + 1) + '.' + isZero(date.getFullYear()));*/
/*
var date = new Date();
/*alert(date.getDay());*/
/*
function showDay(num) {
    var arr = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
    return arr[num-1];
}

alert(showDay(4));*/
/*
var date = new Date();
var day = date.getDay(2015, 0, 7);
var days = ['Воскресенье', 'Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
alert(days[day]);
*/
/*
var date = new Date();
var minute = Math.floor(date.getTime() / (1000 * 60));
alert(minute);*/

/*var time = Date.parse('1988-03-01T00:00:00'); //заданный момент в timestamp

var date = new Date();
var now = date.getTime(); //текущий момент в timestamp

var result = now - time; //найдем разницу в миллисекундах
result = result / (1000 * 60 * 60); //переведем миллисекунды в часы
alert(result);
*/
/*
var time = Date.parse('2018-06-03T00:00:00');
var date = new Date();

var now = date.getTime();
var result = time - now;
alert(Math.floor(result/ 1000));*/