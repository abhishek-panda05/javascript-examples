function addNumbers(a, b) {
  a = a ??= 0;
  b = b ??= 0;
  return Number(a) + Number(b);
}
let a = 10;
let b = 20;
let c = addNumbers(null, 10);
console.log(c);

//If only one parameter is passed the outpu is NaN it doesnt throw and error
