'use strict';

let user = {};

console.log(user.address.street); // 없는 걸  찾으려고 하면 오류

// 위 문제를 해결하기 위해서 여태까진 이렇게..!
console.log(user && user.address && user.address.street);

// 옵셔널 체이닝의 등장
let user = {};

console.log(user?.address); // undefined
console.log(user?.address.street); // undefined

// user가 null이나 undefined인 경우에만 처리할 수 있습니다

// 단락평가  - ?.는 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈춥니다.
let user = null;
let x = 0;

user?.sayHi(x++); // 아무일도 일어나지 않습니다. user가 null이면 오른쪽을 실행하지 않음

console.log(x); // 0

// delete와 함께 사용가능
delete user?.name; // user가 존재하면 user.name을 삭제합니다

// ?. 쓰기는 불가능
