'use strict';

const findObject = (array, keyName, keyValue) => {
  for (let i = 0; array.length; ++i) {
    if (array[i][keyName] === keyValue) {
      return array[i];
    }
  }
  return {};
};

module.exports = (arrayOfObjects, arrayOfStrings, keyName) => {
  // create empty array result
  let result = [];
  // iterate over arrayOfStrings array with index s
  for (let s = 0; s < arrayOfStrings.length; ++s) {
    // assign arrayOfStrings[s] to key
    let keyValue = arrayOfStrings[s];
    // find object in arrayOfObjects where keyName has keyValue and push it to result array
    result.push(findObject(arrayOfObjects, keyName, keyValue));
  }
  // return result array
  return result;
};
