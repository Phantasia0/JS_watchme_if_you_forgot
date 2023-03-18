/* 9. 콜백 패턴 - 에러 핸들링 */
/**************************************/
//콜백 패턴

const delayAdd = (index, cb, errorCb) => {
  setTimeout(() => {
    if (index > 10) {
      errorCb(`${index}는 10보다 클 수 없습니다.`);
      return;
    }
    console.log(index);
    cb(index + 1);
  }, 1000);
};

delayAdd(
  4,
  (res) => console.log(res),
  (err) => console.error(err)
);

delayAdd(
  13,
  (res) => console.log(res),
  (err) => console.error(err)
);

//이런 방식으로 error를 핸들링 할 수 있다.

//이어서
//index.html의 script 파일 이동 + main9.js
