const arr = [1, 2, 3];

const exp1 = (ele) => console.log(ele * 2);
const exp2 = (ele) => console.log(ele * 3);

arr.forEach(exp1, arr);
arr.forEach(exp2, arr);
