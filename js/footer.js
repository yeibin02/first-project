$(document).ready(function () {
  // 각 섹션의 위치값(세로스크롤 위치)
  const sectionYpos = [960, 2880, 6720];
  // 저장한다. 재활용하기 위해서
  const footerLis = $(".footer a");
  // li 에 a 태그를 클릭을 해서 스크롤을 이동
  const footerLisA = $(".footer a");
  // 클릭 기능 구현
  $.each(footerLisA, function (index, item) {
    $(this).click(function (event) {
      // a 태그의 href 막기
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: sectionYpos[index],
        },
        "slow"
      );
    });
  });
});