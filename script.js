const numbers = 90;

const createdivs = function () {
  for (let i = 1; i <= numbers; i++) {
    const table = document.getElementById("maintable");

    const divs = document.createElement("div");

    divs.innerText = i;

    table.appendChild(divs);
  }
};
createdivs();

const createcards = function () {
  for (let i = 1; i <= 20; i++) {
    const cardSections = document.getElementById("card-sections");

    const cards = document.createElement("div");
    cards.innerText = Math.floor(Math.random() * 90) + 1;

    cardSections.appendChild(cards);
    form.remove();
    cardSections.style.display = "inline-block";
  }
};

const allNumbers = [];

const randomNumbers = function () {
  let random;

  do {
    random = Math.floor(Math.random() * 91) + 1;
  } while (allNumbers.includes(random));
  allNumbers.push(random);
  const extractedNumber = document.querySelectorAll("#maintable div");

  for (let i = 0; i < extractedNumber.length; i++) {
    const numberOut = parseInt(extractedNumber[i].innerText);

    const numbers = document.getElementById("numbers");
    if (random === numberOut) {
      extractedNumber[i].classList.add("colorBackg");
      numbers.innerText = random;
    }
  }

  const cardsNumbers = document.querySelectorAll("#card-sections div");
  for (let x = 0; x < cardsNumbers.length; x++) {
    const numbersOut2 = parseInt(cardsNumbers[x].innerText);
    if (random === numbersOut2) {
      cardsNumbers[x].classList.add("colorBackg");
    }
  }
};

const form = document.getElementById("form");
form.addEventListener("submit", createcards);

const input = document.getElementById("input");
console.log(input.value);

const button = document.getElementById("get-number");
button.addEventListener("click", randomNumbers);
