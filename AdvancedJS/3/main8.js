/* 9. 메모리 누수(Memory Leak) */
/**************************************/
//더 이상 필요하지 않은 데이터가 해제되지 못하고 메모리를 계속 차지하는 현상

//상황
// a. 불필요한 전역 변수 사용
//이런 경우 가비지 컬렉션을 통해 계속 참조되고 있기때문에, 제거되지 않는다.
window.hello = "Hello world";
window.movie = "Matrix";

// b.1 분리된 노드 참조 - 메모리 누수 ON
const btn1 = document.querySelector(".btn");
const parent1 = document.querySelector(".parent");

btn1.addEventListener("click", () => {
  console.log(parent1);
  //parent라는 요소를 제거하기는 했지만, 메모리 상에는 계속 남아있다.
  //위에서 parent라는 변수에 이미 함수 밖에서 할당했기 때문
  parent1.remove();
});

// b.2 분리된 노드 참조 - 메모리 누수 해결 방법
const btn2 = document.querySelector(".btn2");

btn2.addEventListener("click", () => {
  const parent2 = document.querySelector(".parent2");
  console.log(parent2);
  // &&는 가장 먼저 만나는 False 반환, 다 true면 마지막 반환
  parent2 && parent2.remove();
});

// c. 해제하지 않은 타이머
let a = 0;
const intervalId = setInterval(() => {
  a += 1;
}, 100);

setTimeout(() => {
  console.log(a);
  clearInterval(intervalId); // 반복되는 코드를 해제함으로써 메모리 누수 해결
}, 1000);

// d. 잘못된 클로저 사용
const getFn = () => {
  let a = 0;
  return (name) => {
    //a += 1; //불필요한 정보를 참조하고 있는 것을 제거한다.
    //console.log(a); //불필요한 정보를 참조하고 있는 것을 제거한다.
    return `Hello ${name}!`;
  };
};

//우리가 원하는 건 Hello XXX 인데, a는 전혀 불필요한 정보이고,
//클로저가 참조하고 있다.
//그러므로 GC가 해제를 하지못하므로, 메모리 누수가 발생한다.
const fn = getFn();
console.log(fn("Neo"));
console.log(fn("Trinity"));
console.log(fn("Morphious"));

/* 10. 자바스크립트 런타임과 콜스택 그리고 WebAPIs, 태스크 큐, 이벤트 루프 */
/**************************************/
//글로 설명 보단 그림보면서 스스로 생각해보는게 훨씬 낫다.
//여기 사이트 참고. 굉장히 정리 잘 되있다.
//https://velog.io/@hamelln/event-loop
