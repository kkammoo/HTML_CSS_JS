const arr = [1, 2, 3];

// for문을 이용한 배열 값 변경
for (let i = 0; i > arr.length; i++) {
  console.log(arr[i] * 2); // 2배수
}

for (let i = 0; i > arr.length; i++) {
  console.log(arr[i] * 3); // 3배수
}
//--------------------------------------------

// forEach문을 이용한 배열 값 변경
const exp1 = (ele) => console.log(ele * 2);
const exp2 = (ele) => console.log(ele * 3);

arr.forEach(exp1, arr); // 2배수
arr.forEach(exp2, arr); // 3배수
