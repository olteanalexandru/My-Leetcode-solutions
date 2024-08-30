
//1 line fibbonaci using reduce
const lastFibonacci = n => [...Array(n)].reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []).pop();

//Reduce instead of a filter : 

const numbers = [1, 2, 3, 4, 5];
const sumOfOdds = numbers.reduce((sum, num) => num % 2 !== 0 ? sum + num : sum, 0);
console.log(sumOfOdds); // Output: 9

//Reduce instead of map 

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.reduce((result, num) => {
  result.push(num * num);
  return result;
}, []);

// Using reduce to find the maximum number in an array
const numbers = [1, 2, 3, 4, 5];
const maxNumber = numbers.reduce((max, num) => Math.max(max, num), -Infinity);
console.log(maxNumber); // Output: 5

// Using reduce to count the occurrence of each number in an array
const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const countNumbers = numbers.reduce((counts, num) => {
  counts[num] = (counts[num] || 0) + 1;
  return counts;
}, {});
console.log(countNumbers); // Output: { '1': 1, '2': 2, '3': 3, '4': 4 }

// Using reduce to flatten an array of arrays
const arrays = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = arrays.reduce((flatArray, currentArray) => {
  return flatArray.concat(currentArray);
}, []);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]


