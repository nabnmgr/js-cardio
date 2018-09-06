// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  // if row === n, we have hit the end of our problem (BASE CASE)

  // if stair string has a length === n, we are at the end of a row

  // if length of stair is <= row, print # else space

  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;

// for (let row = 0; row < n; row++) {
//   let stair = '';

//   for (let column = 0; column < n; column++) {
//     if (column <= row) {
//       stair += '#';
//     } else {
//       stair += ' ';
//     }
//   }

//   console.log(stair);
// }
