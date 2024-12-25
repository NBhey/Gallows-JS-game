import getRandomWord from "./js/getRandomWord";
import createCharPanel from "./js/createCharPanel"
import createFieldWord from "./js/createFieldWord";
import "./style/style.css"

createCharPanel()
console.log(getRandomWord()) 
createFieldWord()

document.querySelectorAll('.target-char').addEventListener('click', (e)=>{
    console.log(e.target)
})