function compareArrays(arr1, arr2) {
  let result;

  result = false;

  function ifEqual(element, idx) {
    return element === arr2[idx];
  };

  if (arr1.length === arr2.length) {
    result = arr1.every(ifEqual)
  }

  return result;
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(arr => (arr > 0) && (arr % 3 === 0)).map(arr => arr * 10);

  return resultArr;
}