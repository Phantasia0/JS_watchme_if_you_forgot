/* 2. Cookie(쿠키) */
/**************************************/
//도메인 단위(사이트 단위)로 저장
//표준 기준, 사이트 당 최대 20개 및 4KB로 제한
//영구 저장 불가능

//값 지정 옵션
//domain: 유효 도메인 설정
//path: 유효 경로 설정
//expires: 만료 날짜(UTC Date) 설정
//max-age: 만료 타이머(s) 설정

//개발자도구 -> 애플리케이션 -> 저장용량 TAB -> 쿠키 TAB 에서 확인 가능
document.cookie = "a=1";
document.cookie = "b=2"; //값이 바뀌는게 아닌, 쿠키에 누적됨
document.cookie = "a=0"; //a 쿠키 값 갱신

document.cookie = "c=3; domain=localhost"; //도메인이 지금 실행되고있는 도메인이랑 일치해야함.
document.cookie = "d=4; domain=localhost; path=/";
document.cookie = "e=5; max-age=3"; //초 단위
document.cookie = `f=6; expires=${new Date(2023, 2, 20).toUTCString()}`; //초 단위
//만료를 특정하지 않으면, 세션으로 표시되는데, 브라우저가 종료되면 해당 쿠키가 제거된다는 의미이다.

console.log(document.cookie);

//쿠키 파싱
function getCookie(name) {
  const cookie = document.cookie.split("; ").find((value) => value.split("=")[0] === name);
  return cookie ? cookie.split("=")[1] : null;
}
console.log(getCookie("a"));

//쿠키는 중요한 정보를 만료날짜나 시간을 설정해서 관리를 할 수 있지만,
//저장갯수, 용량이 제한되있어서, 일반적인 데이터를 브라우저에 저장하는 용도로는,
//적합하지않다.

//index.html + main3.js 이동
