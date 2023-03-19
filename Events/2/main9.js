/* 8. Mouse & Pointer Events */
/**************************************/
//click        | 클릭했을 때
//dblclick     | 더블 클릭했을 때
//mousedown    | 버튼을 누를 때
//mouseup      | 버튼을 땔 때
//mouseenter   | 포인터가 요소 위로 들어갈 때
//mouseleave   | 마우스가 요소 밖으로 나올 때
//mousemove    | 포인터가 움직일 때
//contextmenu  | 우클릭했을 때
//wheel        | 휠 버튼이 회전할 때

const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");

// childEl.addEventListener("click", () => {
//   childEl.classList.toggle("active");
// });

// childEl.addEventListener("dblclick", () => {
//   childEl.classList.toggle("active");
// });

//
childEl.addEventListener("mousedown", () => {
  childEl.classList.add("active");
});
childEl.addEventListener("mouseup", () => {
  childEl.classList.remove("active");
});
//

//
childEl.addEventListener("mouseenter", () => {
  childEl.classList.add("active");
});
childEl.addEventListener("mouseleave", () => {
  childEl.classList.remove("active");
});
//

// childEl.addEventListener("mousemove", (event) => {
//   console.log(event.offsetX, event.offsetY);
// });

childEl.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  console.log(event);
});

// parentEl.addEventListener("wheel", (event) => {
//   console.log(event);
// });

window.addEventListener("wheel", (event) => {
  console.log(event);
});

//폴더 3 + main10.js
