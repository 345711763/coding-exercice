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
var rotateRight = function(head, k) {
    if (head === null) {
        return null;
    }
    if (head.next === null) {
        return head;
    }
    let dummyHead = new ListNode(null, head);
    let length = 0;
    let current = dummyHead;
    while(current.next) {
        current = current.next;
        length++
    }
    let lastNode = current;
    k = k % length;
    if (k === 0) {
        return head;
    }
    // 把第 length - k 个节点的next -> null
    current = dummyHead;
    let temp;
    for (let i = 0; i < length - k; i++) {
        current = current.next;
    }
    temp = current.next;
    current.next = null
    // 把最后一个节点的next -> dummy.next
    lastNode.next = dummyHead.next;
    return temp;
};