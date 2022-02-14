const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] * 2);
}
console.log('-----------------------');

for (let ele of arr) {
  console.log(ele * 2);
}
console.log('-----------------------');

arr.map((ele) => console.log(ele * 2));
