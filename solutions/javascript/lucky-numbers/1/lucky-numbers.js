// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
   const num1 = parseInt(array1.join(''))
   const num2 = parseInt(array2.join(''))
    return num1 + num2
  
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let str = value.toString()
  let reversestr = str.split('').reverse().join('')
  return str === reversestr ? true : false
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === null || input === undefined || input === ''){
    return 'Required field'
  }
  const number = Number(input);

  if(isNaN(number) || number === 0)
  {
    return 'Must be a number besides 0'
  }

  return ''
}
