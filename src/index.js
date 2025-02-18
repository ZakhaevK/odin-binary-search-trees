import { Tree, prettyPrint } from "./binarySearchTree.js";


const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 80, 70];

const testTree = new Tree(testArray);
prettyPrint(testTree.root);
testTree.deleteItem(67);

console.log("Find 23: " + testTree.find(23).data);
console.log("Find 8: " + testTree.find(8).data);
console.log("Level Order:")
testTree.levelOrder(print);
console.log("In Order:")
testTree.inOrder(print);
console.log("Pre-order:")
testTree.preOrder(print);
console.log("Post-Order:")
testTree.postOrder(print);
console.log("Level of 23: " + testTree.depth(23));
console.log("Level of 4: " + testTree.depth(4));
console.log("Level of 8: " + testTree.depth(8));
console.log("Height of 8: " + testTree.height(8));
console.log("Height of 23: " + testTree.height(23));
console.log("To array: " + testTree.toArray());
console.log("is array balanced?: " + testTree.isBalanced());
prettyPrint(testTree.root);

testTree.insert(102);
testTree.insert(105);
testTree.insert(111);
testTree.insert(132);

console.log("is tree balanced?: " + testTree.isBalanced());
prettyPrint(testTree.root);

console.log("Call of rebalance method...")
testTree.rebalance();

console.log("is tree balanced?: " + testTree.isBalanced());
prettyPrint(testTree.root);

// utility function to test callback functionality
function print(thing) {
  console.log(thing);
}