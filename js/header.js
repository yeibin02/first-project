$(document).ready(function () {
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

  // 스크롤 했을때 헤더 사라졌다가 나왔다가하는 코드
  let prevScrollPos = window.pageYOffset;
  function handleScroll() {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos <= 0) {
      header.style.top = "0"; // 스크롤이 맨 위일 때 헤더 고정
    } else if (prevScrollPos > currentScrollPos) {
      header.style.top = "0"; // 스크롤을 올릴 때 헤더를 보이게 함
    } else {
      header.style.top = "-100px"; // 스크롤을 내릴 때 헤더를 숨김
    }
    prevScrollPos = currentScrollPos;
  }

  // 초기화할 때 한 번 호출하여 현재 스크롤 위치에 따라 헤더를 설정
  handleScroll();

  // 스크롤 이벤트 리스너를 등록하여 스크롤 시 헤더를 조절
  window.addEventListener("scroll", handleScroll);

  // 초기화할 때 한 번 호출하여 현재 스크롤 위치에 따라 헤더를 설정
  handleScroll();

  // 스크롤 이벤트 리스너를 등록하여 스크롤 시 헤더를 조절
  window.addEventListener("scroll", handleScroll);
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
        header.classList.remove("active"); // 이 부분을 수정하여 헤더가 스크롤을 올릴 때 숨지 않게 합니다.
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

  // 스크롤 했을 때 gnb 삭제
  const gnb = document.querySelector(".gnb"); // gnb 메뉴를 감싸는 요소 선택자
  // let prevScrollPos = window.pageYOffset; // 이전 스크롤 위치 초기화
  // dom (html 태그 로딩 완료 후 실행)
  // 각 섹션의 위치값(세로스크롤 위치)
  const sectionYpos = [960, 2851, 6662];

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
