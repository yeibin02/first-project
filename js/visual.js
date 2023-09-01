// 비주얼 슬라이드 기능
$(document).ready(function () {
const swVisual = new Swiper(".sw-visual", {
  loop: true,
  speed: 1000,
  navigation: {
    prevEl: ".sw-visual-prev",
    nextEl: ".sw-visual-next",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
})