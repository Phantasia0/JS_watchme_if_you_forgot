/* 2. 심볼(Symbol) - 사용 예시 */
/**************************************/
//symbol.js, keys.js 참고
import racoon from "./symbol.js";
import { birthKey, emailsKey } from "./keys.js";

console.log(racoon);
//Symbol 속성은 코드로 조회할 수 없다.
console.log(Object.keys(racoon)); //Symbol 키는 출력되지 않는다.

//실제로 값도 출력되지 않는다.
for (const key in racoon) {
  console.log(racoon[key]);
}

//심볼을 통해서 만들어진 데이터는 기본적으로 조회할 수 없다.
//만들어진 고유한 심볼데이터를 가져와서 사용해야 한다.
console.log(racoon[birthKey]);
console.log(racoon[emailsKey]);

//index.html + main3.js 이동
