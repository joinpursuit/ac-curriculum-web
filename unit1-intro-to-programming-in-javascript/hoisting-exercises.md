# Hoisting Exercises

What is logged in each of these code blocks? Answer it **without** actually running the code on a computer.

#### 1

```js
var test = "initial value"
var f = function () {
    test = "new value"

    if (test) {
        var test;
        test += " and more!"
    } else {
        var test = "It begins here"
    }
}
f()
console.log("Test: " + test)
```


#### 2

```js
var test = "initial value"
var f = function () {
    test = "new value"

    if (test) {
        test += " and more!"
    } else {
        test = "It begins here"
    }
}
f()
console.log("Test: " + test)
```


#### 3

var test = "initial value"
for (var i = 0; i < 5; i++) {
    test = "new value"

    if (test) {
        
        test += " and more!"
    } else {
        var test = "It begins here"
    }
}

console.log("Test: " + test)


#### 4

