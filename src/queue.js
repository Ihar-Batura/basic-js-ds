const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.linkList = null;
  }
  
  getUnderlyingList() {
    return this.linkList;
    
  }
 
  enqueue(value) {
    if (this.linkList){
      let node = this.linkList;
      while (node.next) node = node.next;
      node.next = new ListNode(value);
    } else {this.linkList = new ListNode(value);
    }
  }

  dequeue() {
    if (this.linkList) {
    const value = this.linkList.value;
    this.linkList = this.linkList.next;
    this.prevItem++;
    return value;
    }
  }
}

module.exports = {
  Queue
};
