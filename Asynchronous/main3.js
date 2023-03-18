/* 5. 프로미스(Promise) */
/**************************************/
//기본 형태
const a = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  });
};

const b = () => console.log(2);

a().then(() => {
  b();
});

//이어서
//index.html의 script 파일 이동 + main4.js
