// 함수를 반환값으로 사용할 수 있다. (고차함수)

function f1() {
  // console.log('f1()');
  return function f2() {
    console.log('f2()');
  };
}

f1()(); // 소괄호 2개 : f1()을 호출하면서 그 안에 있는 return 함수를 호출함.

const x = f1();
console.log(x); // function f2를 가리킴
x(); // f1()();과 의미가 같다.
