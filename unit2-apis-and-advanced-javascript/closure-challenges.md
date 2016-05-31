# Closure example problems

```js
// write a function that allows a function to only be called N times
function callNTimes( funcToCall, N ) {}
function get10() { return 10; }
var call3Times = callNTimes( call3Times, 3 );

call3Times(); // 10
call3Times(); // 10
call3Times(); // 10
call3Times(); // "Error! Already called 3 times";
```

```js
// write a function that applies default values 
function applyDefaults( funcToCall, argsArr ) {}
function getN( N ) { return N; }
var get10 = applyDefaults( getN, [10] );

get10(); // 10
get10( 11 ); // 11
```

```js
// what happens when the user clicks on a button?
var i = 0;
var body = document.querySelector('body');
for( i = 0; i <= 10; ++i ) {
 var button = document.createElement('button');
 button.innerHTML = "Click me!";
 button.addEventListener('click', function() {
  alert(i);
 });
 body.appendChild(button);
}

// ...having identified the issue in the code block above, can you explain *why* the code behaves this way?
// how would you fix this problem?
```