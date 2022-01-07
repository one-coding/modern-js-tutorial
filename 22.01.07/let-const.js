'use strict'; // 엄격모드
// 클래스와 모듈을 사용해 코드를 구성하면 엄격 모드가 적용되어져 있다.

alert('자바스크립트!');

// 1. 변수와 상수

// 1- 1 변수 let
let message; // 선언
message = 'Hello'; // 문자열 할당
alert(message); // 사용

// 선언과 할당을 동시에 가능
let message = 'Hello';
alert(message); // 사용

// 쉼표로 여러 변수 한번에 할당 가능
// 한줄에 하나씩 선언해야 가독성이 높다
let user = 'jaeone',
  age = 10,
  message = 'hello';

// 재 할당 가능
let message;
message = 'Hello';
message = 'world';
alert(message); // world

// 한 변수를 다른 변수에 복사
let hello = ' hello world';

let message;

message = hello;

alert(hello);
alert(message);

// 변수 이름
// 변수명에는 오직 문자와 숫자, 그리고 기호 $와 _만 들어갈 수 있습니다.
// 첫 글자는 숫자가 될 수 없습니다.

// 1-2 상수 const
const myBirthday = '12.30'; // 변하지 않는 값 할당
myBirthday = '07.14'; // error 발생

// 대문자 상수 - 기억하기 힘든 값을 별칭으로
const COLOR_RED = '#f00';

// homework
let admin, adminName;

adminName = 'John';
admin = adminName;

alert(admin);

let ourPlanetName = 'Earth';
let currentUserName = 'John';
