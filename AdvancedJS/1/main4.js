/* 4. 불변성 / 가변성 */
/**************************************/

//불변성(Immutability) - 생성된 데이터가 메모리에서 변경되지 않는 성격
//가변성(Mutability)   - 생성된 데이터가 메모리에서 변경될 수 있는 성격

//자바스크립트 원시형은 불변성 | 문자,숫자,불린,Null,Undefined,Symbol,BigInt
//자바스크립트 참조형은 가변성 | 객체, 배열, 함수

//
let a = 1;
let b = a;

b = 2;
console.log(b);
console.log(a);
//

//
let objA = { x: 1 };
let objB = objA;

objB.x = 2;
console.log(objB);
console.log(objA);

objA.x = 7;
console.log(objB);
console.log(objA);

objB.x = 1;
console.log(objB);
console.log(objA);
//

// === : 실제로 메모리 주소를 비교하는 연산자
console.log(objA === objB);
//

//
let objC = { x: 1 };
let objD = { x: 1 };
console.log(objC === objD);

objD.x = 2;
console.log(objD);
console.log(objC);

//원시형 데이터는 모양이 똑같으면 서로 메모리 주소가 같다.
//참조형 데이터는 모양이 같더라도 새로운 메모리에 만들어 질 수 있다.

//
let arrA = [1, 2, 3];
let arrB = arrA;

arrB[0] = 4;
console.log(arrB);
console.log(arrA);

//폴더2 + main5.js 이동
