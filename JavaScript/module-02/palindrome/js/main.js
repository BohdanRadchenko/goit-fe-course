'use strict';

// function pallindrom(str) {
//     str = str.toLowerCase();
//     let strArray = str.split('');
//     strArray = strArray.reverse();
//     strArray = strArray.join('');
//     if (str === strArray) return true;
//     else return false;
    
//     return strArray;
//   }

//   console.log(pallindrom('abba'));


//optimization
// function pallindrom(str) {
//     str = str.toLowerCase();
//     return str === str.split('').reverse().join('');
// }

// console.log(pallindrom('abba'));

//ES6
const pallindrom = str => {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(pallindrom('abba'));