Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

Array.prototype.myMap = function (callback) {
  let newArr = [];

  this.myEach((el) => {
    newArr.push(callback(el));
  });

  return newArr;
}

Array.prototype.myReduce = function (callback, initialValue) {
  if (!!initialValue) {
    let acc = initialValue;
    this.myEach((el) => {
      acc = callback(acc, el);
    });
    return acc;
  } else {
    let acc = this[0];
    this.slice(1).myEach((el) => {
      acc = callback(acc, el);
    });
    return acc;
  }
}