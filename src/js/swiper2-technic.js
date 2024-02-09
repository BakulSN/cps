const slider2 = document.querySelector(".swiper2");

let mySwiper2;

function mobileSlider2() {
  if (window.innerWidth <= 767 && slider2.dataset.mob == "false") {
    mySwiper2 = new Swiper(slider2, {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: true,
      slideClass: "swiper-item2",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    slider2.dataset.mob = "true";
  }

  if (window.innerWidth > 767) {
    slider2.dataset.mob = "false";
    if (slider2.classList.contains("swiper-initialized")) {
      mySwiper2.destroy();
    }
  }
}

mobileSlider2();

window.addEventListener("resize", () => {
  mobileSlider2();
});
