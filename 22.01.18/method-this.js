// 메서드와 this
let user = {
  name: ' John',
  age: 30,
};

// 객체 user도 특정한 행동을 할 수 있다.

// 메서드 만들기 - 객체 프로퍼티에 할당된 함수를 메서드라고 부른다
user.sayHi = function () {
  alert('안녕하세요');
};

user.sayHi(); // 안녕하세요

// 이미 정의된 함수를 통해서도 만들 수 있다.

function sayBye() {
  alert('good bye~!');
}

user.sayBye = sayBye;
user.sayBye(); // good bye~!

// 메서드 단축 구문
// 아래의 두 객체는 동일하게 동작합니다

user = {
  sayHi: function () {
    console.log('Hello');
  },
};

user = {
  sayHi() {
    alert('Hello');
  },
};

user.sayHi();

// this
let user = {
  name: 'John',
  age: 30,

  sayHi() {
    console.log(this.name); // this를 활용
  },
};

user.sayHi(); // John

let user = {
  name: 'John',
  age: 30,

  sayHi() {
    console.log(user.name); // this.name 대신 user.name를 썼는데 좋지 않다.
  },
};

let admin = user;
user = null;
admin.sayHi(); // 이런 문제가 생길 수 있기 때문 (user가 없는데, user.name을 참조)

// 자유로운 this
// this는 런타임에 따라 결정된다. 동일한 함수여도 다른 객체엣 호출하면 this의 값이 달라진다
let user = { name: 'John' };
let admin = { name: 'Admin' };

function sayHi() {
  alert(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f(); // John
admin.f(); // Admin

// homework
function makerUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();

console.log(user.ref.name); // Error

let calculator = {
  x: 0,
  y: 0,
  read() {
    this.x = +prompt('first number', 0);
    this.y = +prompt('second number', 0);
  },
  sum() {
    return this.x + this.y;
  },
  mul() {
    return this.x * this.y;
  },
};

// 체이닝
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep() {
    alert(this.step);
  },
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

// 이걸 체이닝으로 바꾸고 싶으면 각 메서드에 this를 리턴해주면 된다
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep();
