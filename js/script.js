//$(".option").click(function () {
//  $(".option").removeClass("active");
//  $(this).addClass("active");
//});

///effect

'use strict';

let effects = document.querySelectorAll('.effect');

effects.forEach((effect) => {
  let letters = effect.textContent.split('');
  effect.textContent = '';
  letters.forEach((letter) => {
    let li = document.createElement('li');
    li.textContent = letter;
    li.className = 'letter';
    effect.append(li);
  });
});

let currentEffectIndex = 0;
let maxEffectIndex = effects.length - 1;
effects[currentEffectIndex].style.opacity = '1';

let rotateText = () => {
  let currentEffect = effects[currentEffectIndex];
  let nextEffect = 
    currentEffectIndex === maxEffectIndex ? effects[0] : effects[currentEffectIndex + 1];
    Array.from(currentEffect.children).forEach((letter, i) => {
      setTimeout(() => {
        letter.className = 'letter out';
      }, i * 70);
    });

    nextEffect.style.opacity = '1';
    Array.from(nextEffect.children).forEach((letter, i) => {
      letter.className = 'letter behind';
      setTimeout(() => {
        letter.className = 'letter in';
      }, 300 + i * 70);
    });
    currentEffectIndex =
    currentEffectIndex === maxEffectIndex ? 0 : currentEffectIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);