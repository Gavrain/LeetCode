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
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
var swapPairs = function (head) {
    if (!head || !head.next) return head
    let res = head.next
    let tNode = head
    let pNode = new ListNode
    pNode.next = head
    while (tNode && tNode.next) {
        pNode.next = tNode.next
        tNode.next = tNode.next.next
        pNode.next.next = tNode
        pNode = tNode
        tNode = tNode.next
    }
    return res
}
