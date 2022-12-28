const confirmButton = document.getElementById("confirm-button");

const detailsSection = document.querySelector(".fill-details");
const confirmSection = document.querySelector(".complete-section");

const form = document.querySelector("form");
const nameOfHolder = document.getElementById("name");
const number = document.getElementById("numbers");
const monthDate = document.getElementById("month-date");
const yearDate = document.getElementById("year-date");
const cvcCard = document.getElementById("cvc-number");

const holderName = document.getElementById("holder-name");
const cardNumber = document.getElementById("card-num");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvcNumber = document.getElementById("cvc");

const expiryError = document.getElementById("date-expiry-error");
const numberError = document.getElementById("card-number-error");
const nameError = document.getElementById("name-error");
const cvcError = document.getElementById("cvc-error");

holderName.addEventListener("keyup", (e) => {
  const holderNameValue = holderName.value;
  let keyPress = e.key;
  // let keyLetters = keyPress.match(/^[A-Za-z]*$/);

  if (holderNameValue.length === 0) {
    nameError.innerHTML = "Can't be blank";
  }
  // else if (keyLetters) {
  //   nameOfHolder.innerHTML = holderNameValue;
  // }
  else {
    nameOfHolder.innerHTML = holderNameValue;
    // nameError.innerHTML = "Use letters only";
  }
});
cardNumber.addEventListener("keyup", (e) => {
  const cardNumberValue = cardNumber.value;
  let keyPress = e.key;
  let keyNumbers = keyPress.match(/^[0-9]*$/);
  if (cardNumberValue.length === 0) {
    numberError.innerHTML = "Can't be blank";
  } else if (keyNumbers) {
    number.innerHTML = cardNumberValue
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1")
      .trim();
  } else {
    numberError.innerHTML = "Wrong Format, numbers only!";
  }
});

cardNumber.addEventListener("input", (e) => {
  e.target.value = e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1")
    .trim();
});
month.addEventListener("keyup", (e) => {
  const monthValue = e.target.value;
  const monthValueNumbers = monthValue.match(/^[0-9]*$/);

  if (monthValueNumbers.length === 0) {
    expiryError.innerHTML = "Can't be blank";
  } else if (monthValueNumbers) {
    monthDate.innerHTML = monthValue;
  } else {
    expiryError.innerHTML = "Wrong format, numbers only!";
  }
});

year.addEventListener("keyup", (e) => {
  const yearValue = e.target.value;
  const yearValueNumbers = yearValue.match(/^[0-9]*$/);

  if (yearValueNumbers.length === 0) {
    expiryError.innerHTML = "Can't be blank";
  } else if (yearValueNumbers) {
    yearDate.innerHTML = yearValue;
  } else {
    expiryError.innerHTML = "Wrong format, numbers only";
  }
});
cvcNumber.addEventListener("keyup", (e) => {
  const cvcValue = e.target.value;
  const cvcValueNumbers = cvcValue.match(/^[0-9]*$/);

  if (cvcValueNumbers.length === 0) {
    cvcError.innerHTML = "Can't be blank";
  } else if (cvcValueNumbers) {
    cvcCard.innerHTML = cvcValue;
  } else {
    cvcError.innerHTML = "Wrong format, numbers only";
  }
});

confirmButton.addEventListener("click", () => {
  if (holderName.value.length <= 0) {
    nameError.innerHTML = "Please enter name";
  } else if (cardNumber.value.length <= 0) {
    numberError.innerHTML = "Please enter card number";
  } else if (month.value.length <= 0 || year.value.length <= 0) {
    expiryError.innerHTML = "Please enter card expiry date";
  } else if (cvcNumber.value.length <= 0) {
    cvcError.innerHTML = "Please enter your cvc";
  } else {
    detailsSection.classList.add("hidden");
    confirmSection.classList.remove("hidden");
  }
});
