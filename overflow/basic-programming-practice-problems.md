# Basic Programming Practice Problems


### Find min & max within an array

Given an array, write a program that returns the largest element. Then try the smallest element. Hint: this will require variables, loops, and conditionals!

```js
var arr = [25, 101, 66, 10, 99]
// for the array above, expect:
// largest element => 101
// smallest element => 10
```


### Detect if an element is within an array

Given an array and a target value, write a program that returns whether or not the target value exists within the array. Hint: what type will the result value be? What should its default value be?

```js
var result; // what should this be set to by default?
var arr = [25, 101, 66, 10, 99]
var target = 66 // result should "true"
var target = 77 // result should be "false"
```

### Build a simple array

Given an integer size, write a program that builds an array of that size where each element is its own index.

```js
var integerSize = 10;
// expect array to be: [0,1,2,3,4,5,6,7,8,9]
```
- Try with each element value being double its own index? Or triple?
- What about if all the odd indices are double while all the even indices are quadruple?

### Range of numbers

Given two integers less than 1000, make an array with all the numbers between the two integers (inclusive).

```js
// Example input:
var lowerBound = 20
var upperBound = 25

// Expected Output: [20,21,22,23,24,25]
```

**CS/Math Question**: How large will the array be with a lowerBound of X and an upperBound of Y?

### Average value

Given an array of numbers, find the average (mean) value. You can do this by adding up all the numbers and then dividing by how many you added together.

```js
// Example input:
var inputArray = [5, 15, 10, 30, 25]
// Expected Output: 17
```


### Largest gap between consecutive elements in an array

Write a function that takes as input an array, and returns the largest difference between any two adjacent elements.

```js
// Example input: [4, 8, 11, 5, 9, 12]
// Returns: 6 (difference between 5 and 11)

// Example input [10, 7, 11, 8, 4, 9, 10]
// Returns: 5 (difference between 4 and 9)
```


### Largest gap between any two elements in an array

Write a function that takes as input an array, and returns the largest difference between any two elements.

```js
// Example input: [4, 8, 11, 5, 9, 12]
// Returns: 8 (difference between 12 and 4)

// Example input [10, 7, 11, 8, 4, 9, 10]
// Returns: 7 (difference between 11 and 4)
```


### What does this function do?

If you want to practice understanding how programs execute, do NOT copy paste this into repl.it. Instead, run through it in your head!

```js
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

```js
// Example call:
CreateFibArray(4)
// Returns: [1, 1, 2, 3]
CreateFibArray(10)
// Returns: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
```