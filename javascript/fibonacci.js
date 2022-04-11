function fibonacci(num) {
  // type your code here
  if (num<2) {
    return num
  }
  arr=[0,1]
  for (i=0; i<num -1; ++i) {
    sum = arr[0] + arr[1]
    arr = [arr[1], sum]
  }
  // return fibonacci(num-2) + fibonacci(num-1) 
  return arr[1]

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(20));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
