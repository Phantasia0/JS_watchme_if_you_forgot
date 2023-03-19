//Events

/* 1. EventListener의 종류 */
/**************************************/

//.addEventListener()
//대상에 이벤트 청취(Listen)을 등록한다.
//대상에 지정한 이벤트가 발생했을 때 지정한 함수(Handler)가 호출된다.
const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");

parentEl.addEventListener("click", () => {
  console.log("Parent");
});
childEl.addEventListener("click", () => {
  console.log("Child");
});

//.removeEventListener()
//대상에 등록했던 이벤트 청취를 제거한다.
//메모리 관리를 위해 등록한 이벤트를 제거하는 과정이 필요할 수 있다.
const parentEl2 = document.querySelector(".parent");
const childEl2 = document.querySelector(".child");

const handler = () => {
  console.log("Parent!");
};
parentEl2.addEventListener("click", handler);
childEl2.addEventListener("click", () => {
  parentEl2.removeEventListener("click", handler);
});

//다음파트 -> index.html + main2.js
