//동기(Synchronous) 와 비동기(Asynchronous)

/* 1. 동기와 비동기 */
/**************************************/
//동기 -> 순차적으로 코드 실행 O
//비동기 -> 순차적으로 코드 실행 X

console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 1000); // 대표적인 비동기 코드
console.log(3);

const btnEl = document.querySelector("h1");
btnEl.addEventListener("click", () => {
  console.log("Clicked");
}); //addEventListener의 콜백함수는 비동기 방식으로, 언제 실행될지 알 수 없는 코드
console.log("Hello world!");

/* 2. 비동기 코드 예시 */
/**************************************/
//특정한 웹주소로 데이터를 전송 = 요청(requrest)
//서버가 요청을 받으면 그 요청을 처리해서 어떤 결과를 줄 때 = 응답(response)
//
//비동기 코드 사용 이유
//데이터를 요청하고 응답을 받아오는건 특정한 시간이 필요
//만약 동기적으로 처리한다면, 이 코드가 처리 다 되는 그 시간만큼 실행될 수 없다.

//비동기적으로 작동하는 코드를, 작성하는 사람이 기다리라고 명령하지않으면,
//바로 다음코드로 넘어간다. console.log(1)
fetch("https://www.omdbapi.com/?i=tt3896198&apikey=e14d4d70")
  .then((res) => res.json())
  .then((res) => console.log(res));

//먼저 작성한 1,2,3 log가 더 빨리 찍힌다.
console.log(1);
console.log(2);
console.log(3);

/* 3.비동기 코드를 관리하는 콜백(Callback) 패턴 */
/**************************************/

//동기 방식으로 동작하는 코드
const a = () => console.log(1);
const b = () => console.log(2);
a();
b();

//비동기 방식으로 동작하는 코드
const c = () => {
  setTimeout(() => {
    console.log(1);
  }, 1000);
};
const d = () => console.log(3);
c();
d(); //c 보다 먼저 출력

//내가 원하는 것, 3보다 1이 무조건 먼저 출력되게 만들고 싶다.
//구분하기 위해 20, 10으로 수정

const e = (callback) => {
  setTimeout(() => {
    console.log(10);
    callback();
  }, 1000);
};
const f = () => console.log(20);
e(() => {
  f();
}); //실행 순서 10 20

//여기서 추가로 i 함수가 추가되고,h 도 비동기적인 코드라면,
//내가 원하는 순서로, 100 200 300 흐름으로 출력하고 싶다.
const g = (callback) => {
  setTimeout(() => {
    console.log(100);
    callback();
  }, 1000);
};
const h = (callback) => {
  setTimeout(() => {
    console.log(200);
    callback();
  }, 1000);
};
const i = () => console.log(300);

g(() => {
  h(() => {
    i();
  });
});

//또 한단계 비동기적 코드가 있을때,  더 추가했을때 순차적 흐름으로 출력하고싶다.
//구분하기 위해 1000 2000 3000 4000 으로 수정
const j = (callback) => {
  setTimeout(() => {
    console.log(1000);
    callback();
  }, 1000);
};
const k = (callback) => {
  setTimeout(() => {
    console.log(2000);
    callback();
  }, 1000);
};
const l = (callback) => {
  setTimeout(() => {
    console.log(3000);
    callback();
  }, 1000);
};
const m = () => console.log(4000);

j(() => {
  k(() => {
    l(() => {
      m();
    });
  });
});

//단순하게 실행의 순서를 보장하기 위해 콜백 패턴을 사용할 수 있겠고,
//이 콜백 패턴을 사용하면, 작성 및 해석이 매우 불편해진다.
//이를 '콜백 지옥' 이라고 표현한다.

//이어서
//index.html의 script 파일 이동 + main2.js
