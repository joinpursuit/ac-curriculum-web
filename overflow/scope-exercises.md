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


