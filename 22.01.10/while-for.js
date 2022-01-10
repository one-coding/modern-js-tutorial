'use strict';

// while
while (condition) {
  // condition이 true면 코드 실행
  // 코드
  // '반복문 본문(body)'이라 불림
}

// example
let i = 0;
while (i < 3) {
  alert(i);
  i++;
}

let i = 3;
while (i) {
  alert(i);
  i--; // i가 0이 되면 falsy하기 때문에 멈춤
}

// 반복문 본문이 한 줄짜리 문이면 대괄호 생략 가능
while (i) alert(i--);

// do while 반복문
do {
  // 반복문 본문
} while (condition);
// do while은 조건이 truthy가 아니더라도 최소한 한 번은 실행되기 때문에 그러한 상황에서 사용
let i = 0;
do {
  alert(i);
  i++;
} while (i < 3);

// for 반복문
for (begin; condition; step) {
  // ...
}

for (let i = 0; i < 3; i++) {
  // 인라인 변수 선언 - 반복문 안에서만 사용가능한 변수
  alert(i); // 0, 1, 2
}

// begin i = 0 반복문 진입시 한 번 실행
// condition i < 3  - 반복마다 해당 조건 확인, false면 반복 그만
// step i++ - 반복의 body가 실행된 이후 실행됨

// 구성요소 생략하기
let i = 0;
for (; i < 3; i++) {
  // begin이 필요하지 않기 때문에 생략
  alert(i);
}

for (; i < 3; ) {
  alert(i++); // step도 생략
}

for (;;) {
  // 무한 반복문
}

// 반복문 빠져나오기 - break
let sum = 0;

while (true) {
  let value = +prompt('숫자를 입력하세요', '');

  if (!value) break;

  sum += value;
}

alert('합계 :', sum);

// 다음 반복으로 넘어가기 continue
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  alert(i); // 1, 3, 5, 7, 9
}
// continue는 중첩을 줄여줄 수 있다.
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    alert(i);
  }
} // 위 코드와 동일하지만 중첩레벨이 한단계 더 들어간다.
// 삼항 연산자에서는 break나 continue가 올 수 없다
// (i > 5) ? alert(i) : continue // 불가능

// break/continue 레이블
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`${i}, ${j}의 값`, '');

    // 여기서 멈춰서 아래의 완료가 출력되가 하려면 ??
  }
}
alert('완료!');

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`${i}, ${j}의 값`, '');

    if (input) break outer;
  }
}
alert('완료!');

// homework

for (let i = 2; i <= 10; i++) {
  if (i * 2 !== 0) continue;
  alert(i);
}

let i = 0;
while (i < 3) {
  alert(i);
  i++;
}

while (true) {
  const input = prompt('100보다 큰 숫자를 입력하세요', '');

  if (input > 100 || !input) break;
}

let num = prompt('원하는 숫자를 입력하면 거기까지 소수 알려드림', 0);

nextPrime: for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  alert(i);
}
