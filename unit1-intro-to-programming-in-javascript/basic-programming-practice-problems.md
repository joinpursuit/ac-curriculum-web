# Basic Programming Practice Problems


### Largest gap between consecutive elements in an array

Write a function that takes as input an array, and returns the largest difference between any two adjacent elements.

```
// Example input: [4, 8, 11, 5, 9, 12]
// Returns: 6 (difference between 5 and 11)

// Example input [10, 7, 11, 8, 4, 9, 10]
// Returns: 5 (difference between 4 and 9)
```


### Largest gap between any two elements in an array

Write a function that takes as input an array, and returns the largest difference between any two elements.

```
// Example input: [4, 8, 11, 5, 9, 12]
// Returns: 8 (difference between 12 and 4)

// Example input [10, 7, 11, 8, 4, 9, 10]
// Returns: 7 (difference between 11 and 4)
```


### What does this function do?

If you want to practice understanding how programs execute, do NOT copy paste this into repl.it. Instead, run through it in your head!

```
var MysteryFunction = function(input) {
  if (input.length > 2 && input[0] < 2) {
    input[1] = 3
  }
  for(var i = input.length - 1; i >= 0; i--) {
    if (MysteryHelperFunction(input[i]) > input[i]) {
      return 0;
    }
  }
  return -1;
}

var MysteryHelperFunction = function(input) {
  if (input % 3 == 0) {
    return input * 3
  } else if (input % 3 == 1) {
    return input / 3
  }
  return input - 3;
}

// Call 1
console.log(MysteryFunction([1, 2, 3, 4]))
// Call 2
console.log(MysteryFunction([4, 3, 2, 1]))
// Call 3
console.log(MysteryFunction([5, 10, 20, 40]))
// Call 4
console.log(MysteryFunction([]))
```


### Fibonacci Array

Write a function that takes in an integer and returns an array of that size filled with the Fibonacci sequence. Hint: use push() to build up an array item by item. Fibonacci numbers can be created from adding the two preceding numbers.

```
// Example call:
CreateFibArray(4)
// Returns: [1, 1, 2, 3]
CreateFibArray(10)
// Returns: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
```