export default function createCharPanel() {
 const charArr = [
  "машина",
  "карандаш",
  "программа",
  "телефон",
  "самолет",
  "космос",
  "огурец",
  "дерево",
  "компьютер",
  "интернет",
  "музыка",
  "картина",
  "путешествие",
  "библиотека",
  "аквариум",
  "шоколад",
  "весна",
  "дождь",
  "зеркало",
  "клавиатура",
  "фонарь",
  "город",
  "река",
  "звезда",
  "часы",
  "лампа",
  "песок",
  "облако",
  "книга",
  "театр",
  "магазин",
  "планета",
  "велосипед",
  "праздник",
  "корабль"
];

  charArr.map((el) => {
    let elementList = document.createElement('li')
    elementList.innerHTML = `<li class='target-char'>${el}</li>`
    document.querySelector(".panel__char-list").appendChild(elementList)
  });
}
