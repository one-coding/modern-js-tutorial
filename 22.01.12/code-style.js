'use strict';

// 중괄호 앞에 공백이 있어야 한다.
if (condition) {
  // 코드 1
  // 코드 2
  // ...코드 n...
}

// 코드가 한 줄인 경우는 중괄호가 없는 것이 가독성이 더 높다
if (n < 0) alert('hello world!');

// 그렇지만 코드가 한 줄이더라도, 중괄호로 내려서 쓰는 것이 best!
if (n < 0) {
  alert('hello world');
}

// 가로 길이는 길지 않는 것이 좋다 - 80자에서 120자
// 백틱을 사용하면 문자열을 여러 줄로 나누기 좋다
let str = `
    ECMA International's TC39 is a group of JavaScript developers,
    implementers, academics, and more, collaborating with the community
    to maintain and evolve the definition of JavaScript.
`;

// if 문이라면 이렇게!
if (
  id === 123 &&
  moonPhase === 'Waning Gibbous' &&
  zodiacSign == 'Libra' &&
  test
) {
  letTheSorceryBegin();
}

// 들여쓰기

// 가로 들여쓰기 :  스페이스 두개 혹은 4개를 이용하여 만듬
function show(parameters, aligned, one, after, another) {
  // ...
}

// 세로 들여쓰기 : 논리 블록 사이에 넣어 코드를 분리해주는 새 줄
function pow(x, n) {
  let result = 1;
  // <-
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  // <-
  return result;
}

// 중첩 레벨
// 너무 깊은 중첩문은 사용하지 않도록 하자

for (let i = 0; i < 10; i++) {
  if (cond) {
    // ... 중첩레벨이 늘어났다.
  }
}
for (let i = 0; i < 10; i++) {
  if (!cond) continue;
  // ... 중첩레벨이  추가 되지 않습니다
}

// if/else example
function pow(x, n) {
  if (n < 0) {
    alert('n은 음수가 될 수 없습니다.');
  } else {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  }
} // bad

function pow(x, n) {
  if (n < 0) {
    alert('n은 음수가 될 수 없습니다.');
    return;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
} // best

// 함수의 위치
// 1. 함수를 사용하는 코드 위에 모아 선어하기
function createElement() {
  //...
}

function setHandler(elem) {
  // ...
}
function walkAround() {
  // ...
}

// 함수를 사용하는 코드
let elem = createElement();
setHandler(elem);
walkAround();

// 2. 코드를 먼저, 함수는 그 다음에 선언하기
let elem = createElement();
setHandler(elem);
walkAround();

function createElement() {
  //...
}

function setHandler(elem) {
  // ...
}
function walkAround() {
  // ...
}

// 대게는 2번째 방법으로 코드를 정돈한다.
// 사람들이 이 코드가 무엇을 하는지 생각하면 코드를 읽기 때문에 코드가 먼저 나오는 것이 자연스럽다
