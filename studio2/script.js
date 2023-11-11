(function(){
    'use strict';
    console.log('reading js');


    let bobaScrolled = false;
    let chickenScrolled = false;
    let mangoScrolled = false;

    window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const offsetBoba = scrollY * 1;
    const offsetChicken = -scrollY * 1;
    const offsetMango = scrollY * 1;


    if (!bobaScrolled) {
        document.querySelector('.boba').style.transform = `translateX(${offsetBoba}px)`;
        if (scrollY > 500) {
        bobaScrolled = true;
        }
    }

    if (!chickenScrolled) {
        document.querySelector('.chicken').style.transform = `translateX(${offsetChicken}px)`;
        if (scrollY > 500) {
        chickenScrolled = true;
        }
    }

    if (!mangoScrolled) {
        document.querySelector('.mango').style.transform = `translateX(${offsetMango}px)`;
        if (scrollY > 500) {
          mangoScrolled = true;
        }
      }

    // Adjust the opacity of the text based on the scroll
    const text = document.querySelectorAll('.text');
    const textOpacity = 100; 

    text.forEach((element) => {
        element.style.opacity = textOpacity;
    });
    });


})();