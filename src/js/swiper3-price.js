const slider3 = document.querySelector(".swiper3");

let mySwiper3;

function mobileSlider3() {
  if (window.innerWidth <= 767 && slider3.dataset.mob2 == "false") {
    mySwiper3 = new Swiper(slider3, {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: true,
      slideClass: "swiper-item3",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    slider3.dataset.mob2 = "true";
  }

  if (window.innerWidth > 767) {
    slider3.dataset.mob2 = "false";
    if (slider3.classList.contains("swiper-initialized")) {
      mySwiper3.destroy();
    }
  }
}

mobileSlider3();

window.addEventListener("resize", () => {
  mobileSlider3();
});
