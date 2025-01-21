let number = 7;
function OddOrEven(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(`${number} is ${OddOrEven(number)}.`);
