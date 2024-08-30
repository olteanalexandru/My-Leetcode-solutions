// 2. Add Two Numbers


// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.


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
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let iterator = (ListNode: ListNode | null) => {
        let arrayToBeReturned = [];
        while(ListNode != null){
            arrayToBeReturned.push(ListNode.val);
            ListNode = ListNode.next;
        }
        return arrayToBeReturned.reverse();
    } 

    let li1 = iterator(l1);
    let li2 = iterator(l2);

    let num1 = parseInt(li1.join(''));
    let num2 = parseInt(li2.join(''));

    let sum = num1 + num2;
    let sumArray = Array.from(String(sum), Number).reverse();

    let dummyHead = new ListNode(0);
    let curr = dummyHead;

    for (let num of sumArray) {
        curr.next = new ListNode(num);
        curr = curr.next;
    }

    return dummyHead.next;
};
