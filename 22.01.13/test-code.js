// 스펙 - 코드가 무슨 일을 하는 지 상상한 후 이를 자연어로 표현해야함
// 1. 테스트 - 함수가 의도하는 동작을 제대로 수행하고 있는지 보장함
// 2. 문서 - 함수가 어떻게 동작하고 수행하는 지 설명
// 3. 예시 - 함수를 어떻게 사용하는 알려줌

describe('pow', function () {
  describe('x를 세 번 곱합니다', function () {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x}를 세번 곱하면 ${expected}입니다`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });
  it('2의 3제곱은 8입니다', function () {
    assert.equal(pow(2, 3), 8);
  });

  it('3의 4제곱은 81입니다', function () {
    assert.equal(pow(3, 4), 81);
  });

  it('n이 음수일 때 결과는 NaN입니다.', function () {
    assert.isNaN(pow(2, -1));
  });

  it('n이 정수가 아닐 때 결과는 NaN입니다.', function () {
    assert.isNaN(pow(2, 1.5));
  });
});

/* describe("title", function() {...}) */
// 구현하고자 하는 설명이 들어갑니다.
// it 블록을 한데 모아주는 역할도 합니다

/* it("유스 케이스 설명", function(){...}) */
// 첫 번째 인수엔 특정 유스 케이스에 대한 설명이 들어갑니다. 자연수로 적어줍니다
// 두번째 인스엔 테스트 함수가 들어갑니다

/* assert.eqeal(value1, value2) */
// 기능을 제대로 구현했다면 it 블록 내의 코드가 에러 없이 실행됩니다
// 인수끼리 동등 비교했을 때 다르다고 판단되면 에러를 반환합니다
