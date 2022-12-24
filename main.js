const confirmButton = document.getElementById("confirm-button");

const detailsSection = document.querySelector(".fill-details");
const confirmSection = document.querySelector(".complete-section");

const holderName = document.getElementById("holder-name");
const cardNumber = document.getElementById("card-num");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvcNumber = document.getElementById("cvc");

confirmButton.addEventListener("submit", (e) => {
  e.preventDefault();

  detailsSection.classList.add("hidden");
  confirmSection.style.display = "initial";
  validation();
});

const err = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const succ = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validation = () => {
  const holderValue = holderName.value.trim();
  const cardValue = cardNumber.value.trim();
  const monthNumber = month.value.trim();
  const yearNumber = year.value.trim();
  const cvc = cvcNumber.value.trim();

  if (holderValue === "") {
    err(holderName, "CardHolder Name is required");
  } else {
    succ(holderName);
  }

  if (cardValue === "") {
    err(cardNumber, "Card number is required");
  } else if (cardValue.isInteger() == false) {
    err(cardNumber, "Wrong format,numbers only");
  } else if (cardValue.length != 16) {
    err(cardNumber, "Enter correct number");
  } else {
    succ(cardNumber);
  }

  if (monthNumber === "") {
    err(month, "Can't be blank");
  } else if (monthNumber.isInteger() == false) {
    err(month, "Wrong format,numbers only");
  } else if (month.length != 2) {
    err(month, "Enter correct number");
  } else {
    succ(month);
  }

  if (yearNumber === "") {
    err(year, "Can't be blank");
  } else if (yearNumber.isInteger() == false) {
    err(year, "Wrong format,numbers only");
  } else if (yearNumber.length != 2) {
    err(year, "Enter correct number");
  } else {
    succ(year);
  }

  if (cvc === "") {
    err(cvcNumber, "can't be blank");
  } else if (cvc.isInteger() == false) {
    err(cvc, "Wrong format,numbers only");
  } else if (cvc.length != 3) {
    err(cvcNumber, "Enter correct number");
  } else {
    succ(cvcNumber);
  }
};
