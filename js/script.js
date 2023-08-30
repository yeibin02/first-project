// $window.onload = function () {
// // data.json을 로딩
// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function (event) {
//     const req = event.target;
//     if (req.readyState === XMLHttpRequest.DONE) {
//     const str = req.response;
//     // 글자로 온 테이터를 객체로 변환
//     // 글자가 json 규칙대로 만들어지 문자열이다.
//     // 그러므로 json글자를 객체로 변환해서 활용한다.
//     let obj = JSON.parse(str);
//         }
//     };
// };
// // dom (html 태그 로딩 완료 후 실행)
$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
  });
});
// // 멀티미디어 리소스 로딩 완료 후 실행
// window.onload = function(){}
