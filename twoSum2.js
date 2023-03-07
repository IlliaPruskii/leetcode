/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  //time O(n)
  //memory O(1)

  let i = 0, k = numbers.length - 1

  while(i < k) {
    const sum = numbers[i] + numbers[k]

    if (sum === target) {
      return [i + 1, k + 1]
    }

    if (sum < target) {
      i += 1
      continue
    }

    if (sum > target) {
      k -= 1
      continue
    }
  }
};