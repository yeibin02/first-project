window.onload = function () {
  function onClick() {
    document.querySelector("#modal .modal-window").style.display = "block";
    document.querySelector(".bg").style.display = "block";
  }

  function offClick() {
    document.querySelector("#modal .modal-window").style.display = "none";
    document.querySelector(".bg").style.display = "none";
  }

  document.querySelector("#openBtn").addEventListener("click", onClick);
  document.querySelector(".close-area").addEventListener("click", offClick);

  const complete = document.getElementById("complete");
  const cancel = document.getElementById("cancel");

  complete.addEventListener("click", function () {
    if (validateInput()) {
      alert("참여해주셔서 감사합니다!");
      offClick();
    }
  });

  cancel.addEventListener("click", function () {
    offClick();
  });

  function validateInput() {
    const idInput = document.getElementById("user-id").value;
    const emailInput = document.getElementById("email").value;

    if (!idInput || !emailInput) {
      alert("아이디와 이메일을 입력해주세요.");
      return false;
    }

    // Email validation using a regular expression
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(emailInput)) {
      alert("올바른 이메일 주소를 입력해주세요.");
      return false;
    }

    return true;
  }
};