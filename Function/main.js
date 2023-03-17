//함수(Function)

//함수 선언문(Declaration)
function helloDe() {}

//함수 표현식(Expression)
const helloEx = function () {};

//동일하게 사용방법은 같다. 함수호출
//helloDe();
//helloEx();

//호이스팅(Hoisting) 에서 차이가 난다. 자바스크립트에서는 선언문은 가장 먼저 해석된다는 개념
helloHo(); //이것도 호출된다. 함수 선언에서 호이스팅이 이루어지기 때문에 가능
function helloHo() {
  console.log("Hello~");
} //함수 선언
//helloHo();

//helloHoEx(); //에러
const helloHoEx = function () {
  console.log("Hello~");
};
//helloHoEx(); 에러 안남

//보통 개인적인 설계방법
//호이스팅을 이용하여, 추상적으로 함수 호출을 위에서 하고, 아래에 함수구현을 선언문으로 한다.

//world(); //에러 : 이제 aello 기명함수는 표현식이 되어버렸으므로
//aello 라는 기명함수를 할당연산자를 통해 표현식으로 만들게 되면, 새롭게 world라는 이름으로 활용해야함
const world = function aello() {
  console.log("Hello~");
};
//world(); // 에러 안남

//반환 및 종료
function bello() {
  return "Hello~!"; //함수 종료 역할도 한다
  console.log("Wow~"); //실행X
}
console.log(bello());

function cello() {
  return; // 암시적으로 return undefined; undefined 리턴
}
console.log(cello());

function dello() {
  //이것도 암시적으로 return undefined; undefined 리턴
}
console.log(dello());

function plus(num) {
  return num + 1;
}
console.log(plus(2));
console.log(plus(7));
console.log(plus()); //NaN : num은 undefined -> undefined +1 = NaN

function plusA(num) {
  if (typeof num !== "number") {
    console.log("숫자를 입력하라고요!");
    return 0;
  }
  return num + 1;
}
console.log(plusA());

//매개변수 패턴(Parameter pattern)
////기본값(Default value)

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));
console.log(sum(7)); //NaN

function sumFixed(a, b = 1) {
  return a + b;
}
console.log(sumFixed(1, 3)); //b가 undefined가 아니므로 b = 3
console.log(sumFixed(7)); //b의 기본값은 1이므로

////구조 분해 할당
const user = {
  name: "John",
  age: 85,
};
function getName(user) {
  return user.name;
}
console.log(getName(user));

function getNameDA(user) {
  const { name } = user;
  return name;
}
console.log(getNameDA(user));

//매개변수에서 객체 구조 분해 할당해서 받음
function getNameDAS({ name }) {
  return name;
}
console.log(getNameDAS(user));

function getEmail({ email }) {
  return email;
}
console.log(getEmail(user)); //undefined

function getEmailFix({ email = "이메일이 없습니다." }) {
  return email;
}
console.log(getEmailFix(user));

//매개변수의 배열 구조분해 할당
const fruits = ["Apple", "Banana", "Cherry"];
const numbers = [1, 2, 3, 4, 5, 6, 7];

function getSecondItem(array) {
  return array[1];
}
console.log(getSecondItem(fruits));

function getSecondItemDA([a, b, c]) {
  //[,b] 매개변수도 가능
  return b;
}
console.log(getSecondItemDA(fruits));
console.log(getSecondItemDA(numbers)); //2

//나머지 매개변수(Rest parameter)
function sum(...rest) {
  //a,b,c,d,...rest
  console.log(rest);
  return rest.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function sumArgu(...rest) {
  console.log(rest);
  console.log(arguments);
  //arguments 는 유사 배열 객체이다.
  //arguments는 함수로 들어오는 값들을 유사배열처럼 저장해놓긴하지만,
  //arguments는 배열이 아니므로 여러 고차함수를 사용할수 없으며
  //직관적이지 않으므로 사용을 안할 경우가 많다.
  //존재한다는 것과 유사 배열 객체라는 것만 기억해두자.
}
console.log(sumArgu(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//화살표 함수(Arrow function)
function sumA() {}
const sumB = function () {};
const sumArrow = () => {}; //자주 사용하게 된다.

function sumC(a, b) {
  return a + b;
}
console.log(sumC(1, 2));
console.log(sumC(10, 20));

const sumAR = (a, b) => {
  return a + b;
};
console.log(sumAR(1, 2));

const sumARS = (a, b) => a + b;
console.log(sumARS(1, 2));

//화살표 함수의 다양한 패턴
//할당연산자를 사용하므로, 함수 표현식이다.
const funcAR = () => {};
const funcBR = (x) => {}; //매개변수 하나일 경우 매개변수 괄호 생략 가능
const funcCR = (x, y) => {}; //생략 불가
const funcDR = (x) => {
  return x * x;
}; //중괄호에서 제일 처음 시작하는 키워드가 return 일경우 중괄호 생략 가능
const funcER = (x) => x * x;
const funcFR = (x) => {
  console.log(x * x);
  return x * x;
}; //중괄호 생략 불가
const funcGR = () => {
  return { a: 1 };
}; //이렇게 가장 앞 키워드 return 에 객체 리턴할 경우
const funcHR = () => ({ a: 1 }); // 소괄호 적용시켜줘야한다. << 특이사항
const funcIR = () => {
  return [1, 2, 3];
};
const funcJR = () => [1, 2, 3];

//화살표 함수는 함수 내부에서 사용하는 this 라는 키워드가 있는데,
//function , 화살표함수의 this 해석이 다르고, this에 대해서는 깊은 이해가 필요하므로
//this 파트에서 뒤에서 설명

//즉시실행함수(IIFE, Immediately-Invoked Function Expression)
const aFE = 7;

const double = () => {
  console.log(aFE * 2);
};
double();
//위와 같은 보통적인 방식에서

(() => {
  console.log(aFE * 3);
})();

//즉시실행함수의 다양한 사용패턴
(() => {})(); // (F)() << 일반적인 경우
(function () {})(); // (F)() << 일반적인 경우
(function () {})(); // (F())
!(function () {})(); // !F()
+(function () {})(); // +F()

((a, b) => {
  console.log(a);
  console.log(b);
})(1, 2);

((a, b) => {
  console.log(a.innerWidth);
  console.log(b.body);
})(window, document); //window 객체, document 객체
//이런 방식으로 코드의 난독화를 할 수 있다.

//콜백함수(Callback)
const aCB = (callback) => {
  console.log("A");
  callback();
};
const bCB = () => {
  console.log("B");
};
aCB(bCB);
//함수가 실행될때 인수로 들어가는 또 하나의 함수를 콜백이라 부른다.

const sumCB = (a, b, c) => {
  setTimeout(() => {
    c(a + b);
  }, 1000);
};
sumCB(1, 2, (value) => {
  console.log(value);
});
sumCB(3, 7, (value) => {
  console.log(value);
});

//콜백함수수의 다양한 활용
//https://www.gstatic.com/webp/gallery/3.jpg
const loadImage = (url, cb) => {
  const imgEl = document.createElement("img");
  imgEl.src = url;
  imgEl.addEventListener("load", () => {
    setTimeout(() => {
      cb(imgEl);
    }, 1000);
  });
};

const containerEl = document.querySelector(".container");
loadImage("https://www.gstatic.com/webp/gallery/3.jpg", (imgEl) => {
  containerEl.innerHTML = "";
  containerEl.append(imgEl); //메모리 상에 만들어져 있는 이미지 요소를 연결시킨다.
});

//재귀(Recursive)
let i = 0;
const aRC = () => {
  console.log("A");
  i += 1;
  if (i < 4) {
    aRC();
  }
};
aRC();

const userRA = { name: "A", parent: null }; //명시적으로 부모 요소는 없음을 나타냄
const userRB = { name: "B", parent: userRA };
const userRC = { name: "C", parent: userRB };
const userRD = { name: "D", parent: userRC };

const getRootUser = (user) => {
  if (user.parent) {
    return getRootUser(user.parent);
  }

  return user;
};
console.log(getRootUser(userRD));

//호출 스케줄링(Scheduling a function call)
//함수의 호출을 지연하거나 반복적으로 호출할수 있게 해주는 개념

const hello = () => {
  console.log("Hello~!");
};
setTimeout(() => {
  console.log("Hello~");
}, 2000);
const timeout = setTimeout(hello, 5000);
//clearTimeout(timeout); //필요에 따라 타이머 해제
const h1El = document.querySelector("h1");
h1El.addEventListener("click", () => {
  console.log("Clear!");
  clearTimeout(timeout); //필요에 따라 타이머 해제
  clearInterval(every);
});
const every = setInterval(hello, 2000);

/*  ***THIS*** 키워드 */
//중요
//반드시 명확히 이해해야한다.
//일반 함수의 this는 호출 위치에서 정의
//화살표 함수의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의
//여기서 렉시컬이란, 함수가 동작할 수 있는 유효한 범위를 의미

const userThisA = {
  firstName: "Harry",
  lastName: "Potter",
  age: 18,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`; //일반함수
  },
};
console.log(userThisA.getFullName()); //this는 호출위치인 userThisA

const userThisB = {
  firstName: "Grainger",
  lastName: "Hermion",
  age: 18,
  getFullName: () => {
    return `${this.firstName} ${this.lastName}`; //일반함수
  },
};
console.log(userThisB.getFullName());
//자신이 선언된 함수를 감싸고 있는 외부의 또다른 함수를 기준으로 this를 사용한다
//현재 코드에서는 또다른 함수는 없기 때문에 undefined undefined 출력됨

function userThisC() {
  this.firstName = "Ron";
  this.lastName = "Wizzley";
  return {
    firstName: "Grainger",
    lastName: "Hermion",
    age: 18,
    getFullName: () => {
      return `${this.firstName} ${this.lastName}`; //일반함수
    },
  };
}

const u = userThisC();
console.log(u.getFullName()); //Ron Wizzley
//할당 되는 데이터가 함수데이터일 경우 메소드라고 부른다.
//객체 데이터에서 멤버라고 한다면, 속성과 메소드를 아우른다.
//만약 메소드를 일반함수로 쓸경우 : function 생략 가능
function userThisD() {
  this.firstName = "Ron";
  this.lastName = "Wizzley";
  return {
    firstName: "Grainger",
    lastName: "Hermion",
    age: 18,
    getFullName() {
      return `${this.firstName} ${this.lastName}`; //일반함수
    },
  };
}
const uv = userThisD();
console.log(uv.getFullName());

//this 특성과 일반함수 메서드를 이용한 다른 객체의 데이터 사용

const voldmort = {
  firstName: "Lewis",
  lastName: "Zenson",
};
console.log(uv.getFullName.call(voldmort)); //호출 위치에서 this 가 정의되기때문에

//this 특성과 화살표 메서드를 이용한 사용
const timers = {
  title: "TIMER!",
  timeout() {
    console.log(this.title);
    setTimeout(() => {
      console.log(this.title);
      //timeout 이 외부함수가 된다. -> timeout은 일반함수이므로, timeout의 this는 timers
      //즉, setTimeout의 this 와 timeout의 this 는 모두 timeout의 호출위치인 timer가 된다.
    }, 1000);
  },
};
timers.timeout();

//되게 중요한 내용이며,
//되게 많이 쓰이는 것이므로
//THIS를 반드시 잘 알고 써야 한다!
