import { mergeSort } from "./mergeSort";
export { Tree };

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    const root = Tree.buildTree(array);
  }

  static buildTree(arr) {
    // Remove duplicates, then sort array using mergeSort from previous project
    let newArr = [...new Set(arr)];
    newArr = mergeSort(newArr);

    // Call recursive BST on sorted array
    return Tree.sortedArrayToBSTRecur(newArr, 0, newArr.length - 1);
  }

  static sortedArrayToBSTRecur(arr, low, high) {
    if (low > high) return null;

    // Find the middle element
    let mid = low + Math.floor((high - low) / 2);

    // Create root node
    let root = new Node(arr[mid]);

    // Create left subtree
    root.left = Tree.sortedArrayToBSTRecur(arr, low, mid - 1);

    // Create right subtree
    root.right = Tree.sortedArrayToBSTRecur(arr, mid + 1, high);

    return root;
  }

  insert(value, root = this.root) {
    // Exit condition. adds node where a space exists
    if (root === null) {
      return new Node(value);
    }
    // No duplicates in BST
    if (root.data === value) {
      return root;
    }
    // Recursive with left and right nodes
    if (root.data > value) {
      root.left = this.insert(value, root.left);
    } else if (root.data < value) {
      root.right = this.insert(value, root.right);
    }

    return root;
  }

  deleteItem(value) {}
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
