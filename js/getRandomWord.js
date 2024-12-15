export default function getRandomWord() {
  const arr = ["слово", "красивый", "наждачка", "голубь", "снеговик", "стройка"];
  const randomWord = Math.round(0 + Math.random() * (arr.length - 1));
  console.log(randomWord)
  return arr[randomWord];
}
