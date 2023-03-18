/* 14 . fetch(주소, 옵션) */
/**************************************/
//네트워크를 통해 리소스의 요청(Request) 및 응답(Response)를 처리할 수 있다.
//Promise 인스턴스를 반환

console.log(fetch("https://www.omdbapi.com/?c&s=matrix&apikey=e14d4d70"));
//실제로 콘솔 찍어보면,
//Promise 인스턴스를 리턴하며, 그 객체는 Prototype 메소드로,
//catch, finally, then, constructor 등이 있으며,
//그 메소드 또한 Promise 인스턴스를 리턴하는 것을 알 수 있다.

//json : 응답을 자바스크립트에서 데이터로써 쓸수 있도록 분석
fetch("https://www.omdbapi.com/?c&s=dragon&apikey=e14d4d70").then((res) => console.log(res.json()));

//then
fetch("https://www.omdbapi.com/?c&s=dragon&apikey=e14d4d70")
  .then((res) => res.json())
  .then((json) => console.log(json));

//async, await
const wrap = async () => {
  const res = await fetch("https://www.omdbapi.com/?c&s=dragon&apikey=e14d4d70");
  const json = await res.json();
  console.log(json);
};

wrap();

//fetch 옵션
//여러가지가 있다.

fetch("Request URL", {
  //서버랑 통신하기 위한 옵션들 중 하나
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  }, //서버로 전송하는 요청에 대한 정보
  //서버로 전송하는 요청에 대한 데이터
  //서버로 데이터를 보낼 때는 항상 JSON 화 시켜서 전송해야한다.
  body: JSON.stringify({
    name: "Phantasia",
    age: 99,
    email: "PSG@football.com",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));
