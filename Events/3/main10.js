/* 9. Keyboard Events */
/**************************************/
//keydown      | 키를 누를 때
//keyup        | 키를 땔 때

const inputEl = document.querySelector("input");

// inputEl.addEventListener("keydown", (event) => {
//   console.log(event.key);
// });

// inputEl.addEventListener("keyup", (event) => {
//   console.log(event.key);
// });

//한글과 같은 언어, 키보드 이벤트와 같이 처리해야할때,
//event.isComposing 사용
inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.isComposing) {
    //console.log(event.isComposing);
    console.log(event.target.value);
  }
});

//폴더 4 + main11.js 이동
