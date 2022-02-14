// 1. 함수 선언문
function f1(num1, num2) {
  return num1 + num2;
}

// 2. 함수 표현식
const f2 = function (num1, num2) {
  return num1 + num2;
};

// 3. 화살표 함수
// 실행문이 하나인 경우엔 중괄호 생략 가능.
// 실행문이 하나인 경우엔 return문도 생략 가능.
const f3 = (num1, num2) => {
  return num1 + num2;
};

f1(3, 4);
f2(5, 6);
f3(4, 1);
