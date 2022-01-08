'use strict';

// 문자열로 형 변환 - 예측 가능한 방식으로 형 변환
let value = true;
alert(typeof value);

value = String(value);
alert(typeof value);

// 숫자형으로 변환
// 수학과 관련된 함수와 표현식에서 자동으로 형 변환
alert('6' / '2'); // 문자열이 숫자형으로 변환 뒤 연산

let str = '123';
alert(typeof str); // string

let num = Number(str);
alert(typeof num); // number form으로 데이터를 받는 경우 이렇게 숫자로 바꿔줘야함

let age = Number('임의의 문자열 123');
alert(age); // NaN 형 변환 실패
// undefinded => NaN
// null => 0
// true => 1 false => 0

// 불린형으로 변환
alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean('0')); // true
alert(Boolean(' ')); // true
alert(Boolean('')); // false
