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
};

const button = document.getElementById("get-number");
button.addEventListener("click", randomNumbers);
