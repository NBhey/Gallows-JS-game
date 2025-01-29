export default function checkCharInWord(word,letter){
    for (let i = 0; i < word.length; i+=1){
        if(word[i] == letter.textContent){
            return true
        }
    }
    return false
}