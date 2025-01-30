export default function showLetter(word,letter){
    for (let i = 0; i < word.length; i+=1){
        if(word[i] == letter.textContent){
            document.querySelector('.word').children[i].textContent = letter.textContent
        }
    }
    letter.style.color = "green";
}