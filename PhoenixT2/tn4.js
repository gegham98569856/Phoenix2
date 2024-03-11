function combineUnique(array1, array2){
    let arrSet = new Set([...array1, ...array2])
    let arr = Array.from(arrSet)
    return arr
}
console.log(combineUnique([1,2,3,4],[2,3,4,5,6]));