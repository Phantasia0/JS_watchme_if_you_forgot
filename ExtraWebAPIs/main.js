//Extra Web APIs

/* 1. console */
/**************************************/
//콘솔에 메세지나 객체를 출력한다.
// .log()      | 일반적인 메세지
// .warn()     | 경고 메세지
// .error()    | 에러 메세지
// .dir()      | 속성을 볼 수 있는 객체 출력

console.log(document.body);
console.warn(document.body);
console.error(document.body);
console.dir(document.body);

//.count(), .countReset()
//콘솔에 메소드 호출의 누적 횟수를 출력하거나 초기화한다.
//보통 구현하고자 하는 함수 테스트를 위해 실행 횟수를 카운트 할때 사용한다.
console.count(); //default
console.count("a");
console.count("a");
console.count("b");
console.count("a");
console.log("Reset a!");
console.countReset("a");
console.count("a");
console.count("b");

//.time(), .timeEnd()
//콘솔에 타이머가 시작해서 종료되기까지의 시간(ms)을 출력한다.
//보통 함수의 실행시간 측정을 위해 사용한다.
//혹은 특정 코드의 실행시간 측정
console.time("반복문");
for (let i = 0; i < 1000; i++) {
  console.log(i);
}
console.timeEnd("반복문");

//.trace()
//메소드 호출 스택(Call Stack)을 추적해 출력한다.
//작성한 로직을 함수 범위로 분석을 해야할 때 사용한다.
function aF() {
  function b() {
    function c() {
      console.log("Log!");
      console.trace("Trace");
    }
    c();
  }
  b();
}

aF();

//.clear()
//콘솔에 기록된 메세지를 모두 삭제한다.
console.log(1);
console.log(2);
console.log(3);
console.clear();

//서식 문자 치환
//이거 잘 쓰면 콘솔 이쁘게 쓸수 있다.

// %s - 문자로 적용
// %o - 객체로 적용
// %c - CSS를 적용

const a = "The Matrix Revolution";
const b = 3;
const c = {
  name: "Neo",
  another: "John Wik",
};
console.log("%s %s! is very nice movie", a, b);
console.log("%o is Inform Object!", c);
console.log(
  "%c This Matrix Revolution %cis very %cnice movie",
  "color:green; font-family:serif; font-size: 20px; background-color:black",
  "",
  "color:green; font-size:16px;background-color:black; border-radius:4px;"
);

//index.html + main2.js 이동
