//표준 내장 객체
//이걸 쓴다는 것은 '빌트인 함수, 고차함수'를 쓴다 라고 표현

/* 1. 문자에서 사용할 수 있는 표준 내장 객체 */
/**************************************/
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String

//.length
//문자의 길이(숫자)를 반환한다.
const str = "Hello world!";
console.log(str.length);

//.includes()
//대상 문자에 주어진 문자가 포함되어 있는지(불린) 확인한다.
//대소문자 구별
const str1 = "Hello world!";
console.log(str.includes("Hello")); //true
console.log(str.includes("hello")); //false
console.log(str.includes("Hello", 1)); //주어진 인덱스번호부터 문자 확인 false

//.indexOf()
//대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스(숫자)를 반환한다.
//일치하는 문자가 없으면 '-1'을 반환한다.
const str2 = "Hello world!";
console.log(str2.indexOf("world"));
console.log(str2.indexOf("!"));
console.log(str2.indexOf("phantasia"));

if (str2.indexOf("phantasia") === -1) {
  console.log("phantasia가 없습니다.");
}
if (!str2.includes("phantasia")) {
  console.log("phantasia가 없습니다.");
}

//.padEnd()
//대상 문자의 길이가 지정된 길이보다 작으면,
//주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환
const str3 = "1234567";
console.log(str3.padEnd(10, "0"));
console.log(str3);

//.padStart()
//대상 문자의 길이가 지정된 길이보다 작으면,
//주어진 문자를 지정된 길이까지 앞에 붙여 새로운 문자를 반환
const str4 = "1234567";
console.log(str4.padStart(10, "0"));
console.log(str4);

const str5 = "1234567890123";
console.log(str5.padStart(10, "0"));

//.replace()
//대상 문자에서 패턴(문자, 정규식) 과 일치하는 부분을 새로운 문자로 교체 후 반환
const str6 = "Hello, Hello?!";
console.log(str6.replace("Hello", "Hi")); //처음 일치하는 부분 교체
console.log(str6.replace(/Hello/g, "Hi")); //모든 일치하는 부분 교체
console.log(str6);

//.slice()
//대상 문자의 일부를 추출해 새로운 문자를 반환한다.
//두번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 문자의 끝까지 추출

const str7 = "Hello world!";
//            012345678901
//           -210987654321
console.log(str7.slice(0, 5));
console.log(str7.slice(6, -1));
console.log(str7.slice(6));
console.log(str7);

//.split()
//대상 문자를 주어진 구분자로 나눠 배열로 반환
const str8 = "Apple, Banana, Cherry";
console.log(str8.split(", "));

//.toLowerCase()
//대상 문자를 영어 소문자로 변환해 새로운 문자로 반환
const str9 = "Apple, Banana, Cherry";
console.log(str9.toLowerCase());
console.log(str9);

//.toUpperCase()
//대상 문자를 영어 대문자로 변환해 새로운 문자로 반환
const str10 = "Apple, Banana, Cherry";
console.log(str10.toUpperCase());
console.log(str10);

//.trim()
//대상 문자의 앞뒤 공백 문자(space, tab 등)을 제거한 새로운 문자를 반환
const str11 = "         Phantasia!   ";
console.log(str11.trim());
console.log(str11);

/* 2. 숫자에서 사용할 수 있는 표준 내장 객체 */
/**************************************/
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number

//.toFixed()
//숫자를 지정된 고정 소수점 표기(자릿수)까지 표현하는 문자로 반환한다.
const num = 3.14155926535;
console.log(num.toFixed(2)); //3.14 라는 문자 데이터 출력
console.log(typeof num.toFixed(2)); //문자 데이터
console.log(parseFloat(num.toFixed(2)));
console.log(typeof parseFloat(num.toFixed(2)));

//.toLocaleString()
//숫자를 현지 언어 형식의 문자로 반환한다.
const num1 = 1000000;
console.log(num1.toLocaleString());
console.log(`${num1.toLocaleString()}원`);

//Number.isInteger()
//숫자가 정수인지 확인한다.
const num2 = 123;
const pi = 3.14;
console.log(Number.isInteger(num2)); //true
console.log(Number.isInteger(pi)); //false

//Number.isNaN()
//주어진 값이 'NaN'인지 확인한다.
const num3 = NaN;
const num4 = 123;
const str12 = "Hello";
const nul = null;
console.log(Number.isNaN(num3));
console.log(Number.isNaN(num4));
console.log(Number.isNaN(str12));
console.log(Number.isNaN(nul));

//Number.parseInt() 또는 parseInt()
//주어진 값(숫자, 문자)를 파싱해 특정 진수(radix)의 정수로 반환.
const str13 = "3.1415926535";
const num5 = 3.1415926535;
console.log(Number.parseInt(str13, 10));
console.log(parseInt(num5));

//Number.parseFloat() 또는 parseFloat()
//주어진 값(숫자, 문자)를 파싱해 부동소수점 실수로 반환(숫자).
const str14 = "3.1415926535";
const num6 = 3.1415926535;
console.log(Number.parseFloat(str14));
console.log(Number.parseFloat(num6));

/* 3. Math에서 사용할 수 있는 표준 내장 객체 */
/**************************************/
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math

//Math.abs()
//주어진 숫자의 절대값을 반환
console.log(Math.abs(2));
console.log(Math.abs(-2));

//Math.ceil()
//주어진 숫자를 올림해 정수를 반환
console.log(Math.ceil(3.1415926535));

//Math.floor()
//주어진 숫자를 내림해 정수를 반환
console.log(Math.floor(3.1415926535));

//Math.max()
//주어진 숫자들 중에서 가장 큰 숫자를 반환
console.log(Math.max(1, 22, 354, 6678));

//Math.min()
//주어진 숫자 중 가장 작은 숫자를 반환
console.log(Math.min(1, 22, -38, 192));

//Math.pow()
//주어진 숫자의 거듭제곱한 값을 반환
console.log(Math.pow(4, 2));
console.log(Math.pow(7, 2));
console.log(Math.pow(10, 3));

//Math.random()
//숫자 0 이상, 1 미만의 난수를 반환
console.log(Math.random());

//특정 범위의 랜덤 정수를 얻는 함수
function random(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(random());
console.log(random(11, 20));
console.log(random(101, 999));

//Math.round()
//주어진 숫자를 반올림해 정수를 반환
const num7 = 3.141;
const num8 = 3.768;
console.log(Math.round(num7));
console.log(Math.round(num8));

/* 4. Date에서 사용할 수 있는 표준 내장 객체 */
/**************************************/

//타임스탬프
const date = new Date();
const d1 = new Date(2000, 11, 15, 3, 56, 54);
const d2 = new Date("Fri Dec 15 2000 03:56:54 GMT+0900 (한국 표준시)");
console.log(date);
console.log(d1);
console.log(date.getFullYear());

//.getFullYear() 와 setFullYear()
//날짜 인스턴스의 '연도'를 반환하거나 지정
const date1 = new Date();
console.log(date1.getFullYear());
date1.setFullYear(2085);
console.log(date1.getFullYear());
console.log(date1);

//.getMonth() 와 .setMonth()
//날짜 인스턴스의 '월'을 반환하거나 저장
//0부터 시작(Zero-based numbering)한다. 주의
const date2 = new Date();
console.log(date2.getMonth());
console.log(date2);
date2.setMonth(0);
console.log(date2.getMonth());
console.log(date2); //January 출력

//.getDate() 와 setDate()
//날짜 인스턴스 '일'을 반환하거나 지정한다.
const date3 = new Date();
console.log(date3.getDate());
console.log(date3);
date3.setDate(10);
console.log(date3.getDate());
console.log(date3);

//.getHours() 와 .setHours()
//날짜 인스턴스의 '시간'을 반환하거나 지정한다.
const date4 = new Date();
console.log(date4.getHours());
console.log(date4);
date4.setHours(10);
console.log(date4.getDate());
console.log(date4);

//.getMinutes() 와 .setMinutes()
//날짜 인스턴스의 '분'을 반환하거나 지정한다.
const date5 = new Date();
console.log(date5.getMinutes());
console.log(date5);
date5.setMinutes(2);
console.log(date5.getMinutes());
console.log(date5);

//.getSeconds() 와 setSeconds()
//날짜 인스턴스의 '초'를 반환하거나 지정한다.
const date6 = new Date();
console.log(date6.getSeconds());
console.log(date6);
date6.setSeconds(55);
console.log(date6.getSeconds());
console.log(date6);

//.getDay()
//날짜 인스턴스의 '요일'을 반환
const date7 = new Date();
const day = date7.getDay();
console.log(day);
console.log(getDayKo(day));

function getDayKo(day) {
  switch (day) {
    case 0:
      return "일요일";
    case 1:
      return "월요일";
    case 2:
      return "화요일";
    case 3:
      return "수요일";
    case 4:
      return "목요일";
    case 5:
      return "금요일";
    case 6:
      return "토요일";
  }
}

//.getTime()와 .setTime()
// `1970-01-01 00:00:00' 유닉스타입부터 경과한,
//날짜 인스턴스의 '밀리초(ms)' 로 반환하거나 지정한다.
const date8 = new Date();
console.log(date8.getTime());
console.log(date8);

date8.setTime(1700000000000000);
console.log(date8.getTime());
console.log(date8);

Date.prototype.isAfter = function (date) {
  const a = this.getTime();
  const b = date.getTime();
  return a > b;
};

const d3 = new Date("Sat Jan 01 2023 00:00:00 GMT+0900 (한국 표준시)");
const d4 = new Date("Sat Jan 01 2024 00:00:00 GMT+0900 (한국 표준시)");
console.log(d3.isAfter(d4)); //false
console.log(d4.isAfter(d3)); //true

//Date.now()
//'1970-01-01 00:00:00' 유닉스 타입부터 경과한,
//메소드가 호출될 때의 '밀리초(ms)'로 반환합니다.
const time = new Date().getTime();
console.log(Date.now());
console.log(time);

// setTimeout(() => {
//   console.log(Date.now());
//   console.log(time);
// }, 0000 );

/* 5. 배열(Array) 에서 사용할 수 있는 표준 내장 객체 */
/**************************************/
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

//.length
//배열의 길이(숫자)를 반환
const arr = ["A", "B", "C"];
console.log(arr.length);

//.at()
//대상 배열을 인덱싱한다.
//음수 값을 사용하면 뒤에서부터 인덱싱한다.
const arr1 = ["A", "B", "C"];
console.log(arr1[0]);
console.log(arr1.at(0));
console.log(arr1[arr1.length - 1]);
console.log(arr1.at(-1));
console.log(arr1[arr1.length - 2]);
console.log(arr1.at(-2));

//.concat()
//대상 배열과 주어진 배열을 병합해 새로운 배열을 반환
const arr2 = ["A", "B", "C"];
const arr3 = ["D", "E", "F"];
const arr4 = arr2.concat(arr3);
console.log(arr2);
console.log(arr3);
console.log(arr4);
const arr5 = [...arr2, ...arr3];
console.log(arr5);

//.every()
//대상 배열의 모든 요소가 콜백 테스트에서 참(Truthy)를 반환하는지 확인
const arr6 = [1, 2, 3, 4];
const isValid = arr6.every((item) => item < 5);
console.log(isValid); //true
const isValid2 = arr6.every((item) => item < 4);
console.log(isValid2); //false

//.filter()
//주어진 콜백 테스트를 통과(Truthy)를 반환하는 모든 요소를 새로운 배열로 반환
//모든 요소가 테스트를 통과하지 못하면 빈 배열을 반환
const numbers = [1, 20, 5, 6, 7, 8, 59];
const filteredNumbers = numbers.filter((number) => number < 30);
console.log(filteredNumbers);

const users = [
  { name: "Neo", age: 85 },
  { name: "Amy", age: 22 },
  { name: "Lewis", age: 11 },
];
const adults = users.filter((user) => user.age >= 20);
console.log(adults);

//.find()
//대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소를 반환
const arr7 = [5, 6, 8, 120, 42, 45];
const foundItem = arr7.find((item) => item > 10);
console.log(foundItem);

const userList = [
  { name: "Neo", age: 85 },
  { name: "Amy", age: 22 },
  { name: "Lewis", age: 11 },
];
const foundUser = userList.find((user) => user.name === "Amy");
console.log(foundUser);

//.findIndex()
//대상 배열에서 콜백 테스틀 통과하는 첫 번째 요소의 인덱스를 반환
const arr8 = [5, 8, 130, 12, 44];
//            0  1    2   3   4
const index = arr8.findIndex((item) => item > 10);
console.log(index);

//.flat)()
//대상 배열의 모든 하위 배열을 지정한 깊이까지 이어붙인 새로운 배열을 생성
//깊이의 기본값은 1
const arr9 = [1, 2, [3, 4]];
console.log(arr9.flat());
console.log(arr9);
const arr10 = [1, 2, [3, 4, [5, 6]]];
console.log(arr10.flat(2));
const arr11 = [1, 2, [3, 4, [5, 6, [7, 8, 9]]]];
console.log(arr11.flat(3));
//깊이 상관없이 모든 내용 하나의 배열로
console.log(arr11.flat(Infinity));

//.forEach()
//대상 배열의 길이만큼 주어진 콜백을 실행
//반복문을 중간에 종료할 필요가 없는 경우 사용
const arr12 = ["A", "B", "C"];
arr12.forEach((item) => console.log(item)); //콜백이 반드시 배열의 길이만큼 실행됨
for (let i = 0; i < arr12.length; i++) {
  //break, return 있을시 중간에 반복을 멈출 수 있음
  console.log(arr12[i]);
}

//.includes()
//대상 배열이 특정 요소를 포함하고 있는지 확인
const arr13 = [1, 2, 3];
console.log(arr13.includes(2));
console.log(arr13.includes(7));

const arr14 = ["Apple", "Banana", "Cherry"];
console.log(arr14.includes("Apple")); // true
console.log(arr14.includes("cherry")); //false : 대소문자 구별

const userList2 = [
  { name: "Neo", age: 85 },
  { name: "Amy", age: 22 },
  { name: "Lewis", age: 11 },
];
console.log(userList2.includes({ name: "Neo", age: 85 })); //false!
//자바스크립트에는 참조형(객체,배열,함수) , 원시형 데이터으로 나뉘는데,
//참조형 데이터들은 외관상 똑같아도, 서로 다른 데이터일 수 있다.
//이 부분은 데이터의 불변성과 가변성 섹션에서 따로 아주 뒤에서 설명

const neo = userList2[0]; //할당된 메모리의 주소를 비교하게 된다.
console.log(userList2.includes(neo)); //true
// 즉 ,할당된 메모리의 주소가 userList2에 포함되느냐 = true

//.join()
//대상 배열의 모든 요소를 구분자로 연결한 문자를 반환
const arr15 = ["Apple", "Banana", "Cherry"];
console.log(arr15.join(","));
console.log(arr15.join(", "));
console.log(arr15.join(""));

//.map()
//대상 배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환 값을 모아 새로운 배열을 반환
const numList = [1, 2, 3, 4];
const newNumList = numList.map((item) => item * 2);
console.log(newNumList);
console.log(numList);

const userList3 = [
  { name: "Neo", age: 85 },
  { name: "Amy", age: 22 },
  { name: "Lewis", age: 11 },
];
const newUserList3 = userList3.map((user) => {
  return {
    ...user,
    isValid: true,
    email: null,
  };
});
console.log(newUserList3);

//.pop()
//대상 배열에서 마지막 요소를 제거하고 그 요소를 반환
//대상 배열 원본이 변경된다.
const fruitsAList = ["Apple", "Banana", "Cherry"];
console.log(fruitsAList.pop());
console.log(fruitsAList);

//.push()
//대상 배열에서 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환.
//대상 배열 원본이 변경된다.
const fruitsBList = ["Apple", "Banana", "Cherry"];
console.log(fruitsBList.push("Orange")); //4 출력
console.log(fruitsBList); //새롭게 추가된 배열 출력
fruitsBList.push("Mango", "StrawBerry");
console.log(fruitsBList); //새롭게 추가된 배열 출력

//.reduce()
//대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환값 반환
//각 콜백의 반환 값은 다음 콜백으로 전달
const numberList = [1, 2, 3];
const sum = numberList.reduce((acc, cur) => {
  return acc + cur;
}, 0); //초기값이 없을 경우, acc = numberList[0] 가 디폴트값
const sumSimple = numberList.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

const userList4 = [
  { name: "Neo", age: 85 },
  { name: "Amy", age: 22 },
  { name: "Lewis", age: 11 },
];

const totalAge = userList4.reduce((acc, cur) => acc + cur.age, 0);
console.log(totalAge);
console.log(`평균: ${(totalAge / userList4.length).toFixed(1)}세`);
const namesArray = userList4.reduce((acc, cur) => {
  acc.push(cur.name);
  return acc;
}, []); //혹은 여기서 바로 메소드 체이닝으로 .join(", ") 할 수 있다.
const names = namesArray.join(", ");
console.log(names);

//.reverse()
//대상 배열의 순서를 반전시킨다.
//대상 배열 원본이 변경된다.
const arr16 = ["A", "B", "C"];
const reversedArr = arr16.reverse();
console.log(reversedArr);
console.log(arr16); //원본 배열 수정된다.

//.shift()
//대상 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환
//대상 배열 원본이 변경된다.
const arr17 = ["A", "B", "C"];
console.log(arr17.shift()); // A
console.log(arr17); // ['B','C']

//.slice()
//대상 배열의 일부를 추출해 새로운 배열을 반환.
//두 번째 인수 직전까지 추출하고, 두번째 인수를 생략하면 대상 배열의 끝까지 추출
//문자열의 slice와 같은 방식
const arr18 = ["A", "B", "C", "D", "E", "F", "G"];
console.log(arr18.slice(0, 3));
console.log(arr18.slice(4, -1));
console.log(arr18.slice(4));
console.log(arr18); //원본 배열 그대로

//.some()
//대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인한다.
const arr19 = [1, 2, 3, 4];
const isValidSome = arr19.some((item) => item > 3);
const isValidSomeFalse = arr19.some((item) => item > 4);

console.log(isValidSome); //4에서 테스트 통과하므로 true 반환
console.log(isValidSomeFalse); //테스트 통과하는게 없으므로 false 반환

//.sort()
//대상 배열을 콜백의 반환 값(음수, 양수, 0)에 따라 정렬한다.
//콜백을 제공하지 않으면, 요소를 문자열로 변환하고, 유니코드 코드 포인터 순서로 정렬
//대상 배열 원본이 변경된다.
const numberList2 = [4, 17, 2, 103, 3, 1, 0];
numberList2.sort(); //요소를 문자로 바꾸고 유니코드화 시킨 후 코드 포인터 순서로 정렬
console.log(numberList2);
numberList2.sort((a, b) => a - b);
console.log(numberList2); //정상적으로 오름차순 정렬
// 4 - 17 = -13 -> 음수, a,b 순서 그대로 -> 라고 생각하면 편리.
numberList2.sort((a, b) => b - a);
console.log(numberList2); //정상적으로 내림차순 정렬
// 17 - 4 = 13 -> 양수, a,b 순서 서로 바꾸기 -> 라고 생각하면 편리.
// 반환값이 0 일경우 -> 순서 정렬 보류 즉, 순서 그대로 -> 라고 생각하면 편리.

const userList5 = [
  { name: "Neo", age: 85 },
  { name: "Amy", age: 22 },
  { name: "Lewis", age: 11 },
];
userList5.sort((a, b) => a.age - b.age);
console.log(userList5);
userList5.sort((a, b) => b.age - a.age);
console.log(userList5);

//.splice()
//대상 배열에 요소를 추가하거나 삭제하거나 교체한다.
//대상 배열 원본이 변경된다
const arr20 = ["A", "B", "C"];
arr20.splice(2, 0, "X"); // 몇번째 인덱스 위치, 삭제하고싶은 개수, 추가할 아이템
console.log(arr20);
arr20.splice(1, 1); // 'B' 제거
console.log(arr20);
arr20.splice(2, 0, "Y", "Z");
console.log(arr20);
arr20.splice(0, 1, "W"); //'A' -> 'W' 로 교체
console.log(arr20);

//.unshift()
//새로운 요소를 대상 배열의 맨 앞에 추가하고, 새로운 배열의 길이를 반환.
//대상 배열 원본이 변경된다
const arr21 = ["A", "B", "C"];
console.log(arr21.unshift("X")); //4 출력
console.log(arr21);

//Array.from()
//정적 메소드
//유사 배열(Array-like)를 실제 배열로 반환한다.
const arrayLike = {
  0: "A",
  1: "B",
  2: "C",
  length: 3,
}; //실제 유사배열 구조
console.log(arrayLike.constructor === Array); //false
console.log(arrayLike.constructor === Object); //true
Array.from(arrayLike).forEach((item) => console.log(item));

//Array.isArray()
//배열 데이터인지 확인한다.
const arr22 = ["A", "B", "C"]; //배열 데이터
const arrayLike2 = {
  0: "A",
  1: "B",
  2: "C",
  length: 3,
}; //유사배열 객체 데이터
console.log(Array.isArray(arr22)); //true
console.log(Array.isArray(arrayLike2)); //false

/* 6. 객체(Object) 에서 사용할 수 있는 표준 내장 객체 */
/**************************************/
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object

//Object.assign()
//하나 이상의 출처(Source) 객체로부터 대상(Target) 객체로 속성을 복사하고 대상 객체를 반환
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };
const result = Object.assign(target, source1, source2);
console.log(target); //target 객체 데이터 변경
console.log(result); //겹치는 속성 덮어씌워지는것 주의
const newTarget = Object.assign({}, source1, source2);
console.log(newTarget);
const newTargetSpread = { ...source1, ...source2 }; //전개 연산자 사용
console.log(newTargetSpread);

//Object.entries()
//주어진 객체의 각 속성과 값으로 하나의 배열 만들어 요소로 추가한 2차원 배열을 반환
const movieChar = {
  name: "Neo",
  age: "36",
  isValid: true,
  movie: "Matrix",
};
console.log(Object.entries(movieChar));
for (const [key, value] of Object.entries(movieChar)) {
  console.log(key, value);
}

//Object.keys()
//주어진 객체의 속성 이름을 나열한 배열을 반환
const movieChar2 = {
  name: "Trinity",
  age: "33",
  isValid: false,
  movie: "Matrix",
};
console.log(Object.keys(movieChar2));

//Object.values()
//주어진 객체의 속성 값을 나열한 배열을 반환
const movieChar3 = {
  name: "Morphious",
  age: "50",
  isValid: true,
  movie: "Matrix",
};
console.log(Object.values(movieChar3));

/* 7. JSON(JavaScript Object Notation) */
/**************************************/
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON
//데이터 전달을 위한 표준 포맷
//문자, 숫자, 불린, Null, 객체, 배열 데이터만 사용
//문자는 큰 따음표만 사용 ""
//후행 쉼표 사용 불가( const a = {x:1, y:2,} ) -> ( const a = {x:1, y:2} )
//.json 확장자 사용

//JSON.stringify()
//데이터를 JSON 문자로 변환한다.
//리턴타입 모두 string
console.log(JSON.stringify("Hello world!"));
console.log(JSON.stringify(123));
console.log(JSON.stringify(false));
console.log(JSON.stringify(null));
console.log(JSON.stringify({ name: "John", age: 66 }));
console.log(JSON.stringify([1, 2, 3]));

console.log("// --------------------- //");

//JSON.parse()
//JSON 문자를 분석해 자바스크립트의 데이터로 변환한다.
//JSON 문자는 큰 따음표가 붙어있는 하나의 덩어리라고 생각
//console.log(JSON.parse("Hello world!"));// 에러
console.log(JSON.parse('"Hello world!"'));
console.log(JSON.parse("123"));
console.log(JSON.parse("false"));
console.log(JSON.parse("null"));
console.log(JSON.parse('{ "name": "John", "age": 66 }'));
console.log(JSON.parse("[1, 2, 3]"));
//package.json도 JSON 파일이다

//JSON 파일을 가져와서 사용하게 되면, parcel 번들러를 통해 자동으로 분석이되서
//자바스크립트의 데이터로 사용할 수 있다.
//하나의 JSON 파일이 하나의 JSON 데이터이다.
import abc from "./test.json";
console.log(abc);
