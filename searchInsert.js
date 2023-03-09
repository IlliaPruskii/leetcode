/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let start  = 0
  let end = nums.length - 1

  if (nums[start] > target) return start
  if (nums[end] < target) return nums.length

  while (start <= end) {
    let mid = Math.trunc((start + end )/ 2)

    if (nums[mid] === target) return mid

    if (nums[mid] > target) {
      if (nums[mid - 1] < target) return mid
      end = mid - 1
    }

    if (nums[mid] < target) {
      if (nums[mid + 1] > target) return mid + 1
      start = mid + 1
    }
  }
};

console.log(searchInsert([1,3], 2))