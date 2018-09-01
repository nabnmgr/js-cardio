// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//////////////////////
/// SOULUTION ONE ///
////////////////////

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

//////////////////////
/// SOULUTION TWO ///
////////////////////

function reverse(str) {
  let reversed = '';
  // avoid for loops
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

//////////////////////
/// SOULUTION THREE ///
////////////////////

// function reverse(str) {
//   return str.split('').reduce((reversed, char) => char + reversed, '');
// }

module.exports = reverse;
