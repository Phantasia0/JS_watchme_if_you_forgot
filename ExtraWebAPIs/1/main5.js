/* 5. History(히스토리) - 이론 */
/**************************************/
//히스토리 객체
//브라우저 히스터리(세션 기록) 정보를 반환하거나 제어한다.
//브라우저에서 여러 페이지 이동하면, 따로 기록을 하는데,
//그 정보들은 히스토리 객체로써 저장이 된다.

// .length                       | 등록된 히스토리 개수
// .scrollRestoration            | 히스토리 탐색시 스크롤 위치 복원 여부 확인 및 지정
// .state                        | 현재 히스토리에 등록된 데이터(상태)

// .back()                       | 뒤로 가기
// .forward()                    | 앞으로 가기
// .go(위치)                      | 현재 페이지 기준 특정 히스토리 '위치'로 이동

// .pushState(상태, 제목, 주소)     | 히스토리에 상태 및 주소를 추가
// .replaceState(상태, 제목,주소)   | 현재 히스토리의 상태 및 주소를 교체
// > 모든 브라우저(Safari 제외)는 '제목' 옵션을 무시

console.log(history);

//Hello 1 링크 선택시,
//location.href 콘솔 입력해서 확인
//주소창 : http://localhost:1234/#hello1

//Hello 2 링크 선택시,
//주소창 : http://localhost:1234/#hello2

//개발자 도구 콘솔창에,
//history.back()
//history.forward()
//history.go(2) 이후,
//location.href 입력하여 확인 가능

//개발자 도구 콘솔창에,
//history.pushState({ a:1 }, '', '/#hello4')
//http://localhost:1234/#hello4 로 바뀐걸 알 수 있다 + length 도 하나 증가
//pushState 메소드는 , 페이지를 새로고침을 하지않으면서 새 history를 누적한다.
//이후에, 페이지를 관리하는 용도로 사용한다.

//개발자 도구 콘솔창에,
//history.replaceState({ b:2 }, '', '/#hello5')
//http://localhost:1234/#hello5 로 바뀐걸 알 수 있다.
//상태도 갱신되었지만, 기존 해당 히스토리의 내용을 제거하고 추가했기때문에, [교체한것]
//그러므로 이 상태에서 뒤로가기를 한다면 hello3으로 이동할 것이다.

//폴더 2 + main6.js 이동
