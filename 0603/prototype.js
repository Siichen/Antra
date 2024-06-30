// * forEach, filter, map, includes, indexOf, reduce, slice, splice

// set arr for all
const arr = ['1', '2', '3', '18', '29', '36'];

// forEach
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

arr.myForEach(function (ele, i, self) {
    console.log(ele, i, self);
});

// filter
Array.prototype.myFilter = function (cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i] >= 3, i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };

arr.myFilter(function (ele, i, self) {
    console.log(ele, i, self);
})


// map
Array.prototype.myMap = function (cb) {
    let result = [];
    for(let i = 0; i < this.length; i++) {
        result[i] = cb(this[i], i, this);
    }
    return result;
}

arr.myMap(function (ele, i, self) {
    console.log(ele, i, self);
})

// includes
Array.prototype.myIncludes = function (ele, start) {
    for(let i = start; i < this.length; i++) {
        if (this[i] === ele) {
            return true;
        }
    }
    return false;
}

console.log(arr.myIncludes(9, 1));

// indexOf
Array.prototype.myIndexOf = function (search, start) {
    for(let i = start; i < this.length; i++) {
        if (this[i] === search) {
            return i;
        }
    }
    return -1;
}

console.log(arr.myIndexOf('18', 0));

// reduce
Array.prototype.myReduce = function (cb, initial) {
    let total = 0;
    for(let i = 0; i < this.length; i++) {
        total += this[i];
        cb(total, this[i], i, this, initial);
    }
}

arr.myReduce(function (total, ele, i, self, init) {
    console.log(total, ele, i, self, init);
})

// slice
Array.prototype.mySlice = function (start = 0, end = this.length) {
    let result = [];
    if (start < 0) {
        start += this.length;
    }
    if (end < 0) {
        end += this.length;
    }
    while (start < end) {
        result += this[start];
        start ++;
    }
    return result;
}

console.log(arr.mySlice(3,4));

// splice
Array.prototype.mySplice = function (start, count, ...item) {
    let removedItem = [];
    let reaminItem = [];
    let result = [];

    if (start < 0) {
        start = Math.max(length + start, 0);
    } else {
        start = Math.min(start, this.length);
    }

    count = Math.min(Math.max(count, 0), this.length - start);

    for (let i = 0; i < count; i++) {
        removedItem.push(this[start + i]);
    }

    result = this.slice(0, start).concat(item, this.slice(start+count));

    // update the original array
    while (this.length > result.length) {
        this.pop();
    }
    for (let i = 0; i < this.length; i ++) {
        this[i] = result[i];
    }

    // reamin item
    reaminItem = this.slice();

    return removedItem;
}

console.log(arr.mySplice(1, 2, '90', '89'));