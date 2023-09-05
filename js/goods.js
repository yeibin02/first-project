$(document).ready(function () {
  const pTag1 = document.querySelector(".first-parallel");
  const pTag2 = document.querySelector(".second-parallel");

  // 텍스트 배열 정의
  const textArr1 =
    "NEWJEANS COLLABO NEWJEANS COLLABO NEWJEANS COLLABO NEWJEANS COLLABO".split(
      " "
    );
  const textArr2 =
    "NEWJEANS COLLABO NEWJEANS COLLABO NEWJEANS COLLABO NEWJEANS COLLABO".split(
      " "
    );

  function initTexts(element, textArray) {
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
      element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`;
    }
  }

  initTexts(pTag1, textArr1);
  initTexts(pTag2, textArr2);

  let count1 = 0;
  let count2 = 0;

  function marqueeText(count, element, direction) {
    // 텍스트가 화면을 벗어나면 초기 위치로 이동
    if (count > element.scrollWidth / 2) {
      element.style.transform = `translateX(0)`;
      count = 0;
    }
    element.style.transform = `translateX(${direction * count}px)`;

    return count;
  }

  function animate() {
    // 첫 번째 위치 이동 효과 (360px 이하)
    if (window.innerWidth <= 360) {
      count1 += 1; // 속도를 느리게
    } else {
      count1 += 2; // 기본 속도
    }
    // 두 번째 위치 이동 효과 (360px 이하)
    if (window.innerWidth <= 360) {
      count2 += 1; // 속도를 느리게
    } else {
      count2 += 2; // 기본 속도
    }
    
    // 첫 번째 위치 이동 효과 애니메이션
    count1 = marqueeText(count1, pTag1, -1);

    // 두 번째 위치 이동 효과 애니메이션
    count2 = marqueeText(count2, pTag2, -1);

    // 애니메이션 반복
    window.requestAnimationFrame(animate);
  }

  animate();
});
