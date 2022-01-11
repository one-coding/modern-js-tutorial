'use strict';

// 함수를 만들고 그 함수를 변수 sayHi에 할당하기
let sayHi = function (params) {
  alert('hello');
};

sayHi();

// 함수를 변수에 복사해서 사용도 가능하다

function say() {
  console.log('hello');
}

const func = say;

func(); // hello
sayHi(); // hello

// callback function
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  console.log('agree!');
}

function showCancel() {
  console.log('cancel..!');
}

ask('are you agree?', showOk, showCancel);

// ====

ask(
  'are you agree?',
  function () {
    console.log('agree!');
  },
  function () {
    console.log('cancel..!');
  }
);
// 이렇게 익명함수를 써서 사용해도 된다.

// 함수 표현식 vs 함수 선언문
// 함수 선언문 : 함수는 주요 코드 흐름 중간에 독자적인 구문 형태로 존재
function sum(a, b) {
  return a + b;
}

// 함수 표현식 : 구문 구성 내부에 생성된다. 할당 연산자를 이용해 변수에 할당되는 형태
const sum = function (a, b) {
  return a + b;
};

// 2. 언제 생성되는 지!
// 자바스크립트 엔진이 초기화 단계에서 함수 선언문은 찾아서 다 만들어 놓기 때문에
// 어디서든 불러서 쓸 수 있지만, 함수 표현식은 변수가 선언된 이후로만 쓸 수 있다.

createWhen('John'); // Hello John

function createWhen(name) {
  alert(`Hello, ${name}`);
}

createWhenNow('John'); // error

const createWhenNow = function (name) {
  alert(`Hello, ${name}`);
};

//  3. 스코프 차이
// 함수 표현식을 이용하면 코드블록 바깥에서 사용하는 방법을 구현할 수 있다.
let age = prompt('나이를 알려주세요.', 18);

let welcome;

if (age < 18) {
  welcome = function () {
    alert('hi!?');
  };
} else {
  welcome = function () {
    alert('welcome?!');
  };
}

welcome(); // 원하는 대로 동작한다.
