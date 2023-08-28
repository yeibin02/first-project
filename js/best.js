// 비주얼 슬라이드 기능
$(document).ready(function () {
  const swBest = new Swiper(".sw-best", {
    loop: true,
    navigation: {
      prevEl: ".sw-best-prev",
      nextEl: ".sw-best-next",
    },
  });
});
