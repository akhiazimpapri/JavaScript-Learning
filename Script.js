let prices = [250,645,300,900,50];
let length = prices.length;

let i = 0;
for(let price of prices)
{
    console.log(`value at index ${i} = ${price}`);
    price = price - (price / 10);
    console.log(`value after offer = ${price}`);
    i++;
}