- [Git & GitHub](https://github.com/C4Q/ac-curriculum-web/blob/master/unit1-intro-to-programming-in-javascript/git.md): 2 days
  - Basic Command Line navigation: `cd`, `ls`, `.`, `..`, `~`, `pwd`, `mkdir`, `touch`, `open`
  - Command Line Git: `clone`, `commit`, `pull`, `push`
  - Branching and merging
  - GitHub pull request UX, how to converse on a PR
  - **Learning outcome**: Put simple personal site on GitHub, push to GitHub pages using GitBot.co
  - **Learning outcome**: Can talk shop about PRs, commits, branches, and sound informed in an interview setting

 - Scope & Closures: 2 day
  - Hoisting
  - Investigating the scope chain, the true power of the `var` keyword
  - What are closures and how/when/why to create them
  - **Learning outcome**: Be able to answer common "what does this code output" tricky JS questions involving hoisting, scope. Examples can be seen here: https://www.sitepoint.com/5-typical-javascript-interview-exercises/ 
  - **Learning outcome**: Solve tricky problems involving closures, [Examples here](https://github.com/C4Q/ac-curriculum-web/tree/master/unit2-apis-and-advanced-javascript/closure-challenges.md)

- HTTP
  - What HTTP is, headers, content, envelope metaphor

- CSS
  - CSS Layouts crash course: display flex, flex-direction, align-items, justify-content, etc
  - External libraries and stylesheets (bootstrap)

- CS Fundamentals
	- What is a program, what is an algorithm?

- Debugging using Chrome developer tools: 1 day
  - Breakpoints and stepping through code
  - Parsing call stack and watched variables
  - **Learning outcome**: Given a broken JavaScript program in a js file, use the Chrome Developer tools to identify where the bug is, and how to fix it


# Variable Scope Exercises


What is logged in each of these code blocks?  Answer it **without** actually running the code on a computer.

#### 1

```js
(function() {
   baz = 5;
   var bar = 10;
})();

console.log(baz);
console.log(bar);
```

#### 2

```js
var x = 11
y = 66
(function() {
  x = 77
  var y = 22
  console.log("x: " + x)
  console.log("y: " + y)
})
console.log("x: " + x)
console.log("y: " + y)
```

#### 3

```js
var favoritePizzaPlaces = ["Lombardi's", "Ray's", "Joe's", "John's", "Paulie Gee's"]

var addThePlace = function(newPizzaPlace) {
  favoritePizzaPlaces.push(newPizzaPlace)
}

var addMyFavoritePizza = function(newPizzaPlace) {
  var favoritePizzaPlaces = ["Dave & Jukay's", "Sunnyside"]
  addThePlace(newPizzaPlace)
  console.log("I have " + favoritePizzaPlaces.length + " favorite pizza places")
}

addMyFavoritePizza("Benno's")
```

#### 4

```js
var favoritePizzaPlaces = ["Lombardi's", "Ray's", "Joe's", "John's", "Paulie Gee's"]

var addMyFavoritePizza = function(newPizzaPlace) {
  var favoritePizzaPlaces = ["Dave & Jukay's", "Sunnyside"]

  var addThePlace = function(newPizzaPlace) {
    favoritePizzaPlaces.push(newPizzaPlace)
  }

  addThePlace(newPizzaPlace)
  console.log("I have " + favoritePizzaPlaces.length + " favorite pizza places")
}

addMyFavoritePizza("Benno's")
```

#### 5

```js
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);
```


