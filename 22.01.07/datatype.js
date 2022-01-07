'use strict';

// 자료형

// 1. 숫자형 🔢
let n = 123;
n = 12.345;

// 이외에 Infinty, -Infinty, NaN

// BigInt
// 내부 표현 방식 때문에 자바스크립트에선 (253-1)(9007199254740991) 보다 큰 값 혹은 -(253-1) 보다 작은 정수는 '숫자형’을 사용해 나타낼 수 없습니다.

// 끝에 'n'을 붙이면 BigInt 자료형
const bigInt = 123456789012345678901234567890n;

// 2. 문자형 🔡
// 따옴표로 묶어주면 문자열이 된다.
let str = 'Hello';
let str2 = 'single quotes are ok too';
let phrase = `can embed another ${str}`; // ``에서는 변수나 표현식을 삽입해줄 수 있다.

// 3. 불린형(논리 타입)
// true, fales만 존재

let nameFieldChecked = true;
let ageFieldChecked = false;

// 4. null
// null은 비어있는 값, 알수 없는 값을 나타냄

let age = null;

// 5. undefined
// 변수가 선언되어 있지만 할당되지 않은 상태
let age;
alert(age); // undefined

// null vs undefined
// 의도적으로 비어있는 값을 할당하고 싶을 땐 null을 쓴다.
age = undefined; // x
age = null; // o

// 6. 객체와 심볼 ...

// typeof 연산자

typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof 'foo'; // "string"

typeof Symbol('id'); // "symbol"

typeof Math; // "object"  (1) 내장 객체이기 때문

typeof null; // "object"  (2) 언어 자체의 오류

typeof alert; // "function"  (3) function이라는 함수형 자료형은 없음 함수는 객체형임
