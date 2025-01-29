export default function createFieldWord(numOfchar){
    let fieldWord = document.querySelector('.word')
    let _element = document.createElement('li');
    for (let i = 0; i <= numOfchar; i += 1){
        fieldWord.append(_element)
    }
}