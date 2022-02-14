// 자바스크립트에서 전역객체 window객체
// node.js에서는 global객체가 전역객체임.

function greeting() {
  console.log('hi');
}

// 함수 선언문을 전역으로 정의하면 아래와 같이 암묵적인 코드가 실행된다.
window.greeting = function () {
  console.log('hi');
};

// 3초 후 greeting 함수 호출
setTimeout(greeting, 3000); // 전역객체를 통한 함수 호출 : 전형적인 고차함수의 예
setTimeout(greeting(), 3000); // greeting함수에 return문이 없기 때문에 setTimeout(undefined, 3000)과 같은 의미가 된다.
setTimeout(function greeting() {
  console.log('hi');
}, 3000); // 함수 안에서 함수를 정의할 수 있다.
setTimeout(() => {
  console.log('hi');
}, 3000); // 화살표 함수도 사용 가능
