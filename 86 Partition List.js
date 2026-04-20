
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var partition = function(head, x) {
    let dummyHead = new ListNode(null, head);
    let current = head;
    let prev = dummyHead;
    while(current !== null) {
        if (current.val < x) {
            prev = current;
            current = current.next;
        } else {
            while(current.next !== null && current.next.val >= x) {
                current = current.next;
            }
            if (current.next === null) {
                // no node is larger or equal to x
                break;
            } else {
                // current.next is the first node < x
                const temp = prev.next;
                prev.next = current.next;
                current.next = current.next.next
                prev.next.next = temp;
                current = prev.next;
            }
        }
    }
    return dummyHead.next;
};


const nodes = [1, 4, 3, 2, 5, 2].map(function(x) {
    return new ListNode(x)
});

for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i+1];
}
nodes[nodes.length - 1].next = null;

const head = nodes[0]
console.log(partition(head, 3))