let marks = [85,97,44,37,76,60];
let sum = 0;
let length = marks.length;
for(let i = 0; i<length; i++)
{
    sum = sum + marks[i];
}

let avg = sum / length;

console.log(`Avg marks of the class = ${avg}`);