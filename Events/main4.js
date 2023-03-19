/* 3. Event 버블링 */
/**************************************/

//이벤트 전파(버블) 방지
const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");
const anchorEl = document.querySelector("a");

window.addEventListener("click", (event) => {
  console.log("Window!");
});
document.body.addEventListener("click", (event) => {
  console.log("Body!");
});
parentEl.addEventListener("click", (event) => {
  console.log("Parent!");
  event.stopPropagation(); //버블링 정지
});
childEl.addEventListener("click", (event) => {
  console.log("Child!");
});
anchorEl.addEventListener("click", (event) => {
  console.log("Anchor!");
});

//실제 출력 결과 [stopPropagtion 없을 경우]
// Anchor!
// Child!
// Parent!
// Body!
// Window!

// a 태그를 클릭했다는 것은 , 그것을 포함하는 child를 클릭한것이며,
// child를 클릭했다는 것은 . 그것을 포함하는 parent를 클릭한것이며,
// parent를 클릭했다는 것은 . 그것을 포함하는 body를 클릭한것이며,
// body를 클릭했다는 것은 . 그것을 포함하는 window를 클릭한것이며,

// 이렇게 작은 범위에서 점점 더 넓게 이벤트가 발생하는것을
// 이벤트 버블링이라고 한다.

// 이벤트 버블링을 (전파) 되는것을 방지할 수 있는데,
// event.stopPropagtion()

//실제 출력 결과 [stopPropagtion가 parent에 있을 경우]
// Anchor!
// Child!
// Parent!

//다음파트 -> index.html + main5.js
