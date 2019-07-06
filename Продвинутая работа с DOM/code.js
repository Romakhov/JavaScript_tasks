 /*
        function start() {
            
            window.setInterval(timer,1000);

        }
            
            function timer() {

                elem = document.getElementById('number');
                elem.innerHTML = parseInt(elem.innerHTML)+1;
            }
        */
       /*
       function start() {
           window.timerId = window.setInterval(timer,1000);
            document.querySelector('#go').disabled = true;
            document.querySelector('#nogo').disabled = false; 
           
       }
       
       function stop() {
            window.clearInterval(window.timerId);
            document.querySelector('#go').disabled = false;
            document.querySelector('#nogo').disabled = true; 
       }

       function timer() {
           elem = document.querySelector('#number');
           elem.innerHTML = parseInt(elem.innerHTML)+1;
       }
*/
       /*
       function go() {
           window.timerId = window.setInterval(timer,1000);
       }

       function timer() {
           elem = document.querySelector('#clock');
           var date = new Date();
           elem.innerHTML = addZero(date.getHours())+':'+addZero(date.getMinutes())+':'+addZero(date.getSeconds());
       }

       function addZero(num){
        if(num <=9) return '0'+num;
            else return num;
    }*/
/*
    function go() {
        window.timeId = setInterval(timer,300);
        document.querySelector('#button').disabled = true;
    }

    function stop(){
        window.clearInterval(window.timeId);
    }

    function timer() {
        var test = document.querySelector('#test');
        var number = parseInt(test.innerHTML)-1;
        test.innerHTML = number;

        if (number == 0) {
            stop();
            var timeStop = document.querySelector('#stop');
            timeStop.innerHTML = "Обратный отсчет завершен";
        }
    }*/

    