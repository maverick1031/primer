console.log("Hello")

function myFunc(nameFunction){
    return ("Hello " + nameFunction() + ".")
}

console.log(myFunc(function() {
    return "Maverick"
}));

function printName(newFunction, printFunction) {
    printFunction(myFunc(newFunction))
}

printName(function() { return "Adam"}, console.log)

//Arrow Functions
const myFunc1 = (nameFunction) => ("Hello " + nameFunction() + ".")
const printName1 = (newFunction, printFunction) => printFunction(myFunc1(newFunction))

let myArray = [100, "Name", true]
console.log(`Index 0 : ${myArray[0]}`)
for(let i=0; i < myArray.length; i++) {
    console.log(myArray[i])
}
myArray.forEach((value, index) => console.log(`Index ${index} : ${value}`))