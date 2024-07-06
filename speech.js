'use strict'

function speak() {
    var text = document.getElementById("input").value;
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance)
}


const myInterval = setInterval(myTimer, 1000);
 function myTimer() {
    alert('Voice On');

    
 }

const clear = clearInterval(myInterval, 3000);



// $(function () {
//     var timer;
//     function come() { alert("here"); }
//     timer = setInterval(come, 0);
//     clearInterval(timer);
//     timer = setInterval(come, 10000);
// });
