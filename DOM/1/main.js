//DOM(Document Object Model)

/* 1. DOM 이란 */
/**************************************/
//HTML 문서를 객체로 표현한 것
//JS에서 HTML을 제어할 수 있게 해준다.

const element = document.querySelector("h1");
console.log(element.textContent);

/* 2. Node vs Element */
/**************************************/
// - 노드(Node) : HTML 요소, 텍스트, 주석 등 모든 것을 의미
// - 요소(Element) : HTML 요소를 의미

const parent = document.querySelector(".parent");

//부모 요소의 모든 자식 노드 확인
console.log(parent.childNodes);

//부모 요소의 모든 자식 요소 확인
console.log(parent.children);

console.dir(parent); //하나의 요소는 하나의 노드이고 파생된 객체이다.

class N {}
class E extends N {}

console.dir(E);
console.dir(N);
console.dir(E.__proto__); //상속받은 부모 클래스 확인할 수 있다.

console.dir(Element);
console.dir(Node);
console.dir(Element.__proto__); //Element 는 Node로 부터 상속받은 것을 알 수 있다.

//결국, 노드라는 개념에서 실행되는 개념이나 , 속성들은 요소에서도 그대로 쓸 수 있다는 것.
