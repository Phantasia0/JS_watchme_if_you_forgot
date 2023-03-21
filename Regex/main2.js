/* 4. 정규표현식 패턴 - 1 */
/**************************************/

// ^ab      |   줄(Line) 시작에 있는 ab와 일치
// ab$      |   줄(Line) 끝에 있는 ab와 일치
// .        |   임의의 한 문자와 일치
// a|b      |   a 또는 b와 일치
// ab?      |   b가 없거나 b와 일치

// {3}      |   3개 연속 일치
// {3,}     |   3개 이상 연속 일치
// {3,5}    |   3개 이상 5개 이하 연속 일치
// +        |   1회 이상 연속 일치 {1,}

// [ab]     |   a 또는 b
// [a-z]    |   a 부터 z 사이의 문자 구간에 일치(영어 소문자)
// [A-Z]    |   A 부터 Z 사이의 문자 구간에 일치(영어 대문자)
// [0-9]    |   0 부터 9 사이의 문자 구간에 일치(숫자)
// [가-힣]   |   가 부터 힣 사이의 문자 구간에 일치(한글)

// \w       |   63개 문자(Word, 대소영문52개 + 숫자 10개 + _)에 일치
// \b       |   63개 문자에 일치하지 않는 문자 경계(Boundary)
// \d       |   숫자(Digit)에 일치
// \s       |   공백(Space, Tab 등)에 일치

// (?:)     |   그룹 지정
// (?=)     |   앞쪽 일치
// (?<=)    |   뒤쪽 일치

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
____
`;

console.log(str.match(/^h.../gm));
console.log(str.match(/^h.../gim));
console.log(str.match(/\.com/g));
console.log(str.match(/\.com$/g));
console.log(str.match(/\.com$/gm));

console.log(str.match(/...\.com$/gm));
console.log(str.match(/is|movie|\.com/g));

console.log(str.match(/https?/g));
console.log(str.match(/\d{3}/g));
console.log(str.match(/\d{3,4}/g));
console.log(str.match(/e{3}/g));
console.log(str.match(/d{3}/g));
console.log(str.match(/c{3}/g));
console.log(str.match(/b{3}/g));
console.log(str.match(/\d{3,}/g));
console.log(str.match(/\w+/g));

console.log(str.match(/[ab]/g));
console.log(str.match(/[a-z]+/g));
console.log(str.match(/[a-zA-Z가-힣]+/g));
console.log(str.match(/[0-9]+/g));
console.log(str.match(/[가-힣0-9]{3}/g));
console.log(str.match(/\b[0-9]+\b/g));
console.log(str.match(/\b\d+\b/g));
console.log(str.match(/\s/g));
console.log(str.match(/https?:\/\/(?:\w+\.?)+\/?/g));
console.log(str.match(/.+(?=과)/g));
console.log(str.match(/(?<=@)\w+/g));

console.log(str.match(/\d{3}-\d{4}-\d{4}/g));
console.log(str.match(/\w+@\w+\.\w+/g));
