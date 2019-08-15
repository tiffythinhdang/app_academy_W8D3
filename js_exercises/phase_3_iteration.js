Array.prototype.bubbleSort = function () {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    let indices = [...Array(this.length - 1).keys()];

      indices.forEach( el => {
        if (this[el] > this[el + 1]) {
          [this[el], this[el + 1]] = [this[el + 1], this[el]]
          sorted = false;
        }
      });
  }
  return this;
}

String.prototype.subStrings = function () {
  let subs = [];
  let str = this;
  let indices = [...Array(this.length).keys()];
  indices.push(str.length);
  
  indices.forEach( el1 => {
    indices.forEach( el2 => {
      if (el2 > el1 ) {
        subs.push( str.substring(el1, el2) );
      }
    });
  });
  
  return subs;
}
