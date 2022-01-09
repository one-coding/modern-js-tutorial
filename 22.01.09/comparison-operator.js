// 비교 연산자

// true가 반환 되면 '참'
// false가 반환 되면 '거짓'
console.log(2 > 1); // true
console.log(2 == 1); // false
console.log(2 != 1); // true

// 할당도 가능하다
let result = 5 > 4;
console.log(result); // true

// 문자열 비교 - 사전(유니코드) 순으로 비교한다. 사전의 뒷 쪽에 있을 수록 크다고 판단
console.log('Z' > 'A'); // true
console.log('a' > 'A'); // true
console.log('Glow' > 'Glee'); // true

// 다른 형을 가진 값과 비교
console.log('2' > 1); // '2'를 숫자 2로 바꾼 뒤 비교 true
console.log('01' == 1); // true

console.log(true == 1); // true
console.log(false == 0); // true

// == vs ===
console.log(0 == false); // true
console.log('' == false); // true
console.log(null == undefined); // true

console.log(0 === false); // false 타입까지 계산
console.log(null === undefined); // false

// null vs 0
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true ??
// == 피연산자가 null이나 undefined일땐 형변환을 하지 않는다.
// null과 undefined를 비교할 때만 형변환을 한다.

// 비교가 불가능한 undefined
// undefined는 undefined 자체와 null하고만 비교해야 한다.
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false

// === 이외에 비교연산자의 피연산자에 undefined나 null이 오지 않도록 주의

// homework
5 > 4; // true
'apple' > 'pineapple'; // false
'2' > '12'; // false
undefined == null; // true
undefined === null; // false
null == '\n0\n'; // false => null은 undefined와만 같다.
null === +'\n0\n'; // false
