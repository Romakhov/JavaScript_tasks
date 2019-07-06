// // // // // // var elem = document.getElementById('elem');
// // // // // // elem.classList.add('www');
// // // // // // elem.classList.remove('www');
// // // // // // check = elem.classList.contains('www');
// // // // // // elem.classList.toggle('www');
// // // // // // for (var i = 0; i < elem.classList.length; i++) {
// // // // // //     alert(elem.classList[i]);
// // // // // // }

// // // // // var elem = document.getElementById('elem');
// // // // // elem.style.cssText = 'background-color: red; width:30px; height: 30px; border: 1px solid #000';



// // // // function func() {
// // // // 	var elem = document.getElementById('elem');
// // // // 	alert(elem.tagName.toLowerCase());
// // // // }

// // // var tags = document.getElementsByClassName('www');
// // // for (var i = 0; i < tags.length; i++) {
// // //     tags[i].innerHTML += tags[i].tagName.toLowerCase();
// // // }

// // // Дан ol. Вставьте ему в конец li с текстом 'пункт

// // var ol = document.getElementById('ol');
// // var li = document.createElement('li');
// // li.innerHTML = 'пункт';
// // ol.appendChild(li);

// // Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.

// // Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.

// var arr = [3, 5, 7, 8];
// var ul = document.getElementById('ul');

// for (var i=0; i < arr.length; i++) {
//     var li = document.createElement('li');
//     li.innerHTML = arr[i];
//     ul.appendChild(li);
// }


var elem = document.getElementById('elem');
elem.insertAdjacentHTML('beforeBegin','<span>!!!</span>');
elem.insertAdjacentHTML('afterEnd','<span>!!!</span>');
elem.insertAdjacentHTML('afterBegin','<span>!!!</span>');
elem.insertAdjacentHTML('beforeEnd','<span>!!!</span>');