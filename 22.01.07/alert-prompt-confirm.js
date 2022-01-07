// alert - 사용자에게 메시지를 보여줌
alert('Hello');

// prompt - 사용자에게 값을 입력받음
// let result = prompt(title, [default])
// title - 보여줄 문자열 , default - 초깃값(선택)

let age = prompt('나이를 입력해주세요.', 100);
alert(`당신의 나이는 ${age}입니다.`);

// confirm - 확인과 취소가 있는 모달창 제공
// 확인 시 true , 취소나 esc 시 false

let isBoss = confirm('당신이 주인인가요?');
alert(isBoss); // 확인 버튼을 눌렀다면 true가 출력됩니다.

// homework
let userName = prompt("what's your name?", '');
alert(userName);
