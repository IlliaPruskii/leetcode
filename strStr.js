/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let i = 0;
  let k = 0;
  let matchIndex = null

  while (i < haystack.length) {
    if (haystack[i] === needle[k]) {
      if (matchIndex === null) matchIndex = i
      i += 1
      k += 1
      if (k === needle.length) {
        return matchIndex
      }
    } else {
      i = matchIndex === null ? i + 1 : matchIndex + 1
      k = 0
      matchIndex = null
    }
  }

  return -1
};

console.log(strStr('mississippi', 'issip'))