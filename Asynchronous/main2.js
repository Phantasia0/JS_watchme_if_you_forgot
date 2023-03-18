/* 4. 콜백 패턴 예시 */
/**************************************/
//실행의 순서를 보장하는 대표적인 콜백 패턴 예시
const getMovies = (movieTitle, callback) => {
  fetch(`https://www.omdbapi.com/?c&s=${movieTitle}&apikey=e14d4d70`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      callback();
    });
};

getMovies("Matrix", () => {
  console.log("매트릭스가 진짜였다면?");
});
getMovies("Titanic", () => {
  console.log("타이타닉 감동적임");
});
getMovies("Avengers: Infinity War (2018)", () => {
  console.log("Stark 살려내");
});

//계속 새로고침으로 돌려보면 각각의 결과는 출력순서를 보장할 수 없음을 알 수 있다.

//이것을 Matrix -> Titanic -> Avengers 출력되도록 실행의 순서를 보장하고 싶다면,
//예시를 위해, Resident Evil -> Dawn Of Dead -> Saw 로 수정

getMovies("Resident Evil", () => {
  console.log("이거 조금 잔인함");
  getMovies("Dawn Of Dead", () => {
    console.log("이건 잔인함");
    getMovies("Saw", () => {
      console.log("잔인함을 뛰어넘었음");
    });
  });
});

//만약 출력순서를 보장할 영화가 100개라면? 100번 파고들어야한다 = 콜백 지옥
//이를 해결하기 위해 새롭게 만들어진 개념
//Promise 클래스

//이어서
//index.html의 script 파일 이동 + main3.js
