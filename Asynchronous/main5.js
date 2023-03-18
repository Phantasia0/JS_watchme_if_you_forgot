/* 6. 프로미스(Promise) - 3 */
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

getMovies("Matrix")
  .then(() => {
    console.log("매트릭스가 진짜였다면?");
    return getMovies("Titanic");
  })
  .then(() => {
    console.log("타이타닉 감동적임");
    return getMovies("Avengers: Infinity War (2018)");
  })
  .then(() => {
    console.log("아이언맨");
  });

//1.getMovies('Matrix') 호출
//2.그 결과가 처리되면,
//3.then() 메서드로 다음 호출을 실행
//4.그 호출의 결과를 기다렸다가,
//5.다음 then() 메서드를 호출
//반복

//이어서
//index.html의 script 파일 이동 + main6.js
