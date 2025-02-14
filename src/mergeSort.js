export { mergeSort };

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const l = mergeSort(array.slice(0, mid));
  const r = mergeSort(array.slice(mid));
  return merge(l, r);
}

function merge(left, right) {
  let array = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      array.push(left[i]);
      i++;
    } else {
      array.push(right[j]);
      j++;
    }
  }

  array = array.concat(left.slice(i)).concat(right.slice(j));

  return array;
}

console.log(mergeSort([4, 2, 7, 1, 6]));
