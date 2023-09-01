// $window.onload = function () {
// // data.json을 로딩
// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function (event) {
//     const req = event.target;
//     if (req.readyState === XMLHttpRequest.DONE) {
//     const str = req.response;
//     // 글자로 온 테이터를 객체로 변환
//     // 글자가 json 규칙대로 만들어지 문자열이다.
//     // 그러므로 json글자를 객체로 변환해서 활용한다.
//     let obj = JSON.parse(str);
//         }
//     };
// };
// // dom (html 태그 로딩 완료 후 실행)
$(document).ready(function () {
  // 지구 돌리기
  const visionImg = $(".vision-2 img");
  // 지구 돌리기 텍스 효과
  const vision2Interval = 5000; // 1000 은 1초, 1s
  const vision2conts = $(".vision-2-cont > div");
  const vision2contsTotal = vision2conts.length;
  let vision2Index = 0;
  vision2conts.eq(vision2Index).show();

  function showVision2Text() {
    vision2Index++;
    if (vision2Index >= vision2contsTotal) {
      vision2Index = 0;
    }
    vision2conts.hide();
    vision2conts.eq(vision2Index).show();
  }

  let vision2Timer;

  // 마우스 휠 이동(PC 버전)

  // 1. section 을 저장한다.
  let section = $(".wrap > .section");
  // 2. section 이동 속도
  let sectionSpeed = 500;
  // 3. section offset().top Y좌표값(px);
  let sectionPos = [];
  // 4. 화면에 보여지고 있는 번호
  let sectionIndex = 0;
  // 5. 총화면의 개수
  let sectionTotal = section.length;
  // 6. 연속 휠 이벤트 막기(true: 모션중, false: 모션완료)
  let scrollIng = false;
  // 화면의 사이즈가 변하면 100vh 가 달라진다.
  // 화면의 사이즈가 변하면 sectionPos 도 달라져야 한다.
  // sectionPos 는 화면의 각 이동 높이값 px 를 담아둔 것이다.
  function resetSection() {
    // sectionPos 값 넣기
    $.each(section, function (index, item) {
      // 웹브라우저 상단에서 얼마나 떨어져 있는가?
      let tempY = $(this).offset().top;
      sectionPos[index] = tempY;
    });
    // console.log("웹브라우저의 사이즈가 변해요 체크합니다. ", sectionPos);
  }
  // 한번은 화면을 셋팅한다.
  resetSection();

  $(window).resize(function () {
    // 화면의 각 높이값을 갱신하였다.
    resetSection();
    // 화면의 위치를 맞춘다.
    $("html").scrollTop(sectionPos[sectionIndex]);
  });

  // 마우스 휠 이벤트 체크
  $(window).bind("mousewheel DOMMouseScroll", function (event) {
    let distance = event.originalEvent.wheelDelta;
    if (distance == null) {
      distance = event.originalEvent.detail * -1;
    }
    // console.log(distance);
    // 마우스를 휠을 돌린다.
    // 만약 distance값이 - 나오면 스크롤바가 아래로 내려가는 것이다.
    // 만약 distance값이 + 나오면 스크롤바가 위로 올라가는 것이다.

    // 휠을 이용해서 화면이동을 하지않겠다.
    if (scrollIng == true) {
      return;
    }

    scrollIng = true;
    // console.log("마우스가 휠 되요~~~ 하고 싶은 일 해요.");

    if (distance < 0) {
      sectionIndex++;
      if (sectionIndex >= sectionTotal) {
        sectionIndex = sectionTotal - 1;
      }
    } else {
      sectionIndex--;
      if (sectionIndex < 0) {
        sectionIndex = 0;
      }
    }

    goSlideHome(sectionPos[sectionIndex]);
    // gsap.to($("html"), 0.5, {
    //   scrollTo: sectionPos[sectionIndex],
    //   onComplete: function () {
    //     scrollIng = false;
    //   },
    // });
  });

  // 화면을 이동하는 함수
  function goSlideHome(_num) {
    // 화면을 이동시킨다.
    $("html")
      .stop()
      .animate(
        {
          scrollTop: _num,
        },
        sectionSpeed,
        function () {
          // 애니메이션이 완료되었다.
          // 다시 스크롤 이벤트를 받겠다.
          scrollIng = false;
          // 지구본 돌리기
          if (sectionIndex === 2) {
            visionImg.addClass("img-active");
            vision2Index = 0;
            vision2conts.hide();
            vision2conts.eq(vision2Index).show();            
            clearInterval(vision2Timer);
            vision2Timer = setInterval(showVision2Text, vision2Interval);
          } else {
            visionImg.removeClass("img-active");
            vision2Index = 0;
            clearInterval(vision2Timer);
          }
        }
      );
  }
  // 최초 1번은 즉, 새로고침 등등의 작업시
  goSlideHome(0);
});
// // 멀티미디어 리소스 로딩 완료 후 실행
// window.onload = function(){}
