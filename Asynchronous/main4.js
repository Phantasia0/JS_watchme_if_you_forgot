/* 6. 프로미스(Promise) - 2 */
/**************************************/
//복잡한 형태
const a = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  });
};

const b = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 1000);
  });
};

const c = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);
      resolve();
    }, 1000);
  });
};

const d = () => console.log(4);

//이렇게 작성 시, 콜백지옥이랑 형태가 같다.
a().then(() => {
  b().then(() => {
    c().then(() => {
      d();
    });
  });
});

//그래서 다른 방식으로, 메소드 체이닝 사용하면,
a()
  .then(() => {
    return b();
  })
  .then(() => {
    return c();
  })
  .then(() => {
    d();
  });

// 이것을 더 간략화하면,
a()
  .then(() => b())
  .then(() => c())
  .then(() => {
    d();
  });

// 이것을 더 간략화하면, 결과적으로 이렇게 간략하게 표현이 가능하다.
a()
  .then(b)
  .then(c)
  .then(d)
  .then(() => console.log("done"));

//이어서
//index.html의 script 파일 이동 + main5.js
