
// window.addEventListener('mousemove', go);
// function go(event) {
//     document.getElementById('show').innerHTML = 'X:'+event.clientX+' Y:'+event.clientY;
// }	



window.addEventListener('click', go);
function go(event) {
    var elem = document.getElementById('show');
    elem.style.left = event.clientX+'px';
    elem.style.top = event.clientY+'px';
}
