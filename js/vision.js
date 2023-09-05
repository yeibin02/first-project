// vision-1
$(document).ready(function () {
  let vision1button = $(".vision1contButton");
  const vision1cont1 = $(".vision-1-cont-1");
  const vision1cont2 = $(".vision-1-cont-2");

  $(".vision1contButton").click(function () {
    vision1cont1.css({
      display: "none",
    })
    vision1cont2.css({
      top : "80px",
      opacity: "1",
      transition: "all 2s",
    });
  });
});

// vision-2

$(document).ready(function () {
  let rotationDegree = 30; // 초기 회전 각도

  // 회전 함수
  function rotateImage(degrees) {
    $("#vision2Earth").css({
      transform: "rotate(" + degrees + "deg)",
      transition: "transform 0.5s ease",
    });
  }

  // 버튼 클릭 이벤트 처리
  $(".vision2click").click(function () {
    rotationDegree += 120; // 회전 각도를 120도씩 증가
    rotateImage(rotationDegree); // 이미지 회전
  });
});

$(document).ready(function () {
  // 지구 돌리기 텍스 효과
  const vision2conts = $(".vision-2-cont > div");
  const vision2contsTotal = vision2conts.length;
  let vision2Index = 0;
  vision2conts.hide();
  vision2conts.eq(vision2Index).show();

  document.addEventListener("click", function showVision2Text() {
    vision2Index++;
    if (vision2Index >= vision2contsTotal) {
      vision2Index = 0;
    }
    vision2conts.hide();
    vision2conts.eq(vision2Index).show();
  });
});
