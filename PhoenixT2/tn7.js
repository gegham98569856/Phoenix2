function chunkArray(data, size) {
    let arr= [];
    for (let i = 0; i < data.length; i += size) {
        arr.push(data.slice(i, i + size));
    }
    return arr;
}
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
const chunkedData = chunkArray(data, 3);
console.log(chunkedData);

