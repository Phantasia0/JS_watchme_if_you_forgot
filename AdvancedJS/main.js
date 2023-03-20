//심화 내용

/* 1. 심볼(Symbol) */
/**************************************/
//변경이 불가능한 데이터이며,
//유일한 식별자를 만들어 데이터를 보호하는 용도로 사용한다.

//Symbol('설명')
//'설명'은 단순 디버깅을 위한 용도일 뿐, 심볼 값과는 상관없다.

const sKey = Symbol("Hello!");
const user = {
  key: "일반 정보!",
  [sKey]: "민감한 정보!",
};

console.log(user.key);
console.log(user["key"]);
console.log(user[sKey]);
console.log(user[Symbol("Hello!")]); //undefined
console.log(sKey);
//유일한 식별자를 만들어서 어떤 정보를,
//특정 심볼 데이터가 없으면 조회할 수 없도록 만들 수 있다.

//index.html + main2.js 이동
