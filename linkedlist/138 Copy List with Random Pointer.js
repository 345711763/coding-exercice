/*
A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.



Example 1:


Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
Example 2:


Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
Example 3:



Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]


Constraints:

0 <= n <= 1000
-104 <= Node.val <= 104
Node.random is null or is pointing to some node in the linked list.
 */


function _Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random
}

// Intuitive solution

// const copyRandomList = function(head) {
//     // ignore random pointer, copy linked list
//     let current = head;
//     const oldToNew = new Map();
//     while(current) {
//         oldToNew.set(current, new _Node(current.val, null, null));
//         current = current.next;
//     }
//     // reset pointer
//     current = head;
//     // handle random pointer
//     while(current) {
//         const newNode = oldToNew.get(current);
//         newNode.next = current.next ? oldToNew.get(current.next) : null;
//         newNode.random = current.random ? oldToNew.get(current.random) : null;
//         current = current.next;
//     }
//     return oldToNew.get(head);
// };

// Interweaving Nodes

const copyRandomList = function(head) {
    if (!head) return null;
    let current = head;
    while (current) {
        current.next = new _Node(current.val, current.next, null);
        current = current.next.next;
    }
    current = head;
    while(current) {
        current.next.random = current.random?.next ?? null;
        current = current.next.next;
    }
    const dummyHead = new _Node(null, null ,null);
    current = head;
    let dummy = dummyHead;
    while(current) {
        dummy.next = current.next;
        current.next = dummy.next.next;
        dummy.next.next = current.next ? current.next.next : null;
        current = current.next;
        dummy = dummy.next;
    }
    return dummyHead.next;
}

const head = new _Node(7, null, null);
head.next = new _Node(13, null, null);
head.next.next = new _Node(11, null, null);
head.next.next.next = new _Node(10, null, null);
head.next.next.next.next = new _Node(1, null, null);
head.next.random = head;
head.next.next.random = head.next.next.next.next;
head.next.next.next.random = head.next.next;
head.next.next.next.next.random = head;

console.log(copyRandomList(head))