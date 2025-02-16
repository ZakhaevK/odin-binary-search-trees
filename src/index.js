import { Tree, prettyPrint } from "./binarySearchTree.js";


const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const testTree = new Tree(testArray);
prettyPrint(testTree.root);
testTree.deleteItem(67);
prettyPrint(testTree.root);
