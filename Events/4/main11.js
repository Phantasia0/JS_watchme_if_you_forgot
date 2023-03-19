/* 10. Focus && Form Events */
/**************************************/
//focus      | 요소가 포커스를 얻었을 때
//blur       | 요소가 포커스를 잃었을 때
//input      | 값이 변경되었을 때
//change     | 상태가 변경되었을 때
//submit     | 제출 버튼을 선택했을 때
//reset      | 리셋 버튼을 선택했을 때

const formEl = document.querySelector("form");
const inputEls = document.querySelectorAll("input");

inputEls.forEach((el) => {
  el.addEventListener("focus", () => {
    formEl.classList.add("active");
  });
  el.addEventListener("blur", () => {
    formEl.classList.remove("active");
  });
  // el.addEventListener("input", (event) => {
  //   console.log(event.target.value);
  // });
  el.addEventListener("change", (event) => {
    console.log(event.target.value);
  }); //Tab이나 Enter를 눌러서 상태가 바뀌었을때 이벤트 발생
});

//button type="submit" 버튼이 눌리면 submit 이벤트 발생
//대표적으로 서버로 데이터 전송할 때 많이 쓰인다.
formEl.addEventListener("submit", (event) => {
  //form 요소에서 submit 이벤트가 발생하면, 페이지를 새로고침하는 것이 기본동작이다.
  event.preventDefault(); //새로고침 방지를 위함
  const data = {
    id: event.target[0].value,
    pw: event.target[1].value,
  };
  console.log("제출완료", data);
});

//button type="reset" 버튼이 눌리면 reset 이벤트 발생
formEl.addEventListener("reset", (event) => {
  console.log("리셋!");
});

//form 요소를 사용하면,이벤트를 이용하여 데이터들을 편리하게 제어할 수 있다.

//폴더 5 + main12.js 이동
