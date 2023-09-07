// 현재 활성화된 섹션을 추적하는 변수를 선언합니다.
let activeSection = null;

// 각 섹션의 위치 정보를 저장할 객체를 생성합니다.
const sectionPositions = {};

// 각 섹션의 위치 정보를 계산하여 객체에 저장합니다.
function calculateSectionPositions() {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    const sectionId = section.id;
    const sectionTop = section.offsetTop;
    sectionPositions[sectionId] = sectionTop;
  });
}

// 스크롤 이벤트 리스너를 추가합니다.
window.addEventListener("scroll", function () {
  // 스크롤 위치를 가져옵니다.
  const scrollPosition = window.scrollY;

  // 각 섹션의 위치 정보를 가져옵니다.
  calculateSectionPositions();

  // 현재 스크롤 위치에 따라 어떤 섹션에 있는지 확인합니다.
  for (const sectionId in sectionPositions) {
    if (scrollPosition >= sectionPositions[sectionId]) {
      // 스크롤 위치가 해당 섹션의 위치를 넘었을 때,
      // sectionId 변수에 현재 섹션의 ID가 할당됩니다.
      if (activeSection !== sectionId) {
        // 활성화된 섹션이 변경되면
        // 이전 활성화된 섹션에서 .hover-text의 스타일을 변경합니다.
        if (activeSection) {
          document.getElementById(activeSection).classList.remove("active");
        }
        // 현재 활성화된 섹션으로 업데이트하고 스타일을 변경합니다.
        activeSection = sectionId;
        document.getElementById(activeSection).classList.add("active");
      }
      // 활성화된 섹션에서 .hover-text의 스타일을 변경합니다.
      document
        .getElementById(activeSection)
        .querySelector(".hover-text")
        .classList.add("active");
    }
  }
});
