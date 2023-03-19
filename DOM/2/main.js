/* 3. DOM API - 1 */
/**************************************/

//document.getElementById()
//HTML 'id 속성(Attributes) 값으로 검색한 요소를 반환
//여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환
//검색 결과가 없으면 'null' 반환
const el = document.getElementById("child2");
console.log(el);
const el2 = document.getElementById("child2123");
console.log(el2);

//document.querySelector()
//'CSS 선택자'로 검색한 요소를 하나 반환
//여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환
//검색 결과가 없으면, 'null' 반환
const el3 = document.querySelector(".child:first-child");
console.log(el3);

// document.querySelectorAll()
//'CSS 선택자'로 검색한 모든 요소를 'NodeList'로 반환
//'NodeList' 객체는 '.forEach()' 를 사용할 수 있다.

//배열 데이터가 아닌, 유사배열이다. prototype으로 몇가지를 만들어놨다.
const nodeList = document.querySelectorAll(".child");
console.log(nodeList);
nodeList.forEach((el) => console.log(el.textContent));

//배열처럼 쓰기 위해
console.log(Array.from(nodeList).reverse());

//N.parentElement
//노드의 부모 요소를 반환
const el4 = document.querySelector(".child");
console.log(el4.parentElement);

//E.closest()
//자신을 포함한 조상 요소 중 'CSS 선택자'와 일치하는 가장 가까운 요소 반환
//요소를 찾지 못하면, 'null' 반환
const el5 = document.querySelector(".child");
console.log(el5.closest("div"));
console.log(el5.closest("body"));
console.log(el5.closest(".hello"));

//N.previousSibling / N.nextSibling
//노드의 이전 형제 혹은 다음 형제 노드를 반환
const el6 = document.querySelector(".child");
console.log(el6.previousSibling);
console.log(el6.previousSibling.parentElement);
console.log(el6.nextSibling);

//E.previousElementSibling / E.nextElementSibling
//요소의 이전 형제 혹은 다음 형제 요소 반환
const el7 = document.querySelector(".child");
console.log(el7.previousElementSibling);
console.log(el7.nextElementSibling);

//E.children
//요소의 모든 자식 요소 반환
const el8 = document.querySelector(".parent");
console.log(el8.children);
console.log(Array.from(el8.children));

//E.firstElementChild / E.lastElementChild
//요소의 첫 번째 자식 혹은 마지막 자식 요소를 반환
const el9 = document.querySelector(".parent");
console.log(el9.firstElementChild);
console.log(el9.lastElementChild);
