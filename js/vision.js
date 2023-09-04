$(document).ready(function () {
  // vision-1

  // .vision-1-cont 요소 선택
  const vision1 = document.querySelector(".vision-1");
  // .vision-1-cont-1 요소 선택
  const vision1Cont1 = document.querySelector(".vision-1-cont-1");
  // .vision-1-cont-2 요소 선택
  const vision1Cont2 = document.querySelector(".vision-1-cont-2");

  // wheel 이벤트 핸들러 함수 정의
  function handleWheelEvent(event) {
    // event.deltaY를 사용하여 스크롤 방향과 양을 파악
    if (event.deltaY > 0) {
      // 아래로 스크롤할 때 .vision-1-cont-1을 숨김(display: none)과 .vision-1-cont-2를 표시(display: block)로 변경
      vision1Cont1.style.display = "none";
      vision1Cont2.style.display = "block";
    } else {
      // 위로 스크롤할 때 .vision-1-cont-1을 표시(display: block)와 .vision-1-cont-2를 숨김(display: none)로 변경
      vision1Cont1.style.display = "block";
      vision1Cont2.style.display = "none";
    }
  }

  // .vision-1-cont에 wheel 이벤트 핸들러 추가
  vision1.addEventListener("wheel", handleWheelEvent);
});
$(document).ready(function () {
  // 비전2 클릭시 지구 돌리기
    const vision2 = $(".vision-2");
    const earth = $("#vision2Earth");
    let ratio = 30;
    earth.css({
      transform: "rotate(" + ratio + "deg)",
    });
    const ratioStep = -120;
    vision2.click(function () {
      vision2Index++;
      if (vision2Index >= vision2contsTotal) {
        vision2Index = 0;
      }
      vision2conts.hide();
      vision2conts.eq(vision2Index).show();
      ratio += ratioStep;
      earth.css({
        transform: "rotate(" + ratio + "deg)",
      });
    });
  })

// $(document).ready(function () {
//   let rotationDegrees = 0; // 초기 회전 각도 설정

//   // wheel 이벤트 핸들러 함수 정의
//   function handleWheelEvent(event) {
//     // event.deltaY를 사용하여 스크롤 방향과 양을 파악
//     if (event.deltaY > 0) {
//       // 스크롤 이벤트가 발생할 때마다 120도씩 회전합니다.
//       rotationDegrees += 120;
//     } else {
//       // 스크롤 이벤트가 발생할 때마다 120도씩 회전합니다.
//       rotationDegrees -= 120;
//     }

//     // 회전 각도를 이미지 요소에 적용합니다.
//     const imageElement = document.getElementById("vision2Earth");
//     imageElement.style.transform = `rotate(${rotationDegrees}deg)`;
//   }

//   // .vision-2-cont 요소를 선택하고 wheel 이벤트 핸들러 추가
//   const vision2 = document.querySelector(".vision-2");
//   vision2.addEventListener("wheel", handleWheelEvent);
// });

$(document).ready(function () {
  // 지구 돌리기 텍스 타이틀 효과
  const vision2conttitles = $(".vision-2-cont-title > div");
  const vision2contsTotal = vision2conttitles.length;
  let vision2Index = 0;
  vision2conttitles.hide();
  vision2conttitles.eq(vision2Index).show();

  document.addEventListener("wheel", function showVision2Text() {
    vision2Index++;
    if (vision2Index >= vision2contsTotal) {
      vision2Index = 0;
    }
    vision2conttitles.hide();
    vision2conttitles.eq(vision2Index).show();
  });
});

$(document).ready(function () {
  // 지구 돌리기 텍스 효과
  const vision2conts = $(".vision-2-cont > div");
  const vision2contsTotal = vision2conts.length;
  let vision2Index = 0;
  vision2conts.hide();
  vision2conts.eq(vision2Index).show();

  document.addEventListener("wheel", function showVision2Text() {
    vision2Index++;
    if (vision2Index >= vision2contsTotal) {
      vision2Index = 0;
    }
    vision2conts.hide();
    vision2conts.eq(vision2Index).show();
  });
});
})
