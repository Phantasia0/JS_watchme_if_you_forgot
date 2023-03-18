//모듈(Module)

/* 1. 모듈이란 */
/**************************************/
//자바스크립트에서는 우리가 사용할 수 있는, 어떤 데이터들의 집합을 이야기함.
//.js 확장자 파일로 그 집합을 만들 수 있고,
//특히 그 파일에서 가져오기(import) , 내보내기(Export)을 사용할 때 모듈이라고 부를 수 있다.
//EX. main.js는 하나의 파일이지만 모듈은 아니다.

//Ex. 만약 아래 처럼 import 키워드를 사용했다면 이제 main.js는 모듈이라고 부를 수 있다.
//{ hello }라고 쓴 이유
// { 변수명  } 처럼 import 해서 받아오려면, 그 변수명은 export 된 변수명과 일치해야한다.
import { hello } from "./testMod.js"; // testMod.js 의 hello 변수 가져옴.
console.log(hello); //testMod의 hello 데이터 출력

//앞으로 기능들은 각각의 파일로 구분될 것이며,
//그렇게 파일로 구분하는 개념 자체가 모듈화이다.
//프로젝트를 진행한다면, 모듈화 된 방식으로 진행하게 될 것이다.

/* 2. 모듈(module.js) 데이터 가져오기 */
/**************************************/

//a.기본 가져오기
//가져오고 싶은 데이터 , 이름은 원하는 변수명으로 가져올 수 있다.
import number from "./module.js";
console.log(number);

//b.이름 가져오기
import { str } from "./module.js";
console.log(str);

//합쳐서
//import number, { str } from "./module.js";
//가져오고 싶은 데이터만 { export된 이름 } 추가
import { arr, getSum, matrix } from "./module.js";
console.log(arr);
console.log(getSum);
console.log(matrix);

//c.이름 바꿔서 가져오기
//export 된 이름은 num 이지만, pi로 import하여 이 파일에서 쓰겟다.
import { num as pi } from "./module.js";
console.log(pi);

//d.모듈화된 파일에서 모든 export된 데이터를 가져오기
import * as everything from "./module.js"; //everything : 와일드 카드 <<라고 호칭
console.log(typeof everything); //하나의 객체 데이터로써 가져온다.
console.log(everything);

/* 3. 모듈(module.js)의 데이터를 동적으로 가져오기 */
/**************************************/
//원래 import 키워드는 js 파일의 최상단에 모아서 작성해야한다.
//앞 전에 작성한 import들도 사실은 이 파일 최상단에 위치해야한다.
//하지만 중간 중간 필요할 때 모듈 데이터를 가져오고 싶은 경우

//import() 함수를 사용해서 module을 가져오고,
//모듈을 가져오는데 걸리는 시간을 알 수 없기에,
//.then 메소드를 실행하여 모듈을 다 가져오면
// then 메소드 안의 콜백함수가 실행 될 수 있도록 한다.
setTimeout(() => {
  import("./module.js").then((allExInModule) => {
    //여기 내부에서만 allExInModule 사용
    console.log(allExInModule);
  });
}, 1000);

//추후 설명할 async await 패턴
//await키워드가 사용된 함수 async 키워드 추가
//비동기 개념 추후 설명
setTimeout(async () => {
  const waitUntillGetModule = await import("./module.js");
  console.log(waitUntillGetModule);
}, 1000);

/* 4. 실제 많이 쓰는 모듈화 패턴 */
/**************************************/
//a.js , b.js , utils.js 참고

import { a, b } from "./utils.js"; //사실 코드 최상단 위치 시켜야함
console.log(a());
console.log(b());
