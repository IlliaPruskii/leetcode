
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const reg = new RegExp(/\[\]|{}|\(\)/gi)
  let res = s;

  while(reg.test(res)) {
    res = res.replaceAll(reg, '')
  }

  if (res.length === 0) return true

  return false
};

console.log(isValid('[{}](){}'))