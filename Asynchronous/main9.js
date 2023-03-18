/* 10. Resolve / Reject - 에러 핸들링 */
/**************************************/
//프로미스 이용

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

delayAdd(5)
  .then((res) => console.log(res)) //then -> resolve
  .catch((err) => console.error(err)); //catch -> reject

delayAdd(13)
  .then((res) => console.log(res)) //then -> resolve
  .catch((err) => console.error(err)) //catch -> reject
  .finally(() => console.log("Done"));

//resolve, reject 은 반드시 둘 중 하나만 실행되며,
//다른 코드들은 환경에 따라, 실행될 수도 있으나,
//현재 구조에서는, reject에 걸리면 뒤에 바로 return으로 함수를 종료시켰다.
//finally는 항상 마지막에 에러발생 유무 상관없이 반드시 실행된다

//이어서
//index.html의 script 파일 이동 + main10.js
