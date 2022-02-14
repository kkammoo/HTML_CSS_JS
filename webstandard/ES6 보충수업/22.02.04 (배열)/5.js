const arr = [1, 2, 3];

const f2 = (ele, idx, obj) => ele * 2;
const f3 = (ele, idx, obj) => ele * 3;

const result2 = arr.map(f2);
console.log(result2); // 2의 배수

const result3 = arr.map(f3);
console.log(result3); // 3의 배수
