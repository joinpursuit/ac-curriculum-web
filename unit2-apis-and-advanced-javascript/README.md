# Unit 2: Advanced JavaScript using APIs and frameworks

### Week 1

- Package / Dependency Management with NPM: 1 day
  - Why we use it
  - How to find packages online and read their documentation
  - How to make your own packages
  - **Learning outcome**: Pull in a never-before-seen npm package and consume it
  - **Learning outcome**: Create a new npm package and publish it to npm. Pull a peer's new module and consume it
- Building frontend javascript with Gulp: 2 days
  - What is Gulp?
  - How does Gulp transform the way we write frontend javascript? What does the file structure look like?
  - Set up your first gulpfile
  - How are tasks added to gulp? How are tasks composed with gulp?
  - **Learning outcome**: Create a new project folder set up with Gulp and a gulpfile.
  - **Learning outcome**: Add tasks to gulpfile such as: browserify, uglify, live-reload, babel (optional)
- Multiline, Multifile JavaScript apps: 2 days
  - How to leverage multiple packages (either from NPM or self created) to write maintainable code
  - **Learning outcome**: Take the tic-tac-toe implementation from the previous unit and refactor into smaller modules in multiple files. The new modules should be self contained, reusable and extensible.
  - **Learning outcome**: Ability to, as a group, break apart a sizable webpage into smaller modules and distribute work among the team through individual modules. Collaboration is done through GitHub and Gulp is used for building js files.


### Week 2

- Scope & Closures: 2 day
  - Hoisting
  - Investigating the scope chain, the true power of the `var` keyword
  - What are closures and how/when/why to create them
  - **Learning outcome**: Be able to answer common "what does this code output" tricky JS questions involving hoisting, scope. Examples can be seen here: https://www.sitepoint.com/5-typical-javascript-interview-exercises/ 
  - **Learning outcome**: Solve tricky problems involving closures, [Examples here](https://github.com/C4Q/ac-curriculum-web/tree/master/unit2-apis-and-advanced-javascript/closure-challenges.md)
- Prototypes, the prototype chain, and inheritance: 2 days
  - constructor vs `Object.create()`
  - creating base classes and extending them via inheritance
  - OOP, Prototypical OOP VS traditional class-based OOP, non-JS OOP (Interfaces, Abstract Classes)
  - **Learning outcome**: Be able to discuss OOP interview questions (how to design games like chess, model animal species, etc.) and understand how to discuss the talking points for non-JS OOP
  - **Learning outcome**: Design and implement classes in JS, create instances manually and dynamically, and utilize protypical inheritance to augment existing classes on the fly. [Examples here](https://github.com/C4Q/ac-curriculum-web/tree/master/unit2-apis-and-advanced-javascript/oo-challenges.md)
- APIs via AJAX and JSON: 2 days
  - What is AJAX?
  - jQuery's AJAX methods (ajax, get, post) & under-the-hood JavaScript's pure AJAX methods (only for educational reasons)
  - Handling success and failures with callbacks
  - Firebase (or some other competitor) configuration and consumption
  - Promises: definition, usage, etc
  - How to perform multiple, ordered asynch calls using promises (Firebase DB reads and/or writes can be used here as example)
  - **Learning outcome**: Update the tic-tac-toe implementation from Unit 1 to store game state in Firebase, maintain leaderboards, have user accounts that users can log in to (insecurely) from any client
  - **Learning outcome**: Consume an existing API (http://jsonplaceholder.typicode.com/ or http://pokeapi.co/) and allow for the client to control different queries on the API which display different results 


### Week 3

- Introduction to ReactJS: 2 days
  - React lifecycle methods: `render()`, `componentDidMount()`, `componentWillRecieveProps()`, `componentDidUpdate()`, etc
  - JSX and the benefits of writing HTML markup in javascript
  - Adding a reactjs task to your `gulpfile`
  - Light introduction to ES6 (most of ReactJS + ReactJS documentation is written in es6)
    - classes, extend keyword, arrow functions, spread operator
  - **Learning outcome**: Create simple To Do list using ReactJS
  - **Learning outcome**: Understand the difference between state and prop
- Redux: 2 days
  - Principles of redux: minimize state mutations, single source of truth, functional programming
  - Actions, Reducers, Stores, etc
  - **Learning outcome**: Build a Trello API based blog using ReactJS and Redux
 - D3.js: 1 day
  - selections
  - entering / exiting (ie: how to create/remove nodes as needed from incoming data)
  - transitions
  - **Learning outcome**: Given a d3.js component (we could build it for them), design and implement a react.js app that has many d3 graphs whose state is managed by Redux

### Week 4

### TODO: below is stuff to mix in

5. Objects / HashTables
 - Syntax for JS objects
 - Common uses for key-value mappings
 - HashTable C-style implementation (array of linked lists) and the performance implications
 - **Learning outcome**: Write a JavaScript function that takes an input an array and returns a new array with only the unique elements from the input. This should be O(n) time and preserve the order of the input array
 - **Learning outcome**: Create a vehicle lookup implementation that lets users lookup vehicles by name and display the different features of the vehicle on the page.
6. Queues & Stacks
 - Queues: First in, First out. Waiting in line, scheduling systems
 - Stacks: First in, Last out. Stack of plates, books, browser back button, function call stack
 - How to build either using linked list. How to build a fixed-sized Queue using an array (c-style)
 - **Learning outcome**: Understand which real-life situations map to which DS; Given a DS what are the operations it supports? Given some code, what is the state of the DS after some push/pop operations?
