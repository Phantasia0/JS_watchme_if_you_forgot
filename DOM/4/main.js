/* 3. DOM API - 3 */
/**************************************/
//DOM을 생성하고, 조회하고, 수정할수 있는 다양한 API

//E.dataset
//요소의 각 data-` 속성 값을 얻거나 지정
const el = document.querySelector(".child");
const str = "Hello world!";
const obj = { a: 1, b: 2 };

el.dataset.helloWorld = str;
el.dataset.object = JSON.stringify(obj);

console.log(el.dataset.helloWorld);
console.log(el.dataset.object);
console.log(JSON.parse(el.dataset.object));
//이런 방식으로 요소의 dataset에 자바스크립트 데이터를 저장할수 있고,
//그때 문자데이터를 제외하고는 데이터를 JSON화하여 저장하고,
//나중에 가져와서 활용할때는 parse로 JSON 데이터를 분석하여 다시 JS에서 쓸 수 있다.

//E.tagName
//요소의 태그 이름을 반환(대문자)
const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");
const el2 = document.createElement("span");

console.log(parentEl.tagName);
console.log(childEl.tagName);
console.log(el2.tagName);
console.log(document.body.tagName);

//E.id
//요소의 'id' 속성 값을 얻거나 지정
const el3 = document.querySelector(".child");
console.log(el3.id); //빈 문자

el3.id = "child1";
console.log(el3.id);
console.log(el3);

//E.className
//요소의 'class' 속성 값을 얻거나 지정
const el4 = document.querySelector(".child");
console.log(el4.className);

el4.className += " child1 active";
console.log(el4.className);
console.log(el4);
//하지만 이렇게 클래스를 추가하거나 지정할 경우, 매우 불편하므로
//간단하게 클래스를 확인할때나 사용한다.

//E.classList
//요소의 'class' 속성 값을 제어

// - '.add()' : 새로운 값 추가
// - '.remove()' : 기존 값을 제거
// - '.toggle' : 값을 토글
// - '.contains' : 값을 확인

const el5 = document.querySelector(".child");

el5.classList.add("active");
console.log(el.classList.contains("active"));

el5.classList.remove("active");
console.log(el.classList.contains("active"));

el5.addEventListener("click", () => {
  el.classList.toggle("active");
  console.log(el.classList.contains("active"));
});

//E.style
//요소의 'style' 속성(인라인 스타일) 의 CSS 속성 값을 얻거나 지정
//인라인 스타일링은 점수가 1000점이므로 우선순위가 다 뭉개질수 있으니 주의
//꼭 필요한 곳에서만 써야한다.
const el6 = document.querySelector(".child");

//개별 지정
// el.style.width = "100px";
// el.style.fontSize = "20px";
// el.style.backgroundColor = "green";
// el.style.position = "absolute";

//한번에 지정
// Object.assign(el.style, {
//   width: "100px",
//   fontSize: "20px",
//   backgroundColor: "green",
//   position: "absolute",
// });

console.log(el.style);
console.log(el.style.width);
console.log(el.style.fontSize);
console.log(el.style.backgroundColor);
console.log(el.style.position);

//window.getComputedStyle()
//요소에 적용된 스타일 객체를 반환
const el7 = document.querySelector(".child");
const styles = window.getComputedStyle(el7);

console.log(styles.width);
console.log(styles.fontSize);
console.log(styles.backgroundColor);
console.log(styles.position);
//console.log(styles);

//E.getAttribute() / E.setAttribute()
//요소에서 특정 속성 값을 얻거나 지정
const el8 = document.querySelector(".child");

el8.setAttribute("title", "Hello World!");
console.log(el8.getAttribute("title"));

//E.hasAttribute() / E.removeAttribute()
//요소에서 특정 속성을 확인하거나 제거
const el9 = document.querySelector(".child");
console.log(el9.hasAttribute("class"));

el9.removeAttribute("class");
console.log(el9.hasAttribute("class"));
console.log(el9);
