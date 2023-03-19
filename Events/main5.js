/* 4. Event 캡처링 */
/**************************************/

//이벤트 캡처링
const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");
const anchorEl = document.querySelector("a");

window.addEventListener("click", (event) => {
  console.log("Window!");
});
document.body.addEventListener(
  "click",
  (event) => {
    console.log("Body!");
  },
  { capture: true }
  //이벤트가 버블링되서 올라올때, 버블링을 처리하기 전에, 해당하는 이벤트를 캡쳐해서,
  //만약 원래 버블링 되어야하는 이벤트가 먼저 처리되었다면 건너뛰고 버블링 된다.
  //해당하는 이벤트의 핸들러가 먼저 동작하도록 만들어준다.
);
parentEl.addEventListener(
  "click",
  (event) => {
    console.log("Parent!");
  },
  { capture: true }
  //처리 순서 : Body -> Parent
);
childEl.addEventListener("click", (event) => {
  console.log("Child!");
});
anchorEl.addEventListener("click", (event) => {
  console.log("Anchor!");
});

//Child 클릭시,
//실제 출력 결과 [{capture: true}} 없을 경우]
// Child!
// Parent!
// Body!
// Window!

//실제 출력 결과 [{capture: true}}가 body 3번째 인수로 있을 경우]
// Body!
// Child!
// Parent!
// Window!

//다음파트 -> index.html + main6.js
