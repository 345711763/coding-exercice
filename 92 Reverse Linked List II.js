/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const dummyHead = new ListNode(null, head);
    let lp = dummyHead;
    let c = head;
    for (let i = 1; i <= left - 1; i++) {
        lp = lp.next;
        c = c.next;
    }
    // right now lp is at the node before left
    // c is at the left node
    let p = null;
    for (let i = 0; i < right - left + 1; i++) {
        let temp = c.next;
        c.next = p;
        p = c;
        c = temp;
    }
    // now the p is at the right position, c is at the right + 1 position
    lp.next.next = c;
    lp.next = p
    return dummyHead.next;
};