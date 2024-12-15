export default function createCharPanel() {
  const charArr = [
    "а",
    "б",
    "в",
    "г",
    "д",
    "е",
    "ё",
    "ж",
    "з",
    "и",
    "й",
    "к",
    "л",
    "м",
    "н",
    "о",
    "п",
    "р",
    "с",
    "т",
    "у",
    "ф",
    "х",
    "ц",
    "ч",
    "ш",
    "щ",
    "ъ",
    "ы",
    "ь",
    "э",
    "ю",
    "я",
  ];
  console.log(document.querySelector(".panel__char-list"));
  console.log(document.querySelector(".panel__char-list").children);
  charArr.map((el) => {
    let elementList = document.createElement('li')
    elementList.innerText = el
    document.querySelector(".panel__char-list").appendChild(elementList)
  });
}