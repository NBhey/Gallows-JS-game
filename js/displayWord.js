export default function displayWord(word) {
  const element = document.querySelector(".word");
  for (let i = 0; i < word.length; i += 1) {
    let _elementList = document.createElement("li");
    _elementList.textContent = "_";
    element.appendChild(_elementList);
  }
}
