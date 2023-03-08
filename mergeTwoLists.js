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
var mergeTwoLists = function(list1, list2) {
  let i = 0;
  let k = 0;

  const res = []
  while (i < list1.length || k < list2.length) {
    if (list1[i] <= list2[k] && i < list1.length) {
      res.push(list1[i])
      i += 1
    } else {
      res.push(list2[k])
      k += 1
    }
  }

  return res
};

console.log('mergeTwoLists', mergeTwoLists([1,2,4], [1,3,4]))