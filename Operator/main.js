/* 1. 산술 연산자 */
/**************************************/
console.log(1 + 2);
console.log(1 - 2);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(3));
console.log(isEven(12));

/* 2. 힐당 연산자 */
/**************************************/
let a = 3;
console.log(a);
a = a + 2;
a += 2; //더하기 할당 연산자
a -= 2; //빼기 할당 연산자
a *= 2; //곱하기 할당 연산자
a /= 2; //나누기 할당 연산자
a /= 2; //나누기 할당 연산자
//a %= 1; //나머지 할당 연산자
console.log(a);

/* 3. 증감 연산자 */
/**************************************/
let aID = 3;
console.log(aID++);
console.log(++aID);
console.log(aID--);
console.log(--aID);
//증감보다는 더하기/빼기 할당 연산자 사용 권장

/* 4. 부정 연산자 */
/**************************************/
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!!0);
console.log(!null);
console.log(!undefined);
console.log(!NaN);
console.log(!"");
console.log(!{});
console.log(![]);

/* 5. 비교 연산자 */
/**************************************/
const aComp = 1;
const bComp = 3;
console.log(aComp == bComp); //false 동등 연산자
console.log(aComp != bComp); //true 부등 연산자
console.log(aComp === bComp); //true 일치 연산자
console.log(aComp !== bComp); //true 불일치 연산자
console.log(aComp > bComp);
console.log(aComp >= bComp);
console.log(aComp < bComp);
console.log(aComp <= bComp);

/* 6. 논리 연산자 */
/**************************************/
//AND 연산자
const aLogic = true;
const bLogic = true;
if (aLogic && bLogic) {
  console.log("모두가 참!");
}
if (aLogic || bLogic) {
  console.log("하나 이상이 참!");
}
console.log(1 && 0); //왼쪽부터 읽어서 가장 먼저 만나는 falsy 값 반환
console.log(1 && 2 && 0);
console.log(1 && 0 && 2);
console.log(0 && 1 && 2);
console.log("A" && "B" && "");
console.log("A" && "B" && "C"); //모두가 참일 경우 마지막 만나는 값 반환

//OR 연산자
console.log(false || true);
console.log(0 || 1); //왼쪽부터 읽어서 가장 먼저 만나는 truthy 값 반환
console.log(false || 0 || {});
console.log(false || [] || null);
console.log(function () {} || undefined || "");
console.log(false || 0 || NaN); //모두가 거짓일 경우 마지막 만나는 값 반환

//Nullish 병합 연산자
const n = 0; // 의도한건 NULl 임. 그러므로
const num1 = n || 7;
console.log(num1);

//Nullish 병합 연산자를 사용한 경우
const num2 = n ?? 7;
console.log(num2); //왼쪽부터 읽어서 null, undefined 제외하고 처음에 만나는 값 반환
console.log(null ?? 1); //1
console.log(undefined ?? 2);
console.log(null ?? undefined); //undefined
console.log(null ?? 1 ?? 2);
console.log(false ?? 1 ?? 2);
console.log(0 ?? 1 ?? 2);

//삼항 연산자
const aTern = 1;
if (aTern < 2) {
  console.log("참!");
} else {
  console.log("거짓...!");
}
console.log(a < 2 ? "참!" : "거짓...");

function getAlert(message) {
  return message ? message : "메세지가 존재하지 않습니다!";
}
console.log(getAlert("안녕하세요~"));
console.log(getAlert(""));

/* 7. 전개 연산자(Spread Operator) */
/**************************************/
const aSpread = [1, 2, 3];
console.log(...aSpread); //.... : 데이터를 쫙 펼쳐서 전개한다
console.log(1, 2, 3);
const bSpread = [4, 5, 6];

const cSpread = aSpread.concat(bSpread);
console.log(cSpread);
const dSpread = [aSpread, bSpread];
console.log(dSpread);
const eSpread = [...aSpread, ...bSpread]; //배열 데이터의 괄호를 날려준다.
console.log(eSpread);
const fSpread = { x: 1, y: 2 };
const gSpread = { y: 3, z: 4 };
const hSpread = Object.assign({}, fSpread, gSpread); //f,g가 병합된 새로운 객체 데이터
console.log(hSpread);
const jSpread = { fSpread, gSpread };
console.log(jSpread);
const kSpread = { ...fSpread, ...gSpread }; //assign 이랑 같은 효과, 굉장히 많이 쓰임
console.log(kSpread);

function fn(x, y, z) {
  console.log(x, y, z);
}
fn(1, 2, 3);
const aFn = [1, 2, 3];
fn(aFn[0], aFn[1], aFn[2]);
fn(aFn); // x = [1,2,3] y,z = undefined
fn(...aFn); // 1,2,3

/* 8. 구조 분해 할당(Destructuring assignment) */
/**************************************/
//배열데이터에서 구조 분해 할당을 어떻게 사용하는지에 관해

const arrDA = [1, 2, 3]; //뒤에 세미콜론 무조건 개인적으로 필수라고 생각한다.
const aDA = arrDA[0];
const bDA = arrDA[1];
const cDA = arrDA[2];
console.log(aDA, bDA, cDA);
const [aDas, bDas, cDas] = arrDA;
console.log(aDas, bDas, cDas);

//세미콜론 앞에 붙이는 방식일 경우 협업 시 난독 문제.

let aLDA = 0;
let bLDA = 0;
let cLDA = 0;
[aLDA, bLDA, cLDA] = arrDA;
console.log(aLDA, bLDA, cLDA);

//구조분해 할당의 디졸브 효과
const arrDB = [1, 2, 3];
const [aDB, restDB] = arrDB;
console.log(aDB, restDB); //1, 2만 출력됨
const [bDC, ...restDC] = arrDB;
console.log(bDC, restDC);

//구조분해 할당의 객체에서 활용
const objDA = {
  aKey: 1,
  bKey: 2,
  cKey: 3,
  tKey: 6,
  nKey: 7,
  pKey: 8,
  mKey: 9,
};

const aDD = objDA.aKey;
const bDD = objDA.bKey;
const cDD = objDA.cKey;
console.log(aDD, bDD, cDD);
const { aKey, bKey, cKey } = objDA;
console.log(aKey);
console.log(bKey);
console.log(aKey, bKey, cKey);
const { xKey } = objDA;
console.log(xKey); //undefined
const { yKey = 4 } = objDA;
console.log(yKey); //undefined 라면 4 (기본값) 출력
const { tKey = 5 } = objDA;
console.log(tKey); // 6 출력
//변수명 바꾸고 싶을때
const { aKey: changedName } = objDA;
console.log(changedName); //aKey 의 값 1,  const changedName = 1
const { nKey, aKey: aCN, notExistKey: tenKey = 10 } = objDA; //notExistKey는 undefined 그러므로 기본값 10출력
console.log(nKey, aCN, tenKey);

//객체에서의 전개연산자 사용
const { pKey, restKey } = objDA;
console.log(pKey, restKey); //8, undefined
const { mKey, ...restKeyDatas } = objDA;
console.log(mKey, restKeyDatas);

/* 9. 선택적 체이닝(Optional Chaining) */
/**************************************/

const userOC = {};
console.log(userOC.name);
const userOCN = null;
const userOCU = undefined;
//console.log(userOCN.name); // null 타입에러,
//console.log(userOCU.name); // undefined 타입에러,
//객체가 null, undefined 일 경우 점표기법 사용불가 -> 선택적 체이닝 사용
console.log(userOCN?.name); //null 에러발생 안함 : 출력 undefined
console.log(userOCU?.name); //undefined 에러발생 안함 : 출력 undefined
//어느 상황에 쓰는지
const userAOC = {
  name: "Harry",
  age: 17,
  address: {
    country: "England",
    city: "Hogwart",
  },
};
const userBOC = {
  name: "Ron",
  age: 15,
};

function getCity(user) {
  return user.address.city;
}
console.log(getCity(userAOC));
//console.log(getCity(userBOC)); //undefined 에러 발생

function getCityFixed(user) {
  //에러 발생 방지하기 위함
  return user.address?.city;
}
console.log(getCityFixed(userAOC));
console.log(getCityFixed(userBOC)); //undefined 에러 발생안함, 출력은 undefined

function getCityFixedTwo(user) {
  //에러 발생 방지하기 위함
  return user.address?.city || "주소 없음";
}
console.log(getCityFixedTwo(userAOC));
console.log(getCityFixedTwo(userBOC)); //undefined 에러 발생안함, 출력은 '주소 없음'
//주의점 : 있을수도 있고 없을수도 있는 특수상황에서만 쓰고, 일반적인 상황에서 남용하지말기

/* 10. If 조건문 */
/**************************************/
function isPositive(number) {
  if (number > 0) {
    return "양수";
  } else if (number < 0) {
    return "음수";
  } else {
    return "0";
  }
}
console.log(isPositive(1));
console.log(isPositive(10));
console.log(isPositive(-2));
console.log(isPositive(0));

/* 11. Switch 조건문 */
/**************************************/
//어떤 조건이 특정한 값일 경우 특정 케이스 실행
function price(fruit) {
  let p;
  switch (fruit) {
    case "Apple":
      p = 1000;
      break;
    case "Banana":
      p = 1500;
      break;
    case "Cherry":
      p = 2000;
      break;
    default:
      p = 0;
  }
  return p;
}
console.log(price("Apple"));
console.log(price("Banana"));
console.log(price("Cherry"));
console.log(price("Terminator"));

function priceRevision(fruit) {
  switch (fruit) {
    case "Apple":
      return 1000;
    case "Banana":
      return 1500;
    case "Cherry":
      return 2000;
    default:
      return 0;
  }
}
console.log(priceRevision("Apple"));
console.log(priceRevision("Banana"));
console.log(priceRevision("Cherry"));
console.log(priceRevision("Terminator"));

function priceRevisionTwo(fruit) {
  if (fruit === "Apple") {
    return 1000;
  } else if (fruit === "Banana") {
    return 1500;
  } else if (fruit === "Cherry") {
    return 2000;
  } else {
    return 0;
  }
}
console.log(priceRevisionTwo("Apple"));
console.log(priceRevisionTwo("Banana"));
console.log(priceRevisionTwo("Cherry"));
console.log(priceRevisionTwo("Terminator"));
//취향껏 사용

/* 12. For 반복문 */
/**************************************/

for (let i = 0; i < 10; i += 1) {
  console.log(i);
}
for (let i = 9; i > -1; i -= 1) {
  console.log(i);
}
for (let i = 0; i < 10; i += 1) {
  if (i > 4) {
    break;
  }
  console.log(i);
}
for (let i = 0; i < 10; i += 1) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

/* 13. For of 반복문 */
/**************************************/

const fruitsFO = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruitsFO.length; i++) {
  console.log(fruitsFO[i]);
}
for (const fruit of fruitsFO) {
  console.log(fruit);
}

const usersFO = [
  {
    name: "Leo",
    age: 24,
  },
  {
    name: "Jin",
    age: 33,
  },
  {
    name: "Edie",
    age: 20,
  },
];
for (const user of usersFO) {
  console.log(user);
}
for (const user of usersFO) {
  console.log(user.name);
}

/* 14. For in 반복문 */
/**************************************/
const userIN = {
  name: "Jack",
  age: "unknown",
  isValid: true,
  email: "tekken@gmail.com",
};
for (const key in userIN) {
  console.log(key);
}
for (const key in userIN) {
  console.log(userIN[key]); //순서 보장 안된다
  //단순하게, 객체 데이터가 가지고 있는 속성의 개수만큼 반복을 한다
}

/* 15. While 반복문 */
/**************************************/
//무한 반복 조심

let nWh = 0;
while (nWh < 4) {
  console.log(nWh);
  nWh += 1;
}

/* 16. Do While 반복문 */
/**************************************/
//되도록이면 쓰지말것것
let nDw = 0;
while (nDw) {
  console.log(nDw);
} // 실행하기 위해서
do {
  console.log(nDw);
  nDw += 1;
} while (nDw < 4);
