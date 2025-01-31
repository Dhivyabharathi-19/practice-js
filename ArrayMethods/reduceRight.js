let array = [10, 20, 30, 40, 50];
let result = array.reduceRight((accumulator, value) => accumulator + value, 0);
console.log(result);
