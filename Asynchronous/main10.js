/* 11. async / await - 에러 핸들링 */
/**************************************/
//async, await 이용

const delayAdd = (index) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index > 10) {
        reject(`${index}는 10보다 클 수 없습니다.`); //reject
        return;
      }
      console.log(index);
      resolve(index + 1); //resolve
    }, 1000);
  });
};

const wrap = async () => {
  try {
    const res = await delayAdd(15);
    console.log(res);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Done");
  }
};

//finally는 항상 마지막에 에러발생 유무 상관없이 반드시 실행된다
wrap();

//이어서
//index.html의 script 파일 이동 + main11.js
