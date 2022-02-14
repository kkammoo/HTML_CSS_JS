const arr = [1, 2, 3, 4, 5, 6, 7];

const result = arr.filter((ele, idx, obj) => {
  return ele % 2 == 0;
});
