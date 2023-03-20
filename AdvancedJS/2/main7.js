/* 7. 클로저(Closure) */
/**************************************/
//함수가 선언될 때의 유효범위(렉시컬)를 기억하고 있다가,
//함수가 외부에서 호출될 때 그 유효범위의 특정 변수를 참조할 수 있는 개념

function createCount() {
  let a = 0;
  return function () {
    return (a += 1);
  };
}

//이 때 count를 클로저 라고 말할 수 있다.
const count1 = createCount();

console.log(count1()); //1
console.log(count1()); //2
console.log(count1()); //3

const count2 = createCount();

console.log(count2()); //1
console.log(count2()); //2

/* 8. 클로저(Closure) - 사용 예시 */
/**************************************/

//클로저 적용 전
const h1El = document.querySelector("h1");
const h2El = document.querySelector("h2");

//별도의 상태 관리가 필요함.
let h1IsRed = false;
let h2IsRed = false;

h1El.addEventListener("click", (event) => {
  h1IsRed = !h1IsRed;
  h1El.style.color = h1IsRed ? "red" : "black";
});
h2El.addEventListener("click", (event) => {
  h2IsRed = !h2IsRed;
  h2El.style.color = h2IsRed ? "red" : "black";
});

//클로저 적용
const h3El = document.querySelector("h3");
const h4El = document.querySelector("h4");

const createToggleHandler = () => {
  let isRed = false;
  return (event) => {
    isRed = !isRed;
    event.target.style.color = isRed ? "red" : "black";
  };
};

h3El.addEventListener("click", createToggleHandler());
h4El.addEventListener("click", createToggleHandler());

//훨씬 더 깔끔하고 변수관리도 쉽다.

//폴더3 + main8.js 이동
