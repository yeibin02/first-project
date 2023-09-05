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
});
