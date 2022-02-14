const arr = [1, 2, 3];

const f2 = (ele) => console.log(ele * 2);
const f3 = (ele) => console.log(ele * 3);

function f1(f) {
  for (let i = 0; i < arr.length; i++) {
    f(arr[i]);
  }
}

f1(f2);
f1(f3);
