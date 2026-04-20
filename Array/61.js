/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var rotateRight = function(head, k) {
//     if (head === null || head.next === null) {
//         return head;
//     }
//     let length;
//     let count=0
//     let current = head;
//     while(k > 0) {
//         if (current.next.next === null) {
//             current.next.next = head;
//             head = current.next;
//             current.next = null
//             current = head;
//             k--
//             if (length === undefined) {
//                 length = count+2
//                 k = k % length
//             }
//
//         } else {
//             current = current.next
//             count++
//         }
//     }
//     return head;
// };

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} k
//  * @return {ListNode}
//  */
// var rotateRight = function(head, k) {
//     if (head === null || head.next === null) {
//         return head;
//     }
//     if (head.next.next === null) {
//         const size = 2;
//         k = k % 2
//         if (k === 1) {
//             let newHead;
//             newHead = head.next;
//             head.next.next = head
//             head.next = null;
//             return newHead
//         }
//         return head
//     }
//     let length;
//     let count=0
//     let current = head;
//     let previous = null
//     while(k > 0) {
//         if (current.next.next === null) {
//             current.next.next = head;
//             head = current.next;
//             current.next = null
//             current = previous;
//             k--
//             if (length === undefined) {
//                 length = count+2
//                 k = k % length
//             }
//
//         } else {
//             previous = current;
//             current = current.next
//             count++
//         }
//     }
//     return head;
// };

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const one = new ListNode(1)
const two = new ListNode(2)
const three = new ListNode(3)
one.next = two
two.next= three

console.log(rotateRight(one, 3))