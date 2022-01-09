'use strict';
// 논리 연산자 || , &&, !

// || (OR 연산자) - 둘 중 하나만 true면 true 반환
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // true

if (1 || 0) {
  // if( true || false )와 동일하게 동작합니다
  console.log('truthy!');
}

// if 문에서 주로 사용된다
let hour = 9;
if (hour < 10 || hour > 18) {
  console.log('영업시간이 아닙니다');
}

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log('영업시간이 아닙니다.'); // 주말이기 때문
}

// 첫 번째 truthy를 찾는 OR 연산자 '||'
// truthy한 값을 찾으면 그 즉시 평가를 멈추고, 변환 전 피연산자의 값을 반환한다.
console.log(1 || 0); // 1 - 1이 truthy하기 때문에 바로 반환
console.log(null || 1); // 1
console.log(null || 0 || 1); // 1

console.log(undefined || null || 0); // 모두 false하기 때문에 마지막 값 0 반환

// 활용방안
// 1. 변수 또는 표현식으로 구성된 목록에서 첫 번째 truthy 얻기
let firstName = '';
let lastName = '';
let nickName = '바이올렛';
alert(firstName || lastName || nickName || '익명');

// 단락평가
// true를 만나면 나머지 값들은 평가하지 않는다.

true || alert('not printed'); // true를 만나고 실행을 멈췄기 때문에 alert이 실행되지 않는다.
false || alert('printed'); // 실행

// AND 연산자 &&
// 두 조건이 모두 참일 때만 true를 반환한다
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert('현재시각은 12시 30분입니다');
}

// AND 연산자의 피연산자도 타입에 제약이 없습니다
if (1 && 0) {
  alert('0이 falsy한 값이기 때문에 실행되지 않습니다');
}

// 첫 번째 falsy를 찾는 AND 연산자

// 첫 번째 피연산자가 truthy이면, AND는 두 번째 피연산자를 반환합니다.
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// 첫 번째 피 연산자가 falsy한 값이면 , 바로 그 값을 반환하고 false가 됩니다
console.log(null && 5); // null
console.log(0 && '아무거나 와도 실행 안됩니다'); // 0

console.log(1 && 2 && null && 3); // null
console.log(1 && 2 && 3); // 3

// &&의 우선 순위가 || 보다 높습니다
// a && b || c && d는
(a && b) || (c && d); // 이렇게 실행된다.
// if를 &&로 대체하지 말자

// NOT 연산자
// 1. 피연산자를 불린형으로 변환합니다.
// 2. 1에서 변환된 값의 역을 반환합니다

console.log(!true); // false
console.log(!0); // true

console.log(!!null); //!!를 두번쓰면 원래 값인 false가 되고, 이건 아예 false로 만들어 버리는 거
console.log(Boolean(null)); // 위의 식과 같게 된다.

// honeWork
console.log(null || 2 || undefined); // 2

if (age >= 14 && age <= 90) {
  console.log('나이가 14세 이상 90세 이하입니다');
}

if (age < 14 && age > 90) {
}

if (!(age >= 14 && age <= 90)) {
}

const value = prompt('Who are you?', '');

if (value == 'Admin') {
  const value2 = prompt('Password?', '');
  if (value2 == 'TheMaster') {
    alert('Welcome!');
  } else if (value2 == '' || value2 == null) {
    alert('Canceled');
  } else {
    alert('Wrong password');
  }
} else if (value == '' || value == null) {
  alert('Canceled');
} else {
  alert('i dont know you');
}

// nullish 병합 연산자 '??'
a ?? b; // a가 null, undefined가 아니면 a 그 외엔 b
x = a !== null && a !== undefined ? a : b; // 위와 아래의 식이 같음

let firstName = null;
let lastName = null;
let nickName = '바이올렛';

alert(firstName ?? lastName ?? nickName ?? '익명의 사용자'); // 바이올렛

// ??와 ||의 차이
// ||은 첫 번째 truthy 값 반환
// ??은 첫 번째 정의된(defined)값 반환

let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0

// 연산자 우선순위
// ?? 는 = 와 ? 보다는 먼저 평가되지만, 대부분의 연산자보다는 나중에 평가되기 때문에
// ()를 활용해 우선순위를 지정해주는 것이 좋다.

let height = null;
let width = null;
let area = (height ?? 100) * (width ?? 50);
console.log(area); // 5000

// 원치 않는 결과
let area = height ?? 100 * width ?? 50; // 100 * width가 먼저 실행된다

// ??는 &&나 ||와 같이 사용하지 못한다
let x = 1 && 2 ?? 3; // SyntaxError: Unexpected token '??'
// 제약을 피하려면 괄호를 사용
let x = (1 && 2) ?? 3;

