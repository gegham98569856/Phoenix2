function customReduceRight(arr, callback, arg) {
    let accumulator = arg !== undefined ? arg : arr[arr.length - 1];
    let startIndex = arg !== undefined ? arr.length - 1 : arr.length - 2;

    for (let i = startIndex; i >= 0; i--) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
}


const numbers = [1, 2, 3, 4, 5];
const sum = customReduceRight(numbers, (accumulator, currentValue) => accumulator + currentValue);
console.log(sum); 
