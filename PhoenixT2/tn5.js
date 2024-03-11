const strings = ["short", "medium length", "longest string"];

function findLongestString(strings){
    let maxLength = 0
    for(let i = 1; i < strings.length; ++i){
       
        if(strings[i].length > strings[maxLength].length){
            maxLength = i
        }
    }
    return strings[maxLength]
}

console.log(findLongestString(strings));