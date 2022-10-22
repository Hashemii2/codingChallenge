function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.leftCount = 0;
  this.equalCount = 1;
}

function BST() {
  this.root = null;

  this.insert = function (value) {
    let count = 0;
    let node = new Node(value);

    if (this.root == null) {
      this.root = node;
      return count;
    }

    let current = this.root;
    while (current) {
      if (current.value > value) {
        current.leftCount++;
        if (current.left == null) {
          current.left = node;
          return count;
        }
        current = current.left;
      } else if (current.value < value) {
        count += current.leftCount + current.equalCount;
        if (current.right == null) {
          current.right = node;
          return count;
        }
        current = current.right;
      } else {
        count += current.leftCount;
        current.equalCount++;
        return count;
      }
    }
  };
}

function smaller(arr) {
  let result = Array(arr.length);

  let bst = new BST();
  for (let i = arr.length; i--; ) {
    result[i] = bst.insert(arr[i]);
  }

  return result;
}

console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]));
