/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

var removeNthFromEnd = function (head, n) {
    let l = head
    let r = head
    for (let i = 0; i < n; i++) {
        r = r.next
    }
    if (r == null) return l.next
    while (r.next != null) {
        l = l.next
        r = r.next
    }
    l.next = l.next.next
    return head
}
