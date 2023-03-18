/* 12. 에러 핸들링 -사용 예시 */
/**************************************/

const getMovies = (movieTitle) => {
  return new Promise((resolve, reject) => {
    //fetch(`https://www.omdbapi.com123/?c&s=${movieTitle}&apikey=e14d4d70`) //에러 1
    //fetch(`https://www.omdbapi.com/?c&s=${movieTitle}&apikey=e14d4d70123`) //에러 2

    fetch(`https://www.omdbapi.com/?c&s=${movieTitle}&apikey=e14d4d70`)
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);
        if (json.Response === "False") {
          reject(json.Error);
        }
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

let loading = true;

//.then()
getMovies("avengers")
  .then((movies) => console.log("영화 목록:", movies))
  .catch((error) => console.log("에러 발생:", error))
  .finally(() => (loading = false));

// async / await
const wrap = async () => {
  try {
    const movies = await getMovies("matrix");
    console.log("영화 목록:", movies);
  } catch (err) {
    console.log("에러 발생:", error);
  } finally {
    loading = false;
  }
};

wrap();

//이어서
//index.html의 script 파일 이동 + main12.js
