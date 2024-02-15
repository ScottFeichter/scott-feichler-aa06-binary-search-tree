// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    const newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    if (val === currentNode.val) return;

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        return this.insert(val, currentNode.left);
      }
    } else if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        return this.insert(val, currentNode.right);
      }
    }
  }

  search(val, currentNode = this.root) {
    if (!currentNode) return false;
    if (currentNode.val === val) return true;
    if (this.search(val, currentNode.left)) return true;
    return this.search(val, currentNode.right);

    // let currentNode = this.root
    // while(currentNode) {
    //   if(val < currentNode.val) {
    //     currentNode = currentNode.val;
    //   } else if (val > currentNode.val) {
    //     currentNode = currentNode.right;
    //   } else if (currentNode.val === val) {
    //     return true
    //   }
    //   return false;
  }

  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    let queue = [this.root];
    while (queue.length) {
      let node = queue.shift();
      if (node) {
        console.log(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    let stack = [this.root];

    while (stack.length) {
      let node = stack.pop();

      if (node.val) {
        allValues.push(node.val);
      }

      if (node) {
        console.log(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
      }
    }
    return allValues;
  }

  recursiveDepthFirstTraversal(stack = [], flag = false) {
    if (!flag) {
      flag = true;
    }

    if (flag) {
      if (!stack.length) {
        return;
      }
      console.log(stack.pop());
      stack.push(node.left);
      stack.push(node.right);
      this.recursiveDepthFirstTraversal(stack, flag);
    }
  }
}

// let helper = node => {
//   if (node) {
//   console.log(node.val)
//   helper(node.left);
//   helper(node.right);
//   }
// }

module.exports = { BinarySearchTree, TreeNode };
