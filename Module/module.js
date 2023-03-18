/* A. 모듈 사용방법 */
/**************************************/

//a.기본 내보내기
export default 123;
//export default 'ABC' //에러 ->기본 내보내기 방식은 한 파일에서 단 한번만 사용 가능.

//b.이름 내보내기
export const str = "ABC";
export const arr = [];
export const getSum = () => {};
export function matrix() {}
export const num = 3.14159;
