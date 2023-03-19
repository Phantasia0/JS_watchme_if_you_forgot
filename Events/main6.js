/* 5. 캡처링 사용 */
/**************************************/

const parentEl = document.querySelector(".parent");
const handler = () => {
  console.log("Parent!");
};
parentEl.addEventListener("click", handler, {
  capture: true,
});
parentEl.removeEventListener("click", handler, {
  capture: true,
});

//만약 addEventListener로 handler을 옵션 capture:true로 등록하였다면,
//removeEventListerner도 같은 옵션을 제공해야 한다.

//다음파트 -> index.html + main7.js
