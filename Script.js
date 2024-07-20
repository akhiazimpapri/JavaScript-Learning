function myFuncton() {
    console.log("Akhi Azim Papri");
    console.log("I am learning JS");
}
myFuncton();

function returnFunction(number, n) {
    console.log(number);
    console.log(number * n);
    sum = number + n;
    return sum; 
}
returnFunction(50, 3);
let re = returnFunction(50, 3);
console.log(re);

//arrow function
const sumi = (a,b) => {
    return a + b;
} 
console.log(sumi);
console.log(sumi(3,4));