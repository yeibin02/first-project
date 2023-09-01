window.addEventListener("load", function () {
  // 상단 스크롤 기능
  const header = document.querySelector(".header");
  const mbt = document.querySelector(".mbt");
  let scy = 0;
  // 1.스크롤바의 픽셀 위치값을 파악해서
  scy = window.document.documentElement.scrollTop;
  // 2.class적용
  if (scy > 0) {
    header.classList.add("active");
    mbt.classList.add("active");
  }
  window.addEventListener("scroll", function () {
    scy = this.document.documentElement.scrollTop;
    if (scy > 0) {
      header.classList.add("active");
      mbt.classList.add("active");
    } else {
      const state = navMb.classList.contains("active");
      if (state) {
        // 만약에 모바일 메뉴가 펼쳐진 상태라면
        header.classList.add("active");
        mbt.classList.add("active");
      } else {
        // 그렇지 않다면 원래대로 처리하고..
        header.classList.remove("active");
        mbt.classList.remove("active");
      }
    }
  });


  
  // 모바일 메뉴 클릭 처리
  const htmlRoot = document.querySelector("html");
  const navMb = document.querySelector(".nav-mb");
  mbt.addEventListener("click", function () {
    // 현재 ani클래스가 있는지 없는지 파악
    const state = this.classList.contains("ani");
    if (state) {
      this.classList.remove("ani");
      // 윈도우에 스크롤바가 나타납니다.
      htmlRoot.classList.remove("active");
      // 모바일 메뉴 숨기기
      navMb.classList.remove("active");
      if (scy > 0) {
        header.classList.add("active");
        mbt.classList.add("active");
      } else {
        header.classList.remove("active");
        mbt.classList.remove("active");
      }
    } else {
      this.classList.add("ani");
      htmlRoot.classList.add("active");
      navMb.classList.add("active");
      header.classList.add("active");
      mbt.classList.add("active");
    }
  });



  // 반응형 처리
  let winW = window.innerWidth;
  window.addEventListener("resize", function () {
    // 웹브라우저 안쪽 너비
    winW = window.innerWidth;
    // mobile ===> pc 전환
    if (winW > 1024) {
      mbt.classList.remove("ani");
      htmlRoot.classList.remove("active");
      navMb.classList.remove("active");
      if (scy > 0) {
        // 스크롤이 된 상태에서 화면 리사이징..
        header.classList.add("active");
        mbt.classList.add("active");
      } else {
        // 스크롤 안됨. 화면 리사이징..
        header.classList.remove("active");
        mbt.classList.remove("active");
      }
    }
  });



  // 선택자로 로고와 스크롤 위치를 가져옵니다.
  const logo = document.querySelector(".logo");
  const scrollPosition = 200; // 로고가 이동할 스크롤 위치

  // 스크롤 이벤트 리스너를 추가합니다.
  window.addEventListener("scroll", () => {
    // 현재 스크롤 위치를 가져옵니다.
    const currentScroll = window.scrollY;
    // 스크롤 위치가 지정한 위치보다 크거나 같을 때 로고 위치를 변경합니다.
    if (currentScroll >= scrollPosition) {
      logo.classList.add("logo-scrolled"); // CSS 클래스 추가
    } else {
      logo.classList.remove("logo-scrolled"); // CSS 클래스 제거
    }
  });



  // 스크롤 했을 때 gnb 삭제
  const gnb = document.querySelector(".gnb"); // gnb 메뉴를 감싸는 요소 선택자
  // let prevScrollPos = window.pageYOffset; // 이전 스크롤 위치 초기화
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset; // 현재 스크롤 위치
    if (scrollTop === 0) {
      gnb.style.transform = 'translateY(0)';
    } else {
      gnb.style.transform = 'translateY(-100%)'; // 스크롤 내릴 때 gnb 숨기기
    }
    prevScrollPos = currentScrollPos; // 이전 스크롤 위치 업데이트
  });

});



// dom (html 태그 로딩 완료 후 실행)
$(document).ready(function () {
  // 각 섹션의 위치값(세로스크롤 위치)
  const sectionYpos = [960, 1920, 7680];

  // 클래스 nav 의 li 를 찾아라
  // 저장한다. 재활용하기 위해서
  const navLis = $(".nav ul li");

  // li 에 a 태그를 클릭을 해서 스크롤을 이동
  const navLisA = $(".nav ul li a");
  // 클릭 기능 구현
  $.each(navLisA, function (index, item) {
    // item 은 a 태그를 말합니다.
    // item 을 클릭을 할 겁니다.
    // item 은 html 태그 (jQuery 용도)
    $(this).click(function (event) {
      // a 태그의 href 막기
      event.preventDefault();
      // li 의 모든 클래스 제거
      // navLis.removeClass("focus-active");
      // 클릭된 li 에 focus-active 추가하기
      // navLis.eq(index).addClass("focus-active");
      // 2. 클릭하면 스크롤바가 움직인다.
      $("html, body").animate(
        {
          scrollTop: sectionYpos[index],
        },
        "slow"
      );
    });
  });
});
