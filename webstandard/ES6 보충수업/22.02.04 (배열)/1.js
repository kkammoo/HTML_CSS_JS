// 자바 스크립트의 배열엔 모든 타입의 요소가 들어갈 수 있다. (기본타입, 객체, 함수, 배열 등)

// 1) 배열 리터럴

// 2) Array 생성자 함수

// 3) ES6문법 Array.of 정적 메소드

// 4) ES6문법 Array.from 정적 메소드

//---------------------------------------------------------
const arr = [1, 2];
console.log(arr);

arr[2] = 3;
console.log(arr); // 자바스크립트는 동적으로 배열 길이가 증가함.

delete arr[2];
console.log(arr); // delete 연산자를 이용한 삭제는 희소 배열이되므로 권장하지 않는다.

arr[2] = 4;
console.log(arr);

arr.splice(2, 1);
console.log(arr); // Array.prototype.splice 메소드를 이용하여 요소를 삭제하면 희소 배열이 되지 않는다.

arr.push(5, 6, 7);
console.log(arr);
