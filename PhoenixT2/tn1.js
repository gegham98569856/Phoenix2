const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 },
    { name: "Ann", age: 31 },
    { name: "Bil", age: 29 },
    { name: "Mike", age: 30 },
    { name: "Alex", age: 29 },
    { name: "Son", age: 25 },
    { name: "Christian", age: 31 },
    { name: "Alla", age: 40 },
    { name: "John", age: 31 },
    { name: "David", age: 40 }
  ];

  function group(arr, prop) {
    let obj = {}
    arr.forEach(element => {
      if(!obj[element[prop]]){
        obj[element[prop]] = [element]
      }else{
        obj[element[prop]].push(element)
      }
    });
    return obj
  }
  console.log(group(people,"age"));