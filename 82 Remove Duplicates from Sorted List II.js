/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const dummyHead = new ListNode(null, head);
    let prev = dummyHead;
    let curr = head;
    let hasDuplicates = false;
    while(curr !== null) {
        if (curr.next !== null && curr.val === curr.next.val) {
            curr = curr.next;
            hasDuplicates = true;
            continue
        }
        if (hasDuplicates) {
            prev.next = curr.next;
            curr = curr.next
            hasDuplicates = false;
        } else {
            prev = prev.next;
            curr = curr.next;
        }
    }
    return dummyHead.next
};