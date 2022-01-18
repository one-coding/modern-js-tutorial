// 참조에 의한 객체 복사
// 원시타입은 값 그대로 저장 할당되고 복사된다
let message = 'Hello';
let phrase = message;
// message와 phrase 각각의 독립된 변수에 문자열 "Hello"가 저장

// 객체는 저장되어있는 메모리 주소인 참조값이 변수에 저장된다.
let user = { name: 'John' };
let admin = user;

// user와 admin은 같은 객체를 가르킨다, 즉 admin으로 참조해서 값을 변경해도 user도 변경된다
admin.name = 'Pete';
console.log(user.name); // 'Pete'가 출력된다.

// 객체가 서랍장이라면 변수는 서랍장 열쇠라고 볼 수 있다. 서랍장은 하나, 열 수 있는 열쇠는 2개인 샘이다

// 참조에 의한 비교
// 동등연산자(==)와 일치 연산자(===) 둘 다 동일하게 동작
let a = {};
let b = a;
console.log(a == b); // true
console.log(a === b); // true

let a = {};
let b = {}; // 독립된 두 객체
console.log(a == b); // false

// 객체 복사, 병합과 Object.assign
// 객체를 복사하고 싶은데 둘 다 하나를 가르키는 게 아니라 독립적인 두 개가 되길 원함

let user = {
  name: 'John',
  age: 30,
};

let clone = {}; // 새로운 빈 객체

for (let key in user) {
  clone[key] = user[key];
}

clone.name = 'Pete';
console.log(user.name); // John

// Object.assign을 활용
// Objecrt.assign(dest, [src1, src2, scr3 ...]) - 기본 문법

let user = { name: 'John' };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2);

console.log(user); // {name : "John", canView : true, canEdit : true}

let user = { name: 'John' };
Object.assign(user, { name: 'Pete' });
console.log(user); // {name: 'Pete} - 기존에 있는 프로퍼티라면 덮어쓰기

let user = { name: 'John', age: 30 };
const clone = Object.assign({}, user); // clone = {name: "John", age : 30}

// 중첩 객체 복사
let user = {
  name: 'John',
  sizes: {
    height: 182,
    width: 50,
  },
};

console.log(user.sizes.height); // 182

clone.sizes = user.sizes; // 이렇게 되면 복사가 아니라 같은 객체를 참조하게 된다

let clone = Object.assign({}, user);

console.log(user.sizes === clone.sizes); // true 같은 객체
user.sizes.width++; // user에서 sizes의 width을 올리면
console.log(clone.sizes.width); // clone의 sizes에도 반영

// 이런 경우엔 깊은 복사를 구현해야한다.
// lodash 라는 라이브러리의 메서드인 _.cloneDeep(obj)를 하면 쉽게 구현 가능
