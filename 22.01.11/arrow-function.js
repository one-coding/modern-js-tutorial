'use strict';

// 함수 표현식을 단순하고 간결한 문법으로 만드는 방법
let func = (arg1, arg2, ...argN) => {
  return expression;
};

let sum = (a, b) => a + b;

sum(1, 2);

// 파라미터가 하나밖에 없다면 괄호 생략 가능
let double = (n) => n * 2; // prettier..자동...

// 인수가 없다면 비워두면 된다.
let sayHi = () => alert('hello world~!');
sayHi();

// example
let age = prompt('How old are you?', 18);

let welcome = age < 18 ? () => alert('hello') : () => alert('welcome~!');

welcome();

// 중괄호가 있다면 return으로 정확히 결괏값을 반환해주어야 한다.
let sum = (a, b) => {
  // 중괄호는 본문이 여러줄로 구성되어 있음을 알려준다.
  let result = a + b;
  return result; // *
};

sum(1, 2);

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  '동의하십니까?',
  () => alert('agree!'),
  () => alert('cencle')
);
