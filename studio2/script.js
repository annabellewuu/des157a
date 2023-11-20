(function(){
  'use strict';
  console.log('reading js');

  //image scrolling

  let bobaScrolled = false;
  let chickenScrolled = false;
  let mangoScrolled = false;
  let bearScrolled = false;
  let drinkScrolled = false;

  window.addEventListener('scroll', function () {
      const scrollY = window.scrollY * 1.2;
      const offsetBoba = Math.min(scrollY * 1.2, 600); 
      const offsetChicken = Math.min(-scrollY * 1.2 / 1.2);
      const offsetMango = Math.min(scrollY * 1.2, 1000);
      const offsetBear = Math.min(-scrollY * 0.5 / 1.2);
      const offsetDrink = Math.min(scrollY * 0.5, 1000);

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

      if (!bearScrolled) {
          document.querySelector('.bear').style.transform = `translateX(${offsetBear}px)`;
          if (scrollY > 1500) {
              bearScrolled = true;
          }
      }

      if (!drinkScrolled) {
          document.querySelector('.drink').style.transform = `translateX(${offsetDrink}px)`;
          if (scrollY > 1500) {
              drinkScrolled = true;
          }
      }

      // Adjust the opacity of the text based on the scroll for each text element
      const textBoba = document.querySelectorAll('.textBoba');
      const textOpacityBoba = window.scrollY * 0.5;

      textBoba.forEach((element) => {
          element.style.opacity = textOpacityBoba;
      });

      const textChicken = document.querySelectorAll('.textChicken');
      const textOpacityChicken = window.scrollY * 0.5;

      textChicken.forEach((element) => {
          element.style.opacity = textOpacityChicken;
      });
  });
})();



  