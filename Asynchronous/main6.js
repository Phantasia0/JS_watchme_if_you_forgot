/* 7. Async / Await */
/**************************************/
//기본형태

const a = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  });
};

const b = () => console.log(2);

//a().then(() => b()); //기존 then 체이닝 패턴

const wrap = async () => {
  await a();
  //await 키워드는 반드시 async 키워드가 붙은 함수 안에서만 쓸수 있다.
  //또한, Promise 인스턴스를 반환해야 쓸수 있다.
  //resolve() 함수가 끝날때까지 기다린다
  //'a() 함수의 실행이 끝날때까지 b() 실행시키지않고 기다린다' 라고 생각
  b();
};

wrap();

//이어서
//index.html의 script 파일 이동 + main7.js
