$(document).ready(function () {
  // 위로가기 스크롤바 구현
  const goTop = document.querySelector("#goTop");
  goTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  //footer 영역에 왔을 때 탑 버튼 없애기
  const footer = document.querySelector(".footer");
  const footerY = footer.offSetTop;
  const waypoint_footer = new Waypoint({
    element: document.querySelector(".footer"),
    handler: function (direction) {
      if (direction === "down") {
        goTop.classList.add("active-footer");
      } else {
        goTop.classList.remove("active-footer");
      }
    },
    offset: "95%",
  });
  const Waypoint_section = new Waypoint({
    element: document.querySelector("#section1"),
    handler: function (direction) {
      if (direction === "down") {
        goTop.classList.add("active");
      } else {
        goTop.classList.remove("active");
      }
    },
    offset: "80%",
  });
  // 스크롤 위치에서 배경 색상 변경을 처리하는 함수
  function handleScroll() {
    const menu = document.querySelector(".gotop");
    const scrollHeight = window.scrollY;

    // 스크롤 위치가 특정 높이 이상인 경우 배경 색상 변경
    if (scrollHeight > 2851) {
      // 원하는 높이로 변경
      menu.style.backgroundColor = "#4867CA"; // 변경할 배경 색상 설정
    } else {
      menu.style.backgroundColor = "#39c283"; // 초기 배경 색상 설정
    }
    if (scrollHeight > 5662) {
      menu.style.backgroundColor = "#000";
    }
  }

  // 스크롤 이벤트 리스너 등록
  window.addEventListener("scroll", handleScroll);
});
