const openPopupButton = document.querySelectorAll("[data-modal-target]");
const closePopupButton = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const clearButton = document.querySelectorAll("[data-clear-target]");

openPopupButton.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.modalTarget);
    openPopup(popup);
  });
});

overlay.addEventListener("click", () => {
  const popups = document.querySelectorAll(".popup.active");
  popups.forEach((popup) => {
    closePopup(popup);
  });
});

closePopupButton.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closePopup(popup);
  });
});

function openPopup(popup) {
  if (popup == null) return;
  popup.classList.add("active");
  overlay.classList.add("active");
}

function closePopup(popup) {
  if (popup == null) return;
  popup.classList.remove("active");
  overlay.classList.remove("active");
}

clearButton.forEach((button) => {
  button.addEventListener("click", () => {
    const clearup = document.querySelector(button.dataset.modalTarget);
    clickCounter(clearup);
  });
});

function clickCounter() {
  if (localStorage.clickCount < 4) {
    clearBtn.style.display = "none";
  } else {
    clearBtn.style.display = "block";
  }
  if (localStorage.clickCount) {
    localStorage.clickCount = Number(localStorage.clickCount) + 1;
    localStorage.clickCount;
  } else {
    localStorage.clickCount = 0;
  }
  document.getElementById("counter").innerHTML = localStorage.clickCount;
}

function clearAll(clearup) {
  if ((clearBtn.style.display = "block")) {
    closePopup(popup);
    localStorage.clear();
  }
}
