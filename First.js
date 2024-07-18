const student = {
    fullName : "Akhi Azim Papri",
    age : 22,
    cgpa : 3.03,
    isPass : true,
    session : "2020-21",
};

student["fullName"] = "Pakhi";
student["age"] = student["age"] + 1; //increasing value

console.log(student["age"]);  
// or 
console.log(student.cgpa);
console.log(student.fullName);

//const variable cannot be changed. But a const object's keys can be changed.