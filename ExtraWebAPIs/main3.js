/* 3. Storage(스토리지) */
/**************************************/
//도메인 단위로 저장 (사이트 단위)
//5MB 제한
//세션 혹은 영구 저장 가능

//sessionStorage: 브라우저 세션이 유지되는 동안에만 데이터 저장
//localStorage: 따로 제거하지 않으면 영구적으로 데이터 저장

// .getItem()     | 데이터 조회
// .setItem()     | 데이터 추가
// .removeItem()  | 데이터 제거
// .clear()       | 스토리지 초기화

//스토리지 저장은 항상 문자 데이터로 저장되므로,
//객체 같은 경우는 JSON화해서 저장해야 한다.
localStorage.setItem("a", "Hello world!"); //OK 지만, 작은 따음표로 감싸는 문자열일 경우 오류
localStorage.setItem("d", JSON.stringify("Hello world!~"));
localStorage.setItem("b", JSON.stringify({ x: 1, y: 2 }));
localStorage.setItem("c", JSON.stringify(123));

//JS에서 데이터를 조회 할때도 분석해서 가져와야 한다.
//JSON 문자는 항상 큰 따음표로 감싸야하는 것에 주의
console.log(localStorage.getItem("a"));
console.log(JSON.parse(localStorage.getItem("b")));
console.log(JSON.parse(localStorage.getItem("c")));
console.log(JSON.parse(localStorage.getItem("d")));

localStorage.removeItem("a");
localStorage.clear();

//sessionStorage도 마찬가지로 작동한다.
sessionStorage.setItem("a", "Hello world!");
sessionStorage.setItem("d", JSON.stringify("Hello world!~"));
sessionStorage.setItem("b", JSON.stringify({ x: 1, y: 2 }));
sessionStorage.setItem("c", JSON.stringify(123));

console.log(sessionStorage.getItem("a"));
console.log(JSON.parse(sessionStorage.getItem("b")));
console.log(JSON.parse(sessionStorage.getItem("c")));
console.log(JSON.parse(sessionStorage.getItem("d")));

sessionStorage.removeItem("a");
sessionStorage.clear();

//사용자가 임시적으로 필요한 데이터는 sessionStorage로 관리
//매번 사용자가 사이트에 들어와서,
//계속적으로 저장하고 사용해야하는 데이터는 localStorage로 관리

//만료라는 개념이 없기때문에, 만료라는 개념이 필요하다면 쿠키를 사용해야한다.
//대표적으로 사이트 배너에, 하루동안 열지 않기 등 특정 버튼을 만들때 쿠키
//그 외의 일반적인 데이터를 저장하는 용도 = 스토리지

//index.html + main4.js 이동
