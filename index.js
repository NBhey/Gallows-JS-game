import getRandomWord from "./js/getRandomWord";
import createCharPanel from "./js/createCharPanel";
import createFieldWord from "./js/createFieldWord";
import displayWord from "./js/displayWord";
import checkCharInWord from "./js/checkCharInWord";
import showLetter from "./js/showLetter";
import showGallow from "./js/showGallow";
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
      showGallow(el)
    }
  });
});

