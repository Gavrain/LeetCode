/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2
    if (!list2) return list1
    let res
    if (list1.val < list2.val) {
        res = list1
        list1 = list1.next
    } else {
        res = list2
        list2 = list2.next
    }
    let tNode = res
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tNode.next = list1
            list1 = list1.next
        } else {
            tNode.next = list2
            list2 = list2.next
        }
        tNode = tNode.next
    }
    if (!list1) tNode.next = list2
    else tNode.next = list1
    return res
}