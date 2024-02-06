function arrayIntersection(arr1, arr2) {
  // const set1 = new Set(arr1)
  // const set2 = new Set(arr2)

  // const intersection = [new Array(set1)].filter(
  //   (a) => a.includes([new Array(set2)]))
  
  // const intersection = arr1.filter((a) => arr2.includes(a))

  return arr1.filter((a) => arr2.includes(a))
}

module.exports = arrayIntersection;
