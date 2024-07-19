let number = prompt("Enter the mark:");
let grade;

if(number<=100 && number>=90){
    grade = "A";
}
else if(number<=89 && number>=70){
    grade = "B";
}
else if(number<=69 && number>=60){
    grade = "C";
}

else if(number<=59 && number>=50){
    grade = "D";
}
else if(number<=49){
    grade = "F";
}

console.log("The student's grade is",grade,".");