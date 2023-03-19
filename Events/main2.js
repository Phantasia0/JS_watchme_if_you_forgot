/* 2. Event 객체 */
/**************************************/
//이벤트 객체는 대상에서 발생한 이벤트 정보를 담고 있다.

//event.target: 해당 이벤트가 실제로 발생한 요소
//event.currentTarget : 해당 이벤트가 등록된 요소
//클릭을 할때마다 그 해당하는 이벤트에 대한 정보가 event라는 매개변수로 들어가고,
//그것을 event 객체라고 말한다.
const parentEl = document.querySelector(".parent");
parentEl.addEventListener("click", (event) => {
  console.log(event.target, event.currentTarget);
  console.log(event);
});
parentEl.addEventListener("wheel", (event) => {
  console.log(event);
});

const inputEl = document.querySelector("input");
inputEl.addEventListener("keydown", (event) => {
  console.log(event.key);
});

//다음파트 -> index.html + main3.js
