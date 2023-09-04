// 비주얼 슬라이드 기능
$(document).ready(function () {
const swVisual = new Swiper(".sw-visual", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
})