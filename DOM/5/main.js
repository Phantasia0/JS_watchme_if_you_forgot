/* 3. DOM API - 4 */
/**************************************/
//크기와 좌표

//window.innerWidth / window.innerHeight
//현재 화면(Viewport) 의 크기를 얻을 수 있다.
console.log(window.innerWidth);
console.log(window.innerHeight);

//window.scrollX / window.scrollY
//페이지의 좌상단 기준, 현재 화면(Viewport)의
//수평 혹은 수직 스크롤 위치를 얻는다.
console.log(window.scrollX, window.scrollY);

//window.scrollTo() / E.scrollTo()
//지정된 좌표로 대상(화면, 스크롤 요소)를 스크롤한다.
//대상.scrollTo(X좌표, Y좌표)
//대상.scrollTo({top:Y, left:X, behavior: 'smooth'})
const parentEl = document.querySelector(".parent");
setTimeout(() => {
  //window.scrollTo(0, 500);
  parentEl.scrollTo({
    left: 0,
    top: 500,
    behavior: "smooth",
  });
}, 1000);

//E.clientWidth / E.clientHeight
//테두리 선(border)을 제외한 요소의 크기를 얻는다.
const parentEl2 = document.querySelector(".parent");
const childEl2 = document.querySelector(".child");

console.log(parentEl2.clientWidth, parentEl2.clientHeight);
console.log(childEl2.clientWidth, childEl2.clientHeight);

//E.offsetWidth / E.offsetHeight
//테두리 선을 포함한 요소의 크기를 얻는다.
const parentEl3 = document.querySelector(".parent");
const childEl3 = document.querySelector(".child");

console.log(parentEl3.offsetWidth, parentEl3.offsetHeight);
console.log(childEl3.offsetWidth, childEl3.offsetHeight);

//E.scrollLeft / E.scrollTop
//스크롤 요소의 자상단 기준,
//현재 스크롤 요소의 수평 혹은 수직 스크롤 위치를 얻는다.
window.parentEl = document.querySelector(".parent");
console.log(parentEl.scrollLeft, parentEl.scrollTop);

//E.offsetLeft / E.offsetTop
//페이지의 좌상단 기준, 요소의 위치를 얻는다.
const parentEl4 = document.querySelector(".parent");
const childEl4 = document.querySelector(".child");

console.log(parentEl4.offsetLeft, parentEl4.offsetTop);
console.log(childEl4.offsetLeft, childEl4.offsetTop);

//E.getBoundingClientRect()
//테두리 선을 포함한 요소의 크기와
//화면에서의 상대 위치 정보를 얻는다.
const parentEl5 = document.querySelector(".parent");
const childEl5 = document.querySelector(".child");

console.log(parentEl5.getBoundingClientRect());
console.log(childEl5.getBoundingClientRect());

//꼭 필요한 경우에만 사용.
