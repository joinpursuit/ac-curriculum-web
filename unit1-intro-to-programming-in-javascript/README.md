# Unit 1: Intro to programming in Javascript


### Week 1

- Git & GitHub: 2 days
  - Basic Command Line navigation: `cd`, `ls`, `.`, `..`, `~`, `pwd`, `mkdir`, `touch`, `open`
  - Command Line Git: `clone`, `commit`, `pull`, `push`
  - Branching and merging
  - GitHub pull request UX, how to converse on a PR
  - **Learning outcome**: Put simple personal site on GitHub, push to GitHub pages using GitBot.co
  - **Learning outcome**: Can talk shop about PRs, commits, branches, and sound informed in an interview setting
- Pair programming: 1 day
  - Understand and explain the purpose of pairing
  - Apply simple pairing patterns like Driver/Navigator and ping-pong
  - Verbally establish a productive pairing arrangement
  - Give specific, actionable, and kind feedback to pairing partner
  - Shamelessly copied from [Turing.io](https://github.com/turingschool/lesson_plans/blob/master/ruby_01-object_oriented_programming_with_ruby/pairing_patterns.markdown)
  - **Learning outcome**: Ready and able to participate in daily pairing sessions baked into all future lesson plans
- HTTP & HTML & CSS: 3 days (carries over to next week)
  - What HTTP is, headers, content, envelope metaphor
  - Tags: head, body, style, script, link, a, div, p, h1+, img, span, etc.
  - Attributes: class, name
  - Common CSS Properties: margin, padding, position, color, font-size, bg-color, etc.
  - CSS selectors
  - CSS Layouts crash course: display flex, flex-direction, align-items, justify-content, etc
  - External libraries and stylesheets (bootstrap)
  - Chrome Developer Tools: Inspector, HTML and CSS live editing
  - **Learning outcome**: Build a simple personal site with multiple pages and non-trivial layout
  - **Learning outcome**: Able to use the Chrome developer tool to inspect and edit webpage style


### Week 2

- Basic programming concepts (Review from wkshp): 1 day
  - What is a program, what is an algorithm?
  - Variables, control structures, loops, conditionals
  - Strings: concat, substrings, iterating, searching, indexing
  - Integers: basic math, modulo, parsing strings to ints
  - Arrays: common methods, properties
  - Deeper dive into functions: anonymous inline definitions
  - **Learning outcome**: Be able to confidently answer all wkshp assessment questions (ex: find second largest element in an input array)
- Big O notation, software performance analysis and optimization: 2 days
  - Understand O(1), O(n), O(n<sup>2</sup>), and how to combine by taking only the largest
  - Learn how to analyze functions for their runtime complexity, including calling other functions
  - Write programs to match runtime complexity and improve a given program's runtime complexity
  - Under the hood: List VS Arrays in non-JS context, performance characteristics of each
  - Linked List C-style implementation (structs with pointers) and the performance implications
  - Array C-style implementation (fixed size contiguous memory) and the performance implications
  - **Learning outcome**: Analyze a moderately complicated program to identify its runtime complexity (only with O(1), O(n), O(n<sup>2</sup>))
  - **Learning outcome**: Be able to identify the superior data structure in various situations, and be able to identify the performance of all operations on both datastructures (ex: which datastructure has contant time update of an index? Which has constant time insert at the front? Which to use when building up an unknown number of items from empty? etc.)
- Debugging using Chrome developer tools: 1 day
  - Breakpoints and stepping through code
  - Parsing call stack and watched variables
  - **Learning outcome**: Given a broken JavaScript program in a js file, use the Chrome Developer tools to identify where the bug is, and how to fix it


### Week 3

- JavaScript and the DOM using jQuery: 4 days
  - Using CSS Selectors to select jQuery DOM elements
  - Manipulating jQuery DOM elements with `.text()`, `.hide()`, `.show()`, `.attr()`, `.css()`
  - Creating new DOM elements with `.append()` and `.prepend()`
  - Reading and validating form content with `.val()`
  - Interacting with sets of jQuery DOM elements with `.each()`
  - Browser Events
    - Event handlers and the concept of callbacks (+ brief intro to asynchronous nature of javascript)
    - Event propagation: bubbling vs capture.
    - jQuery event handling methods: `.click()` vs `.on()`
    - Using event propagation to efficiently bind to dynamic elements ie: `.on('click', '.child-selector', cb)`
  - **Learning outcome**: Create a web page with multiple buttons with independent click event listeners
  - **Learning outcome**: Create a web page with a form that validates the input and has different behavior for valid and invalid input.
  - **Learning outcome**: Single webpage project ideas: Madlibs, Hangman, Math Quiz, Choose your own adventure game
- Nested Loops and 2D Arrays: 2 days (carries over into next week)
  - Interacting with 2D matrices: indexing, searching, building
  - Scanning 2D matrices in different orders
  - Initializing the inner loop using values from the outer loop
  - **Learning outcome**: Return the unique elements of an input array in O(n<sup>2</sup>) time
  - **Learning outcome**: Find the difference between the diagonals of a square matrix in O(n) time
  - **Learning outcome**: (Uses Agile process) Create a tic-tac-toe implementation that allows two players to play the game on a board by clicking on elements with correct win and lose conditions as well as restart buttons and local state keeping track of wins/losses

### Week 4

- Agile process for building software: 1 day
  - Project pre-broken up into many small deliverable iterations
  - Code reviews, pull requests, design reviews
  - Sprint planning, sprint retrospective, daily standups, story point sizing
  - **Learning outcome**: (Uses 2D arrays) Create a tic-tac-toe implementation that allows two players to play the game on a board by clicking on elements with correct win and lose conditions as well as restart buttons and local state keeping track of wins/losses
- Review: 2 days
- Final Assessment: .5 days
- Project presentations: .5 days

