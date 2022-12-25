const confirmButton = document.getElementById("confirm-button");

const detailsSection = document.querySelector(".fill-details");
const confirmSection = document.querySelector(".complete-section");

const form = document.querySelector("form");

const holderName = document.getElementById("holder-name");
const cardNumber = document.getElementById("card-num");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvcNumber = document.getElementById("cvc");

const nameOfHolder = document.getElementById("name");
function cardName(e) {
  nameOfHolder.innerText = e.target.value;
}

const number = document.getElementById("numbers");
function cardNumberInput(e) {
  number.innerText = format(e.target.value);
}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$&");
}

const monthDate = document.getElementById("month-date");
function cardMonth(e) {
  monthDate.innerText = e.target.value;
}

const yearDate = document.getElementById("year-date");
function cardYear(e) {
  yearDate.innerText = e.target.value;
}

const cvcCard = document.getElementById("cvc-number");
function cardCvc(e) {
  cvcCard.innerText = e.target.value;
}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$&");
}

holderName.addEventListener("keyup", cardName);
cardNumber.addEventListener("keyup", cardNumberInput);
month.addEventListener("keyup", cardMonth);
year.addEventListener("keyup", cardYear);
cvcNumber.addEventListener("keyup", cardCvc);

function submitDetails(e) {
  e.preventDefault();
  const numberError = document.getElementById("card-number-error");
  if (cardNumber.value.length > 0 && cardNumber.value.length < 16) {
    numberError.innerHTML = "Wrong Format";
  } else if ((cardNumber.value = "")) {
    numberError.innerHTML = "Can't be blank";
  } else {
    numberError.innerHTML = "";
  }
  const expiryError = document.getElementById("date-expiry-error");
  if (month.value && year.value == "") {
    expiryError.innerHTML = "Can't be blank";
  } else {
    expiryError.innerHTML = "";
  }
  const cvcError = document.getElementById("cvc-error");
  if (cvcNumber.value == "") {
    cvcError.innerHTML = "Can't be blank";
  } else {
    cvcError.innerHTML = "";
  }

  if (
    holderName.value &&
    cardNumber.value &&
    month.value &&
    year.value &&
    cvcNumber &&
    cardNumber.value.length == 16
  ) {
    confirmSection.classList.remove("hidden");
    detailsSection.classList.add("hidden");
  }
}

confirmButton.addEventListener("click", submitDetails);
