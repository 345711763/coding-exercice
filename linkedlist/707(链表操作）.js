function Node(val, next) {
    this.val = val
    this.next = next;
}
var MyLinkedList = function() {
    this.head = null;
    this.length = 0;
};

MyLinkedList.prototype.getNode = function(index) {
    if (index > this.length - 1) {
        return null
    }
    let current = this.head;
    while(index > 0) {
        current = current.next;
        index--
    }
    return current;
}
/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    const node = this.getNode(index);
    return node === null ? -1 : node.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new Node(val, this.head);
    this.head = node;
    this.length++
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (this.length === 0) {
        this.addAtHead(val);
    } else {
        const lastNode = this.getNode(this.length-1);
        lastNode.next = new Node(val, null);
        this.length++
    }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index <= this.length) {
        if (this.length === 0 || index === 0) {
            this.addAtHead(val)
        } else {
            const node = this.getNode(index-1)
            node.next = new Node(val, node.next);
            this.length++;
        }
    }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.length || index < 0) {
        return
    }
    if (index === 0) {
        this.head = this.head.next;
        this.length--;
    } else {
        const node = this.getNode(index-1)
        node.next = node.next.next
        this.length--;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */