$(document).ready(function () {
  // 페이지 내 섹션 요소들을 가져옵니다.
  const sections = document.querySelectorAll("section");

  // 네비게이션 링크들을 가져옵니다.
  const navLinks = document.querySelectorAll("nav a");

  // 네비게이션 링크를 클릭할 때 스크롤링 이벤트를 추가합니다.
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1); // # 제거
      const targetSection = document.getElementById(targetId);
      scrollToSection(targetSection);
    });
  });

  // 스크롤링 함수
  function scrollToSection(section) {
    section.scrollIntoView({
      behavior: "smooth", // 부드러운 스크롤 효과
    });
  }
});
