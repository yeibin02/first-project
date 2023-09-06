// 비주얼 슬라이드 기능
$(document).ready(function () {
const swVisual = new Swiper(".sw-visual", {
  loop: true,
  speed: 1000,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
});
  // 1.슬라이드 (.swiper-slide)개수 만큼 li생성하기
  const swSlideCount = document.querySelectorAll(
    ".sw-visual .swiper-slide"
  ).length;
  // 2.li태그 출력 장소(ul태그 )저장
  const swSlidePgUl = document.querySelector(".sw-visual-pg-list");
  //3.li에 html로 작성할 글자를 생성한다.
  let swVisualHtml = ``;
  for (let i = 0; i < swSlideCount; i++) {
    swVisualHtml = swVisualHtml + `<li>${i + 1}</li>`;
  }
});