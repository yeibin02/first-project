$(document).ready(function () {
  // 비주얼 슬라이드
  // 1.슬라이드 (.swiper-slide)개수 만큼 li생성하기
  const swSlideCount = document.querySelectorAll(
    ".sw-visual .swiper-slide"
  ).length;
  // 2.li태그 출력 장소(ul태그 )저장
  const swSlidePgUl = document.querySelector(".sw-visual-pg-list");
  // 3.li에 html로 작성할 글자를 생성한다.
  let swVisualHtml = ``;
  for (let i = 0; i < swSlideCount; i++) {
    swVisualHtml = swVisualHtml + `<li>${i + 1}</li>`;
  }
  // 4.html을 추가한다
  swSlidePgUl.innerHTML = swVisualHtml;
  // 5.페이지네이션 관련(코딩으로 생성한 li태그 저장)
  const swVisualPgLi = document.querySelectorAll(".sw-visual-pg-list > li");
  // console.log(swVisualPgLi);

  var swiper = new Swiper(".sw-visual", {
    effect: "fade",
    // fadeEffect: {
    //   crossFade: true,
    // },
    loop: true,
    // 슬라이드의 모션 속도를 transition 맞춘다.
    speed: 1500,
    autoplay: {
      delay: 2500,
      // 사용자가 마우스 클릭 드래그로 이동하면
      // 아래 구문이 없으면 autoplya 가 해제되므로
      // 이것을 방지해 주기위한 처리
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
  });
  // swiper 가 최초 실행될때
  // 1번 li 의 흰색 라인이 늘어나는 모션을 실행
  swVisualPgLi[0].classList.add("active");
  // swiper가 바뀔때 마다 실행
  // 슬라이더가 바뀌는 상태를 찾아서
  // 우리가 적용하고자 하는 처리를 하고
  // swiper의 API를 참조해서 작성
  swiper.on("slideChange", function () {
    swVisualPgLi.forEach(function (item, index) {
      if (swiper.realIndex === index) {
        // realIndex는 진짜 html태그의 순서값
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
  // li태그를 클릭을 하면 처리하기
  swVisualPgLi.forEach(function (item, index) {
    item.addEventListener("click", function () {
      swiper.slideToLoop(index, 500, false);
    });
  });
});
