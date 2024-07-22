// Implement a function that takes an array and some other arguments then removes the other arguments from that array:

// ```javascript
// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

// const removeFromArray = function (array, ...toRemove) {
//   let x = 0;
//   while (array.includes(toRemove[x])) {
//     for (i = 0; i < toRemove.length; i++) {
//       array.splice(array.indexOf(toRemove[i]), 1);
//     }
//   }
//   return array;
// };

// JEDZIEMY
// 1. loop gdzie lecimy tak dlugo az array.includes(toRemove[index])
const removeFromArray = function (array, ...toRemove) {
  for (let i = 0; i < toRemove.length; i++) {
    while (array.includes(toRemove[i])) {
      array.splice(array.indexOf(toRemove[i]), 1);
    }
  }
  return array;
};

console.log(removeFromArray([1, 2, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
