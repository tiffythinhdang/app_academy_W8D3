Array.prototype.myUniq = function () {
  let uniq = [];

  this.forEach ( el => {
    if (!(uniq.includes(el)))
      uniq.push(el);
  });

  return uniq;
}

Array.prototype.twoSum = function () {
  let pairs = [];
  const arr = this;

  this.forEach ((el1, i1) => {
    arr.forEach((el2, i2) => {
      if (i2 > i1 && el1 + el2 === 0 )
        pairs.push([i1, i2]);
    });           
  });

  return pairs;
}

Array.prototype.myTranspose = function () {
  let transposed = [];
  const arr = this;

  this.forEach((el1, i1) => {
    let newRows = [];

    arr.forEach((el2, i2) => {
      newRows.push(arr[i2][i1]);
    });

    transposed.push(newRows);
  });

  return transposed;
}