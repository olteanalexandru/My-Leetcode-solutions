
 class ListNode {
     val: number
     next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }



// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]



function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(); 
    let current = dummyHead; 

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1; 
            list1 = list1.next; 
        } else {
            current.next = list2; 
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummyHead.next;
}
