/* 3. Event 기본 동작 방지 */
/**************************************/
//event.preventDefault()

//마우스 휠의 스크롤 동작 방지!
const parentEl = document.querySelector(".parent");
parentEl.addEventListener("wheel", (event) => {
  event.preventDefault(); //콘솔 출력은 되지만, 실제 휠은 작동하지않는다.
  console.log("Wheel!");
});

//<a> 태그에서 페이지 이동 방지!
const anchorEl = document.querySelector("a");
anchorEl.addEventListener("click", (event) => {
  event.preventDefault(); //콘솔 출력은 되지만, 실제 페이지 이동은 안된다.
  console.log("Click!");
});

//프로젝트에서 원하는 결과와 실제 기본동작이 차이가 있을때 쓴다.

//다음파트 -> index.html + main4.js
