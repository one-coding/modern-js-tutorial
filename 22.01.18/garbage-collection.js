// 가비지 컬렉션
// 도달 가능성이라는 개념을 사용해 메모리 관리를 수행
// 도달 가능한 값은 쉽게 말해 사용할 수 있는 값! 삭제되지 않는다.

/* 
- 현재 함수의 지역 변수와 매개변수
- 중첩 함수의 체인에 있는 함수에서 사용되는 변수와 매개변수
- 전역 변수
- 기타 등등
- 이런 값을 루트(root)라고 부릅니다
-> 루트가 참조하는 값이나, 체이닝으로 루트에서 참조할 수 있는 값은 도달 가능한 값이 됩니다
*/

// example
let user = {
  name: 'John',
};

user = null; // 도달할 수 없는 상태가 됩니다. 가비지 컬렉터가 메모리에서 삭제합니다

// 참조가 두 개인 경우
let user = {
  name: 'John',
};

let admin = user;
user = null; //  admin을 통해서 도달할 수 있기 때문에 메모리에서 삭제되지 않습니다

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry({ name: 'John' }, { name: 'Ann' });

// John을 참조할 수 있는 가지 수 지워보기
delete family.father;
delete mother.husband;

// John을 통해서 Ann객체에 접근할 수 있지만 자신에게 도달할 수 있는 가능성이 없다면 사라집니다
family = null; // 이러면 서로를 모두 참조하고 있지만 그 섬에 도달할 수 없기 때문에 통째로 사라집니다
