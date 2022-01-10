'use strict';
// switch
switch (x) {
  case 'value1': // if(x === 'value1')
    break;

  case 'value3': // if(x === 'value2)
    break;

  default:
    // else
    break;
}

let a = 2 + 2;
switch (a) {
  case 3:
    console.log('비교 값보다 작다');
    break;
  case 4:
    console.log('비교 값과 일치');
  case 5:
    console.log('비교 값보다 크다');

  default:
    console.log('어떤 값인지 모르겠다'); //  break가 없는경우 case 4:부터 여기까지 쭉 실행된다
    break;
}

// case 인수엔 어떤 표현식도 올 수 있다
let a = '1';
let b = 0;

switch (+a) {
  case b + 1:
    alert('표현식 +a 는 숫자 1 b+1도 1이므로, 이곳의 코드가 실행된다');
    break;

  default:
    console.log('이 코드는 실행되지 않습니다.');
    break;
}

// 여러개의 case 묶기
let number = +prompt('2 + 2는?', '');

switch (number) {
  case 4:
    alert('계산이 맞습니다');
    break;
  case 3:
  case 5:
    alert('계산이 틀립니다!');
    alert('수업을 다시 들으세욧!');
    break;

  default:
    console.log('계산이 이상하네요~');
    break;
}

// 자료형을 반드시 맞춰줘야 한다.
let arg = prompt('값을 입력해주세요.', '');

switch (arg) {
  case '0':
  case '1':
    alert('0이나 1을 입력하셨습니다');
    break;
  case 3: // 숫자형이기 때문에 일치하지 않는다
    console.log('이 코드는 절대 실행되지 않습니다');
  default:
    console.log('알 수 없는 값');
    break;
}

// homework
if (browser === 'Edge') {
  alert('Edge를 사용하시네요?');
} else if (
  browser === 'Chrome' ||
  browser === 'Firefox' ||
  browser === 'Safari' ||
  browser === 'Opera'
) {
  alert('저희가 지원하는 브라우저를 사용하고 계시네요');
} else {
  alert('레이아웃이 깨질 수 있습니다. chrome사용을 권장합니다');
}

let a = +prompt('a?', '');
switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2, 3');
    break;

  default:
    break;
}
