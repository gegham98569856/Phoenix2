function customMap(arr, callback) {
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(callback(arr[i], i, arr));
    }
    return mappedArray;
}
console.log(customMap([1,2,3],(a,i) => (a + i)));
