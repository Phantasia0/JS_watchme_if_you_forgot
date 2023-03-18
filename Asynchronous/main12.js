/* 13. 반복문에서 비동기 처리 */
/**************************************/

const getMovies = (movieTitle) => {
  return new Promise((resolve) => {
    fetch(`https://www.omdbapi.com/?c&s=${movieTitle}&apikey=e14d4d70`)
      .then((res) => res.json())
      .then((res) => resolve(res));
  });
};

const titles = ["matrix", "avengers", "Lord of Rings"];

//콜백을 일단 배열의 아이템만큼 쭉 반복한 다음,
//그 각각의 콜백 내부에서만 await 키워드로 기다리는 것이므로
//이렇게 forEach 쓰면 titles 배열의 제목 순서와 출력 순서가 항상 같지 않다.

titles.forEach(async (title) => {
  const movies = await getMovies(title);
  console.log(title, movies);
});

//만약 반복을 매번 기다려가면서 순차적으로 수행하려고 한다면,
// for 반복문을 사용하여야 한다.

const wrap = async () => {
  for (const title of titles) {
    const movies = await getMovies(title);
    console.log(title, movies);
  }
};

wrap();

//이어서
//index.html의 script 파일 이동 + main13.js
