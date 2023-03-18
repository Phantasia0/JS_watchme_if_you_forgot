/* 1. 문자 데이터형 */
/**************************************/
const string1 = "Hello";
const string2 = "Hello";
const string3 = `Hello ${string1} ?!`; //템플릿 리터럴

console.log(string3);

/* 2. 숫자 데이터형 */
/**************************************/
const number = 123;
console.log(number + 1);
console.log(number + undefined); // NaN (Not a Number)
console.log(typeof (number + undefined)); // number

const pi = 0.14;
console.log(pi);
console.log(typeof pi);

const a = 0.1;
const b = 0.2;
console.log(a + b); //0.30000000004 부동소수점 오류. 무한소수를 유한하게 표현하는 과정에서 계산오류.
console.log((a + b).toFixed(1)); // toFixed : 문자데이터로 바뀜.
console.log(typeof (a + b).toFixed(1));
console.log(Number((a + b).toFixed(1)));
console.log(typeof Number((a + b).toFixed(1)));

/* 3. Boolean 데이터형 */
/**************************************/
const boolA = true;
const boolB = false;

if (boolA) {
  console.log("Hello");
}

/* 4. Null 데이터형 */
/**************************************/
//null 데이터형. 명시적으로 값이 존재하지 않는다를 의미하도록 작성하기 위함
let age = null;
console.log(age);
setTimeout(function () {
  age = 85;
  //console.log(age);
}, 1000);

/* 5. Undefined 데이터형 */
/**************************************/
//undefined 데이터형. 값이 할당되지 않았음을 의미 (암시적으로 자동으로 엔진)
let unAge;
console.log(unAge);
setTimeout(function () {
  unAge = 85;
  //console.log(unAge);
}, 1000);

/* 6. Array 데이터형 */
/**************************************/
const fruits = new Array("Apple", "Banana", "Cherry"); //생성자 함수, 자바스크립트 클래스
console.log(fruits);
const fruitsLit = ["Apple", "Banana", "Cherry"]; //배열 리터럴이라고 부른다.
console.log(fruitsLit);
console.log(fruitsLit[1]); //배열 데이터를 인덱싱
console.log(fruitsLit.length);
console.log(fruitsLit[fruitsLit.length - 1]);
console.log(fruitsLit[0]);

/* 7. Object 데이터형 */
/**************************************/
const user = {
  name: "John",
  age: 85,
  email: null,
};
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.email); //null . email 값이 존재하지않음을 의미
console.log(user.phone); //undefined. 값이 할당되지않앗음을 의미

const userOb = new Object();
userOb.name = "John"; //name이라는 key, John 이라는 value
userOb.age = 85;
console.log(userOb);

function User() {
  this.name = "Conner"; //this 키워드를 이용하여 객체 생성
  this.age = 85;
}
const userFu = new User();
console.log(userFu);

const userLit = {
  //객체 리터럴 방식으로 객체 생성
  name: "James",
  age: 85,
};
console.log(userLit);
console.log(userLit.name); //점표기법
console.log(userLit["name"]); //대괄호 표기법
console.log(userLit.age);
const key = "age";
console.log(userLit[key]); //key라는 이름의 변수로 인덱싱 접근 = 데이터로 속성의 이름접근해야 할 경우
console.log(userLit); // 객체 데이터 안의 속성들의 이름은 고유하므로 순서가 존재하지 않음

const userA = {
  name: "Trinity",
  age: 25,
};
const userB = {
  name: "Neo",
  age: 22,
  parent: userA,
};
console.log(userB);
console.log(userB.parent);
console.log(userB.parent.name); //객체 안의 객체 안의 객체 안의 객체 안의 ...
console.log(userB["parent"].name);
console.log(userB["parent"]["name"]);

const users = [userA, userB];
console.log(users);
console.log(users[0]);
console.log(users[0].name);
console.log(users[0]["name"]);

/* 8. Function 데이터형 */
/**************************************/
function hello() {
  console.log("Hello");
}
hello(); //함수 호출
hello; // 단순한 함수덩어리코드
console.log(hello);
console.log(hello());

function getNumber() {
  return 123;
}
console.log(getNumber());
console.log(getNumber);
console.log(typeof getNumber); //function
console.log(typeof getNumber()); //number
//함수라는 데이터를 취급할때는 소괄호를 닫지 않고 취급한다
const getNumberVar = function () {
  return 123;
}; //익명함수. 함수 데이터 자체를 어떤 변수에 할당
console.log(typeof getNumberVar); //function
console.log(typeof getNumberVar()); //number
console.log(getNumberVar);
console.log(getNumberVar()); //123

const aFunc = function () {
  console.log("A");
};
const bFunc = function (c) {
  console.log(c);
  c();
};

//bFunc(1234);
bFunc(aFunc);

/* 9. 형 변환(Type Conversion) */
/**************************************/
//자바스크립트의 데이터형이 바뀐다.
const aTC = 1; //Number
const bTC = "1"; //String
console.log(aTC === bTC); //일치 연산자 << 사용권장
console.log(aTC == bTC); //동등 연산자

const aTCZ = 0;
const bTCZ = false;
console.log(aTCZ === bTCZ);
console.log(aTCZ == bTCZ);

/* 10. 참과 거짓(Truthy & Falsy) */
/**************************************/
if (true) {
  console.log("참!");
}
if (123) {
  //Truthy
  console.log("참!");
}
if (0) {
  //Falsy
  console.log("참!");
}
if ("0") {
  //Truthy
  console.log("참!");
}
//대부분의 데이터는 Truthy , 즉 Falsy한 값들만 기억하면 된다.
// 1)false
// 2)0
// 3)null
// 4)undefined
// 5)NaN
// 6)''
// 7)0n
if (undefined) {
  //Falsy
  console.log("참!");
}
if (null) {
  //Falsy
  console.log("참!");
}
if (NaN) {
  //Falsy
  console.log("참!");
}
if ("") {
  //Falsy
  console.log("참!");
}
if (0n) {
  //Falsy
  //BigInt 자바스크립트 데이터 종류
  console.log("참!");
}

const fruitsT = ["Apple", "Banana"];
if (fruitsT) {
  console.log("아이템이 들어있음!");
}
const fruitsF = [];
if (fruitsF.length) {
  console.log("아이템이 들어있음!");
}

//데이터 타입 확인
const aType = 123;
console.log(typeof aType);
console.log(typeof "Hello");
console.log(typeof "Hello" === "string");
console.log(typeof 123 === "number");
console.log(typeof false === "boolean");
console.log(typeof undefined === "undefined");
console.log(typeof null === "null"); //false;
console.log(typeof null); //object;-> HOW
console.log(typeof [] === "object"); //object;-> HOW
console.log(typeof {} === "object"); //object;-> HOW
console.log(typeof function () {} === "function"); //function;

//console.log(null.constructor); // null 데이터에서 constructor 속성 X Error
console.log([].constructor === Array);
console.log({}.constructor === Object);
console.log(Object.prototype.toString.call(null)); //[Object Null]
console.log(Object.prototype.toString.call(null).slice(8, -1)); //Null. 사용권장

function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
console.log(checkType(null));
console.log(checkType([]));
console.log(checkType({}));
console.log(checkType(function () {}));
console.log(checkType(undefined));
console.log(checkType("Hello"));
console.log(checkType(123));
console.log(checkType(false));
