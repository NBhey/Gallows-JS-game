import getRandomWord from "./js/getRandomWord";
import createCharPanel from "./js/createCharPanel"
import createFieldWord from "./js/createFieldWord";
import displayWord from "./js/displayWord"
import "./style/style.css"

createCharPanel()

let randomWord = getRandomWord()
displayWord(randomWord)
console.log(randomWord) 
createFieldWord()
let allChar = document.querySelectorAll('.target-char')

allChar.forEach((e)=>{
    e.addEventListener('click', (currentEl)=>{
        currentEl.target.style.color = 'red'
        console.log(currentEl.target)
    })
})
