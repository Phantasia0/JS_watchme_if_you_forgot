/* 6. 얕은 복사 / 깊은 복사 */
/**************************************/
//참조형은 가변성으로 인해, 데이터를 복사할 때 주의가 필요함.

//얕은 복사(Shallow Copy)  | 참조형의 1차원 데이터만 복사
//깊은 복사(Deep Copy)     | 참조형의 모든 차원 데이터 복사
import cloneDeep from "lodash/cloneDeep"; //깊은 복사용

//원시형 데이터
let a = 1;
let b = a;

b = 2;

console.log(b);
console.log(a);

b = 3;

console.log(b);
console.log(a);

//참조형 데이터를 다룰 때 이 개념을 알아야한다.

//얕은 복사 - 예시 1 O.K
const objA = { x: 1 };
//const objB = Object.assign({}, objA); // 1번 방법
const objB = { ...objA }; // 2번 방법

objB.x = 2;

console.log(objB);
console.log(objA);

//얕은 복사 - 예시 2 N.O
//참조형 안에 참조형이 또 있는 데이터가 있을때, 어떻게 해야할까?
const objC = { x: { y: 1 } };
const objD = { ...objC };

objD.x.y = 2;
console.log(objD);
console.log(objC);

//깊은 복사 필요
//lodash에서 제공하는 cloneDeep 함수 사용
const objE = { x: { y: 1 } };
const objF = cloneDeep(objE);

objF.x.y = 2;
console.log(objF);
console.log(objE);

//배열에서는?
//얕은 복사 - 예시 1 O.K
const arrA = [1, 2, 3];
//const arrB = arrA.concat([]);
const arrB = [...arrA];

arrB[0] = 4;
console.log(arrB);
console.log(arrA);

//얕은 복사 - 예시 2 N.O
//참조형 안에 참조형이 또 있는 데이터가 있을때, 위에처럼, 깊은 복사 필요
const arrC = [[1, 2], [3]];
const arrD = cloneDeep(arrC);

arrD[0][0] = 4;
console.log(arrD);
console.log(arrC);

//main6.js 이동
