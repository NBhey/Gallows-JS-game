export default function getRandomWord() {
  const arr = ["слово", "красивый", "наждачка", "голубь", "снеговик", "стройка","козырь","инвестиция"];
  const randomWord = Math.round(Math.random() * (arr.length - 1));
  return arr[randomWord];
}
