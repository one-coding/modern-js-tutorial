// new 연산자와 생성자 함수
// 함수 이름 첫 글자는 대문자로 시작합니다
// 반드시 new 연산자를 붙인다

function User(name) {
  // this = {}; ( 빈 객체가 암시적으로 만들어짐 )
  this.name = name;
  this.isAdmin = false;

  // return this; ( this가 암시적으로 반환됨 )
}

let user = new User('보라');
/* 위와 밑이 같은 동작
let user = {
    name: '보라',
    isAdmin: false,
  };
*/

alert(user.name); // 보라
alert(user.isAdmin); // false

let user = new (function () {
  this.name = 'John';
  this.isAdmin = false;
})();

function BigUser() {
  this.name = '원숭이';
  return { name: '고릴라' }; // <-- this가 아닌 새로운 객체를 반환하기 때문에 쓰면 안됌
}

alert(new BigUser().name); // 고릴라

function SmallUser() {
  this.name = '원숭이';
  return; // <-- this를 반환함
}

alert(new SmallUser().name); // 원숭이

// 대부분 return을 아예 쓰지 않는다.

// 생성자 내 메서드
function User(name) {
  this.name = name;

  this.sayHi = function () {
    alert(`제 이름은 ${this.name} 입니다`);
  };
}

let bora = new User('이보라');

bora.sayHi();

// homework
let obj = {};
function A() {
  return obj;
}

function B() {
  return obj;
}

alert(new A() == new B()); // true

function Calculator() {
  this.x = 0;
  this.y = 0;
  this.read = function () {
    this.x = +prompt('첫 번째 값을 입력하세요', 0);
    this.y = +prompt('두 번째 값을 입력하세요', 0);
  };

  this.sum = function () {
    return this.x + this.y;
  };

  this.mul = function () {
    return this.x * this.y;
  };
}

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt('값을 입력하세요', 0);
  };
}
