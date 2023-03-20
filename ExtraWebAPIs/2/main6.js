/* 6. History(히스토리) - 사용 예시 */
/**************************************/

//매우 중요!
//Single Page Application (SPA)
//하나의 페이지 내부에서 사용자에게 페이지가 바뀌는 것처럼 보이게 만들어주는 개념

//각각의 변수에 HTML 문자 데이터 할당
const page1 = /* html */ `
  <section class="page1">
    <h1>Page 1</h1>
  </section>
`;

const page2 = /* html */ `
  <section class="page2">
    <h1>Page 2</h1>
  </section>
`;

const page3 = /* html */ `
  <section class="page3">
    <h1>Page 3</h1>
  </section>
`;

const pageNotFound = /* html */ `
<section>
  <h1>404 Page Not Found!</h1>
</section>
`;

//path 에는 각각의 페이지에 해당하는 해시
//temaplate 에는 실제 html 구조를 할당 받은 변수
const pages = [
  { path: "#/page1", template: page1 },
  { path: "#/page2", template: page2 },
  { path: "#/page3", template: page3 },
];

const appEl = document.querySelector("#app");

const render = () => {
  console.log(history);
  const page = pages.find((page) => page.path === location.hash);
  appEl.innerHTML = page ? page.template : pageNotFound;
};

//사용자가 브라우저 페이지에서 히스토리를 남기는 동작을 할때마다,
//발생하는 이벤트
//즉 페이지가 바뀔때마다 popstate 이벤트 발생
window.addEventListener("popstate", render);
render(); //최초 한번 동작

//input 제어
const pagePush = (num) => {
  //pushState 는 popstate 이벤트를 발생시키지는 못한다.
  //history.state 속성에 전달한 데이터가 저장된다.
  history.pushState(`전달할 데이터 - ${num}`, null, `#/page${num}`);
  //그러므로 render() 추가
  render();
};

const inputEl = document.querySelector("nav input");
inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    pagePush(event.target.value);
  }
});

//페이지 이동간
//history.scrollRestoration = 'manual' //스크롤 위치 수동으로 복구시키지 않을것인지
//history.scrollRestoration = 'auto' //스크롤 위치 새로고침 전 상태 유지
