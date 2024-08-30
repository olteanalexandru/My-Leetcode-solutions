/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {

    const values: number[] = [];
    for (const list of lists) {
        let current = list;
        while (current) {
            values.push(current.val);
            current = current.next;
        }
    }

    values.sort((a, b) => a - b);

    const dummy = new ListNode();
    let current = dummy;
    for (const val of values) {
        current.next = new ListNode(val);
        current = current.next;
    }
    
    return dummy.next;
}