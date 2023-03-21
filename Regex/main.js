//정규표현식(RegExp ,Regular Expression)

/* 1. 정규표현식이란 */
/**************************************/
// - 문자 검색(Search)
// - 문자 대체(Replace)
// - 문자 추출(Extract)

//정규식 생성자 방식 A
//new RegExp('표현', '옵션')
//new RegExp('[a-z', 'gi'])

//정규식 리터럴 방식 B
// /표현/옵션
// /[a-z]/gi

const str = `
010-1234-5678
theemail@gmail.com
Hello world!
https://www.google.com/search?client=firefox-b-d&q=regex
The Matrix is the very good nice movie.
youareemail@gmail.com
http://localhost:1234
동해물과 백두산이 마르고 닳도록
abbcccdddddeeeee
`;

//const regexp = new RegExp("the", "");
//const regexp = new RegExp("the", "g");
const regexp = new RegExp("the", "gi");
console.log(str.match(regexp));

// const regexpLit = /the/gi;
// console.log(str.match(regexpLit));
console.log(str.match(/the/gi));

/* 2. 정규표현식 메소드 */
/**************************************/
//정규식.test(문자열) - 일치 여부 반환
//문자열.match(정규식) - 일치하는 문자의 배열 반환
//문자열.replace(정규식, 대체문자) - 일치하는 문자를 대체

const str2 = `
010-1234-5678
theemail@gmail.com
Hello world!
https://www.google.com/search?client=firefox-b-d&q=regex
The Matrix is the very good nice movie.
youareemail@gmail.com
http://localhost:1234
동해물과 백두산이 마르고 닳도록
abbcccdddddeeeee
`;

const regExp = /nice/gi;
//바로 인수로 정규식 넣어도 된다.
console.log(regExp.test(str2));
console.log(str2.match(regExp));
console.log(str2.replace(regExp, "outstanding"));

/* 3. 정규표현식 옵션 */
/**************************************/
// g - 모든 문자 일치(Global) [문자열의 일치하는 모든 문자]
// i - 영어 대소문자를 구분 않고 일치(Ignore case)
// m - 여러 줄 일치(Multi line), 각각의 줄을 시작과 끝으로 인식

const str3 = `
010-1234-5678
theemail@gmail.com
Hello world!
https://www.google.com/search?client=firefox-b-d&q=regex
The Matrix is the very good nice movie.
youareemail@gmail.com
http://localhost:1234
동해물과 백두산이 마르고 닳도록
abbcccdddddeeeee
`;

console.log(str3.match(/the/));
console.log(str3.match(/the/g));
console.log(str3.match(/the/gi));
console.log(str3.match(/\.$/gi)); // \.$ : .문자이며, 문장의 끝
console.log(str3.match(/\.$/gim));

//Escape 문자 : \(백스래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자

//index.html + main2.js 이동
