export default function showLetter(word, letter) {
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] == letter.textContent) {
      document.querySelector(".word").children[i].textContent =
        letter.textContent;
    }
  }
  letter.style.color = "green";

  if (word == document.querySelector(".word").textContent.trim()) {
    setTimeout(() => {
      if (confirm("С победой,начать новую игру?")) {
        location.reload();
      }
    }, 100);
  }
}
