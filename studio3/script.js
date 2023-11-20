(function(){
    'use strict';
    console.log('reading js');
  
    const container = document.querySelector(".container");
    const btn = document.getElementById("spin");
    const number = Math.ceil(Math.random() * 2000);

    btn.onclick = function () {
     container.style.transform = "rotate(" + number + "deg)";
     number += Math.ceil(Math.random() * 1000);
    }

  })();