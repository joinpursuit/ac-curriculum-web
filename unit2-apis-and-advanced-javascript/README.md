# Unit 2: Advanced JavaScript using APIs and frameworks

1. Package / Dependency Management with npm
 - Why we use it
 - How to find packages online and read their documentation
 - How to make your own packages
 - How to build large, multifile JavaScript apps
 - *Learning outcome*: Pull in a never-before-seen npm package and consume it
 - *Learning outcome*: Create a new npm package and publish it to npm. Pull a peer's new module and consume it
2. Advanced Javascript
 - Hoisting
 - What scope is, the true power of the `var` keyword, what closures are and how/when/why to create them
 - OOP, Prototypical OOP VS traditional class-based OOP, non-JS OOP (Interfaces, Abstract Classes)
 - Callbacks, Promises (ES6 only)
 - *Learning outcome*: Be able to answer common "what does this code output" tricky JS questions involving hoisting, `var`, closures, `prototype`, etc. examples can be seen here: https://www.sitepoint.com/5-typical-javascript-interview-exercises/ 
 - *Learning outcome*: Be able to discuss OOP interview questions (how to design games like chess, model animal species, etc.) and understand how to discuss the talking points for non-JS OOP 
3. APIs via AJAX and JSON
 - jQuery's AJAX methods (ajax, get, post) & under-the-hood JavaScript's pure AJAX methods (only for educational reasons)
 - Success and failure handlers in callbacks
 - Firebase (or some other competitor) configuration and consumption
 - *Learning outcome*: Update the tic-tac-toe implementation from Unit 1 to store game state in Firebase, maintain leaderboards, have user accounts that users can log in to (insecurely) from any client
 - *Learning outcome*: Consume an existing API (http://jsonplaceholder.typicode.com/ or http://pokeapi.co/) and allow for the client to control different queries on the API which display different results
4. Client Side UX Frameworks
 - React.js
 - Redux
 - d3.js
 - *Learning outcome*: Given a d3.js component (we could build it for them), design and implement a react.js app that has many d3 graphs whose state is managed by Redux
5. Objects / HashTables
 - Syntax for JS objects
 - Common uses for key-value mappings
 - HashTable C-style implementation (array of linked lists) and the performance implications
 - *Learning outcome*: Write a JavaScript function that takes an input an array and returns a new array with only the unique elements from the input. This should be O(n) time and preserve the order of the input array
 - *Learning outcome*: Create a vehicle lookup implementation that lets users lookup vehicles by name and display the different features of the vehicle on the page.
6. Queues & Stacks
 - Queues: First in, First out. Waiting in line, scheduling systems
 - Stacks: First in, Last out. Stack of plates, books, browser back button, function call stack
 - How to build either using linked list. How to build a fixed-sized Queue using an array (c-style)
 - *Learning outcome*: Understand which real-life situations map to which DS; Given a DS what are the operations it supports? Given some code, what is the state of the DS after some push/pop operations?