const confirmButton = document.getElementById("confirm-button");

const detailsSection = document.querySelector(".fill-details");
const confirmSection = document.querySelector(".complete-section");

confirmButton.addEventListener("click", () => {
  detailsSection.classList.add("hidden");
  confirmSection.style.display = "initial";
});
