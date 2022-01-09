'use strict';

let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');
if (year == 2015) alert('정답입니다.');
// 단 한 줄이어도 중괄호를 사용해 가독성을 높이는 것이 좋다

if (year == 2015) {
  alert('정답입니다');
}

// () 안의 표현식을 평가하고, 결과를 불린 값으로 반환
// true면 식이 실행되고, false면 실행되지 않는다.
// falsy 값 - 0, "", null, undefined, NaN
// truthy 값 - falsy 값 외의 값
if (0) {
  // 0은 falsy한 값입니다
  // 이 코드는 실행되지 않습니다.
}

if (1) {
  // 1은 truthy한 값입니다.
  // 이 코드는 항상 실행됩니다.
}

let cond = year == 2015; // 동등비교를 통해 true / false를 결정합니다.

if (cond) {
  // ...
}

// else 절
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');
if (year == 2015) {
  console.log('정답입니다');
} else {
  // if()가 거짓일 때 실행되는 부분
  console.log('오답입니다');
}

// else if로 복수 조건 처리하기
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');
if (year < 2015) {
  console.log('숫자를 더 올려보세요');
} else if (year > 2015) {
  console.log('숫자를 더 내려보세요');
} else {
  // if()가 거짓일 때 실행되는 부분
  console.log('정답입니다.');
}

// 조건부 연산자 "?" (삼항 연산자)
// let result = condition ? value1 : value2
// condition이 true면 value1이 false면 value2가 반한된다.
let accessAllowed;
let age = prompt('나이를 입력하세요', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
// 삼항 연산자를 쓰면 위 코드가 간결해진다.
let accessAllowed = age > 18 ? true : false;
// 그러나 비교 연산자 자체가 true나 false를 반환하기 때문에 위 예시처럼 쓰지 않아도 된다.
let accessAllowed = age > 18;

// 다중  '?'
let age = prompt('나이를 입력하세요', 18);

let message =
  age < 3
    ? '아가야 안녕?'
    : age < 18
    ? '안녕!'
    : age < 100
    ? '환영합니다'
    : '나이가 아주 많으시거나, 나이가 아닌 값을 입력했습니다.';

// 부적절한 '?'
// ?는 값을 반환할때 편하게 하기 위해서 만들어진 것이기 때문에
// 반환이 아닌 실행을 할땐 if를 쓰는 것이 옳다
let company = prompt('자바스크립트는 어떤 회사가 만들었을까요?', '');
company == 'Netscape' ? alert('정답입니다!') : alert('오답입니다!'); // 좋지 못한 코드

if (company == 'Netscape') {
  // good code
  alert('정답입니다!');
} else {
  alert('오답입니다!');
}

// homework
// 1
const namePrompt = prompt("What's the 'official' name of Javascript?", '');

if (namePrompt === 'ECMAScript') {
  alert('정답입니다!');
} else {
  alert('모르셨나요? 정답은 ECMAScript입니다!');
}

// 2
const num = +prompt('숫자를 입력하세요', '');

if (num > 0) {
  console.log(1);
} else if (num < 0) {
  console.log(-1);
} else if (num === 0) {
  console.log(0);
} else {
  console.log('숫자가 아닙니다');
}

// 3
let result = a + b < 4 ? '미만' : '이상';

// 4
let message =
  login == '직원'
    ? '안녕하세요'
    : login == '임원'
    ? '환영합니다.'
    : login == ''
    ? '로그인이 필요합니다'
    : '';
