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
 - **Learning outcome**: Working with a partner (or partners), come up with a Single webpage project idea (or use one from last unit: (Madlibs, Hangman, Math Quiz, Choose your own adventure game)). Plan out project into npm-style modules, owners, and deliverables (ie: for tic-tac-toe, Person A is responsible to writing the modules and listen for user input, Person B builds out the turn manager in the game, and so on). Work together using GitHub to develop and deploy your project. Obviously, you use gulp to build your js files for use on the frontend.


2. Advanced Javascript
 - Hoisting
 - What scope is, the true power of the `var` keyword, what closures are and how/when/why to create them
 - OOP, Prototypical OOP VS traditional class-based OOP, non-JS OOP (Interfaces, Abstract Classes)
 - Callbacks, Promises (ES6 only)
 - **Learning outcome**: Be able to answer common "what does this code output" tricky JS questions involving hoisting, `var`, closures, `prototype`, etc. examples can be seen here: https://www.sitepoint.com/5-typical-javascript-interview-exercises/ 
 - **Learning outcome**: Be able to discuss OOP interview questions (how to design games like chess, model animal species, etc.) and understand how to discuss the talking points for non-JS OOP 
3. APIs via AJAX and JSON
 - jQuery's AJAX methods (ajax, get, post) & under-the-hood JavaScript's pure AJAX methods (only for educational reasons)
 - Success and failure handlers in callbacks
 - Firebase (or some other competitor) configuration and consumption
 - **Learning outcome**: Update the tic-tac-toe implementation from Unit 1 to store game state in Firebase, maintain leaderboards, have user accounts that users can log in to (insecurely) from any client
 - **Learning outcome**: Consume an existing API (http://jsonplaceholder.typicode.com/ or http://pokeapi.co/) and allow for the client to control different queries on the API which display different results
4. Client Side UX Frameworks
 - React.js
 - Redux
 - d3.js
 - **Learning outcome**: Given a d3.js component (we could build it for them), design and implement a react.js app that has many d3 graphs whose state is managed by Redux
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
