/* 6. 이벤트 옵션 */
/**************************************/

//once:true
//핸들러 한번만 실행
const parentEl = document.querySelector(".parent");

parentEl.addEventListener(
  "click",
  (event) => {
    console.log("Parent");
  },
  {
    once: true,
  }
);

//passive:true
//기본 동작과 핸들러 실행 분리
parentEl.addEventListener(
  "wheel",
  (event) => {
    for (let i = 0; i < 100; i += 1) {
      console.log(i);
    }
  },
  {
    passive: true,
  }
);
//만약 로직이 복잡할 경우, 이렇게 핸들러 실행과 기본 동작을 분리시켜,
//실제 화면을 부드럽게 보여질 수 있게 한다.

//다음파트 -> 폴더 1 이동 + main8.js
