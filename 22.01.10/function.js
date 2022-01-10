'use strict';
// 함수 선언
function name(params) {
  // .. 함수 본문
}

function showMessage() {
  alert('안녕하세요!');
}

// 함수 호출
showMessage();
showMessage();

// 지역 변수
// 함수 내에서 선언한 변수는 함수 안에서만 접근할 수 있다.
function showMs() {
  let message = '안녕하세요!';

  alert(message);
}

showMs(); // 안녕하세요!
alert(message); // error

// 외부 변수
// 함수 내부에서 외부 변수의 접근 및 수정이 가능하다.

let userName = 'John';
function showName() {
  userName = 'Bob';
}

console.log(userName); // John
showName();
console.log(userName); // Bob

// 같은 이름의 지역 변수가 있다면 외부변수에 접근하지 않는다.

let userName = 'John';
function updateName() {
  let userName = 'Bob';
}

console.log(userName); // John
updateName(); // 외부변수가 수정되지 않는다
console.log(userName); // John

// 매개변수 - 인수라고 불리기도 한다

function showMessage2(from, text) {
  alert(`${from} : ${text}`);
}

showMessage2('Ann', 'Hello'); // Ann: Hello
showMessage2('Ann', "What's up"); // Ann: What's up

function showMessage(from, text) {
  from = `*${from}*`;

  alert(from + ': ' + text);
}

let from = 'Ann';

showMessage(from, 'hello'); // *Ann* : hello

// 함수는 복사된 값을 쓰기 때문에 바깥의 from의 값은 변경되지 않는다.
alert(from); // Ann

// 기본값
function showMsg(from, text = 'no text given') {
  alert(`${from} : ${text}`);
}

showMsg('Ann'); // Amm : no text given

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() 은 text값이 없을때만 호출됨
  // anotherFunction()의 반환 값이 text의 값이 됨
}

// 기본값을 설정하는 다른 방법
function showMessage(text) {
  if (text === undefined) {
    text = '빈 문자열';
  }
}

// || 사용
function showMessage(text) {
  text = text || '빈 문자열';
}

// ?? 사용
function showCount(count) {
  alert(count ?? 'unknown');
}
showCount(0); //0
showCount(null); // unknown
showCount(); // unknown

// 반환 값
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(reslut); // 3

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('보호자 동의를 받으셨나요?');
  }
}

let age = +prompt('나이를 알려주세요', 18);

if (checkAge(age)) {
  alert('접속 허용');
} else {
  alert('접속 차단');
}

// return만 반환시에는 함수 종료

function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }

  alert('영화 상영');
}

// homework
function checkAge(age) {
  return age >= 18 ? true : confirm('보호자 동의를 받으셨나요?');
}
function checkAge(age) {
  return age >= 18 || confirm('보호자 동의를 받으셨나요?');
}

function min(x, y) {
  return x === y ? x : x < y ? x : y;
}

function pow(x, n) {
  return x ** n;
}
