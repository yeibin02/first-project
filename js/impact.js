// script.js
$(document).ready(function () {
  const imageElement = document.querySelector("#impact-image");
  const textElement = document.querySelector("#impact-text");
  const contentElement = document.querySelector("#impact-card");

  let scrollLocked = false; // 스크롤 상태를 추적하는 변수
  let currentIndex = 0; // 현재 내용의 인덱스

  // 내용 데이터 (이미지와 텍스트)
  const contentData = [
    {
      image: "images/impact_icon1.png",
      text: `우리가 함께 순환한 <span class="text-bold">플라스틱 병뚜껑</span>의 개수는<span class="text-bold">5,360개!</span>`,
    },
    {
      image: "images/impact_icon2.png",
      text: `우리가 함께 순환한 <span class="text-bold">종이팩</span>의 개수는 <span class="text-bold">2,460개!</span>`,
    },
    {
      image: "images/impact_icon3.png",
      text: `우리가 함께 순환한 <span class="text-bold">종이봉투</span> 개수는 <span class="text-bold">860개!</span>`,
    },
    {
      image: "images/impact_icon4.png",
      text: `우리가 함께 순환한 <span class="text-bold">일회용 수저</span> 개수는 <span class="text-bold">2,640개!</span>`,
    },
    {
      image: "images/impact_icon5.png",
      text: `우리가 함께 순환한 <span class="text-bold">젤 아이스팩</span> 개수는 <span class="text-bold">465개!</span>`,
    },
    {
      image: "images/impact_icon6.png",
      text: `우리가 함께 순환한 <span class="text-bold">브리타필터</span> 개수는 <span class="text-bold">159개!</span>`,
    },
    {
      image: "images/impact_icon7.png",
      text: `우리가 함께 순환한 <span class="text-bold">유리병</span>의 개수는 <span class="text-bold">140개!</span>`,
    },
    {
      image: "images/impact_icon8.png",
      text: `<span class="title-text"> 총 순환한 자원의 개수 <span class="text-bold">12,084개!</span></span>`,
    },
    // 필요한 만큼 내용 항목 추가
  ];

  // 초기 이미지와 텍스트 설정
  const initialImage = contentData[currentIndex].image;
  imageElement.src = initialImage;
  contentElement.addEventListener("wheel", (event)  => {
    if (!scrollLocked) {
      scrollLocked = true;

      const deltaY = event.deltaY;

      if (deltaY > 0) {
        currentIndex = (currentIndex + 1) % contentData.length;
      } else {
        currentIndex =
          (currentIndex - 1 + contentData.length) % contentData.length;
      }

      // 이미지와 텍스트에 트랜지션 효과를 적용
      imageElement.style.opacity = 0;
      textElement.style.opacity = 0;
      textElement.style.transform = "translateY(0px)";

      // 스타일 변경 후 트랜지션 완료 후에 내용 업데이트
      setTimeout(() => {
        const newImage = contentData[currentIndex].image;
        imageElement.src = newImage; // 이미지 업데이트

        // 크기를 조절하려면 다음과 같이 스타일을 추가하십시오.
        if (newImage === "images/bottom_logo.png") {
          imageElement.style.width = "130px"; // 원하는 크기로 조절
          imageElement.style.height = "auto"; // 원하는 크기로 조절
        } else {
          // 다른 이미지의 크기를 원래 크기로 되돌리거나 다른 크기로 조절할 수 있습니다.
          imageElement.style.width = "170px"; // 원래 크기로 되돌리기
          imageElement.style.height = "auto"; // 원래 크기로 되돌리기
        }

        textElement.innerHTML = contentData[currentIndex].text;

        // 트랜지션 효과 재생
        requestAnimationFrame(() => {
          imageElement.style.opacity = 1;
          textElement.style.opacity = 1;
          textElement.style.transform = "translateY(0)";
        });

        // 스크롤 잠금 해제
        setTimeout(() => {
          scrollLocked = false;
        }, 200); // 필요에 따라 딜레이 시간 조정
      }, 500); // 트랜지션 시간에 맞게 설정 (이 경우 0.5초)
    }
    // 기본 스크롤 동작 방지
    event.preventDefault();
  });
});
