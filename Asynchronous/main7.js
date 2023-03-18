/* 8. Async / Await - 사용 예시시 */
/**************************************/

const getMovies = (movieTitle) => {
  return new Promise((resolve) => {
    fetch(`https://www.omdbapi.com/?c&s=${movieTitle}&apikey=e14d4d70`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        resolve();
      });
  });
};

// getMovies("Matrix")
//   .then(() => {
//     console.log("매트릭스가 진짜였다면?");
//     return getMovies("Titanic");
//   })
//   .then(() => {
//     console.log("타이타닉 감동적임");
//     return getMovies("Avengers: Infinity War (2018)");
//   })
//   .then(() => {
//     console.log("아이언맨");
//   });

//async , await 패턴화
//굉장히 자주 쓰인다.
//또한 await는 반드시 프로미스 인스턴스를 반환하는 함수에서만 써야한다.
const wrap = async () => {
  await getMovies("Matrix");
  console.log("매트릭스가 진짜였다면?");
  await getMovies("Titanic");
  console.log("타이타닉 감동적임");
  await getMovies("Avengers: Infinity War (2018)");
  console.log("아이언맨");
};

wrap();

//이어서
//index.html의 script 파일 이동 + main8.js
