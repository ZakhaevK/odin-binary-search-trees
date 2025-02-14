import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("Full list of items: " + list.toString());
console.log("At index 1 (hamster): " + list.at(3));
console.log("Contains snake? (true): " + list.contains("snake"));
console.log("Contains frisbee? (false): " + list.contains("frisbee"));
console.log("Find snake? (4): " + list.find("snake"));
console.log("Find dog? (0): " + list.find("dog"));
list.insertAt("camel", 4);
console.log("Insert at camel at 4: " + list.toString());
list.pop();
console.log("Tail after pop() (snake): " + list.tail().getValue());
list.removeAt(4);
console.log("Remove Node at index 4 (camel): " + list.toString());

const list2 = new LinkedList();
list2.append("The One Ring");
console.log("New List with one item: " + list2.toString());
console.log("New List size (1): " + list2.size());
list2.pop();
console.log("New List when popped (null): " + list2.toString());
list2.pop();
console.log("New List size after pop when empty (0): " + list2.size());
