// 스크롤이 되어질때 메뉴 포커스 유지하기
window.addEventListener("load", function () {
  // 활성화 될 메뉴 번호
  let navActiveIndex = 0;
  // 메뉴 태그 a
  const navAtags = $(".navi ul li a");
  //   $.each(navAtags, function (index, item) {
  //     $(this).click(function () {
  //       navAtags.removeClass("navi-active");
  //       $(this).addClass("navi-active");
  //     });
  //   });

  const sectionTags = $("section");

  let sectionTagsPos = [];
  function resetSectionYPos() {
    // 상단으로부터 각 section의 스크롤바의 Y축 높이값 모음
    $.each(sectionTags, function (index, item) {
      const yPos = $(item).offset().top;
      sectionTagsPos[index] = yPos;
    });
    //   임시
    sectionTagsPos.push(50000);
  }
  // 화면 리사이즈 위치값 파악
  $(window).resize(function () {
    resetSectionYPos();
  });

  function setFocusChange() {
    const scY = $(window).scrollTop();
    // 스크롤 된 경우의 세로 값이 어느 범위인가?
    // console.log("==================", scY);
    for (let i = 0; i < sectionTagsPos.length; i++) {
      if (scY < sectionTagsPos[i + 1] && scY >= sectionTagsPos[i]) {
        navActiveIndex = i;
        break;
      }
    }
    // 포커스 모두 지우고
    navAtags.removeClass("navi-active");
    navAtags.eq(navActiveIndex).addClass("navi-active");
  }
  // 스크롤을 하는 경우에 포커스 인덱스를 파악한다.
  $(window).scroll(function () {
    setFocusChange();
  });

  // 화면 새로고침시 위치값 파악
  resetSectionYPos();
  setFocusChange();
});
