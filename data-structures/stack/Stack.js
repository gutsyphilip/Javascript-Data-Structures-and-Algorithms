/**
 * STACK DATA STRUCTURE
 *
 * Stack is an abstract data type with a bounded(predefined) capacity. It is a simple data structure that allows adding and removing elements in a particular order. Every time an element is added, it goes on the top of the stack and the only element that can be removed is the element that is at the top of the stack, just like a pile of objects
 */

const Stack = function () {
  // Implement stack max size
  this.MAX_SIZE = undefined;
  // Keep a data store
  this.storage = {};

  // Track items in the store
  this.counter = 1;

  // peek: get last item in stack
  this.peek = () => {};

  // pop: remove and returns last item from stack
  this.pop = () => {};

  // push: add item to a stack
  this.push = (value) => {};
};


// For testing sake
let newStack = new Stack(5);

newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);

console.log(newStack.peek()); // 4
console.log(newStack.pop()); // 4

// newStack.push(4);
console.log(newStack.counter);
