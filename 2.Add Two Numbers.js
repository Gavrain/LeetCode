/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0
    let l3 = new ListNode
    let t = l3
    let p = t
    while (l1 && l2) {
        t.val = l1.val + l2.val + carry
        carry = 0
        if (t.val > 9) {
            t.val = t.val % 10
            carry = 1
        }
        t.next = new ListNode
        p = t
        t = t.next
        l1 = l1.next
        l2 = l2.next
    }
    while (l1) {
        t.val = l1.val + carry
        carry = 0
        if (t.val > 9) {
            t.val = t.val % 10
            carry = 1
        }
        t.next = new ListNode
        p = t
        t = t.next
        l1 = l1.next
    }
    while (l2) {
        t.val = l2.val + carry
        carry = 0
        if (t.val > 9) {
            t.val = t.val % 10
            carry = 1
        }
        t.next = new ListNode
        p = t
        t = t.next
        l2 = l2.next
    }
    if (!carry) p.next = null
    else {
        t.val = 1
    }
    return l3
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}