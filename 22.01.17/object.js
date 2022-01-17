// 객체
// let user = new Object(); // "객체 생성자" 문법
// let user = {}; //  '객체 리터럴' 문법

let user = {
  name: 'John', // 키 : "name", 값 : "John"
  age: 30, // 키 : "age", 값 : 30
};

console.log(user.name);
console.log(user.age);

// 객체에 프로퍼티 추가
user.isAdmin = true;

// delete 연산자를 사용하면 프로퍼티 삭제 가능
delete user.age;

console.log(user);

// 단어를 조합해서 만들 땐 따옴표로 묶어줘야 합니다~
user = {
  'likes birds': true,
};

// 상수 객체는 수정될 수 있습니다.

const test = {
  name: 'John',
};

test.name = 'Pete';
console.log(test.name); // Pete

// 대괄호 표기법 - 여러단어를 조합해서 만든 경우
// user.likes birds = true // 문법 에러

// set
user['likes birds'] = true;

// get
console.log(user['likes birds']);

// delete
delete user['likes birds'];

// 이런 식으로도 활용 가능
let key = 'likes birds';

// user["likes birds"] = true와 같다
user[key] = true;

// 활용한 코드
let user = {
  name: 'John',
  age: 30,
};

let key = prompt('사용자의 어떤 정보를 얻고 싶으신가요?', 'name');

alert(user[key]); // 변수로 접근

// 점으로 표기하면 이런 방식이 안된다.
let user = {
  name: 'John',
  age: 30,
};

let key = 'name';
console.log(user.key); // undefined

// 계산된 프로퍼티
let fruit = prompt('어떤 과일을 구매하시겠습니까?', 'apple');

let bag = {
  [fruit]: 5, // 변수 이름이 동적으로 할당
};

console.log(bag.apple); // friut에 apple이 할당된 경우

// 좀 더 나은 방식
let fruit = prompt('어떤 과일을 구매하시겠습니까?', 'apple');
let bag = {};

// 변수 fruit을 사용해 프로퍼치 이름 만들기
bag[fruit] = 5;

// 더 복잡한 표현식이 올 수도 있습니다.
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5,
};

// 단축 프로퍼치
function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user = makerUser('John', 30);
console.log(user.name); // John

// 프로퍼티 이름의 제약사항 - 예약어 가능
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

console.log(obj.for + obj.let + obj.return); // 6

// 키에 숫자를 넣으면 문자열로 자동변환됩니다
let obj = {
  0: 'test', // "0" : "test"와 동일합니다
};

// 숫자 0은 문자열 "0"으로 변환되기 때문에 같은 결과를 반환
console.log(obj['0']); // test
console.log(obj[0]); // test

// __proto__는 불가능
let obj = {};
obj.__proto__ = 5;
console.log(obj.__proto__); // [object Object] - 숫자를 할당했지만 값은 객체가 되었다.

// in 연산자로 프로퍼ㅣ 존재 여부 확인하기
'Key' in object;
let user = {};
console.log(user.noSu);

let user = { name: 'John', age: 30 };

console.log('age' in user); // user.age가 존재하므로 true가 출력됩니다.
console.log('blabla' in user); // false가 출력됩니다.

let user = { age: 30 };

let key = 'age';

// undefined랑 비교해도 되는데 in 연산자가 있는 이유
let obj = {
  test: undefined,
};

console.log(obj.test); // undefined이 출력되는데 프로퍼티는 있음
console.log('test' in obj); // true

// for...in - for(;;)와는 완전히 다르다.
// 문법
for (key in object) {
  // 각 프로퍼티 키를 이용하여 본문을 실행합니다.
}

let user = {
  name: 'John',
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  // let prop in이런식으로도 가능
  console.log(key); // name, age, isAdmin
  console.log(user[key]); // John, 30, true
}

// 객체 정렬 방식

let codes = {
  49: '독일',
  41: '스위스',
  44: '영국',
  // ...
  1: '미국',
};
// 정수 키 값은 1, 41, 44, 49 순으로 정렬된다
for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

// 정수 이외의 값은 작성된 순서대로 프로퍼티가 나열됩니다.
let user = {
  name: 'John',
  surname: 'Smith',
};
user.age = 25;

for (let prop in user) {
  console.log(prop); // name, surname, age
}

// 숫자 추가 순으로 하는 꼼수
let codes = {
  '+49': '독일',
  '+41': '스위스',
  '+44': '영국',
  // ...
  '+1': '미국',
};

for (let code in codes) {
  console.log(+code); // 49, 41, 44, 1
}

// homework
const user = {
  name: 'John',
  surname: 'Smith',
};
user.name = 'Pete';

delete user.name;

function isEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  return true;
}

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let salary in salaries) {
  sum += salaries[salary];
}

console.log(sum);

function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] === 'number') {
      menu[key] *= 2;
    }
  }
}
