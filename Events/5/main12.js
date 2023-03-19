/* 11. 커스텀 이벤트와 디스패치 */
/**************************************/
//디스패치
//dispatchEvent()
//강제로 이벤트를 발생시킬 수 있다.
const child1 = document.querySelector(".child:nth-child(1)");
const child2 = document.querySelector(".child:nth-child(2)");

child1.addEventListener("click", (event) => {
  //강제로 이벤트 발생시킨다.
  child2.dispatchEvent(new Event("click"));
  child2.dispatchEvent(new Event("wheel"));
  child2.dispatchEvent(new Event("keydown"));
});

child2.addEventListener("click", (event) => {
  console.log("Child2 Click!");
});
child2.addEventListener("wheel", (event) => {
  console.log("Child2 Wheel!");
});
child2.addEventListener("keydown", (event) => {
  console.log("Child2 Keydown!");
});

//커스텀 이벤트, 그리고 디스패치
const child3 = document.querySelector(".child:nth-child(3)");
const child4 = document.querySelector(".child:nth-child(4)");

//JS에서 존재하지 않는 커스텀한 이벤트에 대해서,
//그것을 강제로 dispatchEvent를 통해 실행할 수 있다.
child3.addEventListener("hello-world", (event) => {
  console.log("커스텀 이벤트 발생!");
  console.log(event.detail); //지금은 undefined
});

child4.addEventListener("click", () => {
  child3.dispatchEvent(new Event("hello-world"));
});

//옵션 추가
const child5 = document.querySelector(".child:nth-child(5)");
const child6 = document.querySelector(".child:nth-child(6)");

child5.addEventListener("hello-world", (event) => {
  console.log("커스텀 이벤트 발생!");
  //커스텀이벤트 생성자함수를 통해 만들어진 이벤트에서 전달받은 데이터 출력
  console.log(event.detail);
});

child6.addEventListener("click", () => {
  child5.dispatchEvent(
    new CustomEvent("hello-world", {
      //커스텀 이벤트를 통해 어떠한 데이터를 전달하고 싶으면,
      //2번째 인수로 객체의 형태의 detail 속성을 통해 추가해줄 수 있다.
      detail: {
        name: "phantasia",
        where: "elice",
        movie: "matrix",
      },
    })
  );
});
