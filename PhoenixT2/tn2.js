//1.
// const nestedArray = [1, [2, [3, [4]], 5]];
// let arr = nestedArray.flat(Infinity)
// console.log(arr);

//2.
const nestedArray = [1, [2, [3, [4]], 5]];
function flat(nestedArray){
    let arr = []
        for(let i = 0; i < nestedArray.length; ++i){
            if(Array.isArray(nestedArray[i])){
                arr = arr.concat(flat(nestedArray[i]))
            }else{
                arr.push(nestedArray[i])
            }
        }
        return arr
}

console.log(flat(nestedArray));