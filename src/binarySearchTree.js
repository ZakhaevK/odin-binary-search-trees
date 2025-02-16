import { mergeSort } from "./mergeSort.js";
export { Tree, prettyPrint };

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = Tree.buildTree(array);
  }

  static buildTree(arr) {
    // Remove duplicates, then sort array using mergeSort from previous project
    let newArr = [...new Set(arr)];
    // Does this even if its sorted, might change later
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

  deleteItem(target, root = this.root) {
    // Base case
    if (root === null) {
        return root;
    }

    // If key to be searched is in a subtree
    if (root.data > target) {
        root.left = this.deleteItem(target, root.left);
    } else if (root.data < target) {
        root.right = this.deleteItem(target, root.right);
    } else {
        // If root matches with the given key

        // Cases when root has 0 children or only right child
        if (root.left === null) 
            return root.right;

        // When root has only left child
        if (root.right === null) 
            return root.left;

        // When both children are present
        let succ = root.right;
        while (succ !== null && succ.left !== null) {
          succ = succ.left;
        }
        root.data = succ.data;
        root.right = this.deleteItem(succ.data, root.right);
    }
    return root;
  }


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