import getRandomWord from "./js/getRandomWord";
import createCharPanel from "./js/createCharPanel"
import createFieldWord from "./js/createFieldWord";
import "./style/style.css"

createCharPanel()
console.log(getRandomWord()) 
createFieldWord()
let allChar = document.querySelectorAll('.target-char')

allChar.forEach((e)=>{
    e.addEventListener('click', (currentEl)=>{
        console.log(currentEl.target)
    })
})
