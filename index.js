import getRandomWord from "./js/getRandomWord";
import createCharPanel from "./js/createCharPanel";
import createFieldWord from "./js/createFieldWord";
import displayWord from "./js/displayWord";
import checkCharInWord from "./js/checkCharInWord";
import showLetter from "./js/showLetter";

import "./style/style.css";

createCharPanel();

let randomWord = getRandomWord();

displayWord(randomWord);

createFieldWord();

let allChar = document.querySelectorAll(".target-char");

allChar.forEach((e) => {
  e.addEventListener("click", (currentEl) => {
    let el = currentEl.target;
    if (checkCharInWord(randomWord, el)) {
      showLetter(randomWord, el);
    } else {
      el.style.color = "red";
    }
  });
});

let gallow = document.querySelector('.gallow')





let beam = document.createElement('img')
beam.classList.add('beam')
beam.src = './image/Стойка.png'
beam.alt = 'Стойка'
gallow.append(beam)


let head = document.createElement('img')
head.classList.add('head')
head.src = './image/Голова.png'
head.alt = 'Голова'
gallow.append(head)

let body = document.createElement('img')
body.classList.add('body')
body.src = './image/Туловище.png'
body.alt = 'Туловище'
gallow.append(body)


let rightHand =  document.createElement('img')
rightHand.classList.add('rightHand')
rightHand.src = './image/Прука.png'
rightHand.alt = 'Прука'
gallow.append(rightHand)

