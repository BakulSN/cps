const buttonOpenFeedback = document.querySelectorAll(".feedback-button");
const modalFeedBack = document.querySelector(".modal__feedback");
const buttonCloseFeedback = document.querySelector(".item-close_feedback");
const buttonOpenCallback = document.querySelectorAll(".callback-button");
const modalCallback = document.querySelector(".modal__callback");
const buttonCloseCallback = document.querySelector(".item-close_callback");
const buttonBurger = document.querySelector(".burger-button");
const burger = document.querySelector(".aside-menu");
const buttonCloseBurger = document.querySelector(".item-close-burger");
const body = document.querySelector("body");
const burgerShadow = document.querySelector(".burger-shadow");

buttonBurger.onclick = function () {
  burger.classList.add("modal__left-open");
  body.classList.add("lock");
  burgerShadow.classList.add("blure");
};

buttonCloseBurger.onclick = function () {
  burger.classList.remove("modal__left-open");
  body.classList.remove("lock");
  burgerShadow.classList.remove("blure");
};

buttonOpenFeedback.forEach((button) => {
  button.onclick = function () {
    if (modalCallback.classList.contains("modal__right-open")) {
      modalCallback.classList.remove("modal__right-open");
    }
    modalFeedBack.classList.add("modal__right-open");
    body.classList.add("lock");
    burgerShadow.classList.add("right-modal__blure");
    if (!burger.classList.contains("modal__left-open")) {
      burgerShadow.classList.add("blure");
    }
  };
});

buttonCloseFeedback.onclick = function () {
  modalFeedBack.classList.remove("modal__right-open");
  burgerShadow.classList.remove("right-modal__blure");
  if (!burger.classList.contains("modal__left-open")) {
    burgerShadow.classList.remove("blure");
    body.classList.remove("lock");
  }
};

buttonOpenCallback.forEach((button) => {
  button.onclick = function () {
    if (modalFeedBack.classList.contains("modal__right-open")) {
      modalFeedBack.classList.remove("modal__right-open");
    }
    modalCallback.classList.add("modal__right-open");
    body.classList.add("lock");
    burgerShadow.classList.add("right-modal__blure");
    if (!burger.classList.contains("modal__left-open")) {
      burgerShadow.classList.add("blure");
    }
  };
});

buttonCloseCallback.onclick = function () {
  modalCallback.classList.remove("modal__right-open");
  burgerShadow.classList.remove("right-modal__blure");
  if (!burger.classList.contains("modal__left-open")) {
    burgerShadow.classList.remove("blure");
    body.classList.remove("lock");
  }
};

burgerShadow.onclick = function () {
  if (
    (modalCallback.classList.contains("modal__right-open") ||
      modalFeedBack.classList.contains("modal__right-open")) &&
    burger.classList.contains("modal__left-open")
  ) {
    modalCallback.classList.remove("modal__right-open");
    modalFeedBack.classList.remove("modal__right-open");
    burgerShadow.classList.remove("right-modal__blure");
  } else if (
    (!modalCallback.classList.contains("modal__right-open") ||
      !modalFeedBack.classList.contains("modal__right-open")) &&
    burger.classList.contains("modal__left-open")
  ) {
    burger.classList.remove("modal__left-open");
    body.classList.remove("lock");
    burgerShadow.classList.remove("blure");
  } else if (
    (modalCallback.classList.contains("modal__right-open") ||
      modalFeedBack.classList.contains("modal__right-open")) &&
    !burger.classList.contains("modal__left-open")
  ) {
    modalCallback.classList.remove("modal__right-open");
    modalFeedBack.classList.remove("modal__right-open");
    burgerShadow.classList.remove("right-modal__blure");
    body.classList.remove("lock");
    burgerShadow.classList.remove("blure");
  }
};
