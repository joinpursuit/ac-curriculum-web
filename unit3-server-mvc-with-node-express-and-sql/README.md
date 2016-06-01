# Unit 3: Server Side MVC Application Development using Node.js, Express, and PostgreSQL

### Week 1

- Serverside MVC with Express: 3 days
  - Why MVC for server side development: Separation of concerns
  - Routing & (simple) regular expressions
  - Controllers
  - Views using a templating engine and ViewModels (Mustache? Jade?)
  - Middleware for session, error handling
  - **Learning outcome**: Given a small existing website, add new URLs, add content to existing URLs, create a new URL with a new controller that reuses an existing view
  - **Learning outcome**: Create a website with over 4 unique URL routes with both HTML and JSON responses, user state stored in sessions, and an interactive set of client pages using AJAX to hit at least one JSON endpoint
- Trees & Graphs: 2 days (Carries over into the next week)
  - Binary trees: BSTs, Min/Max Heaps, logarithmic runtime; how to implement using structures with pointers, or for Heaps with arrays
  - N-ary trees: Tries, B-Trees
  - In order, pre-order, post-order traversals
  - Graphs: Modeling social network, modeling subway trains; how to implement a graph
  - **Learning outcome**: Build a binary or n-ary tree node
  - **Learning outcome**: Identify the performance charateristics of a given implementation of a tree (insert, delete, lookup)

### Week 2

- Databases, SQL, and PostgreSQL: 3 days
  - What a database is, what "relational" means in the context of databases
  - How to set up PostgreSQL locally
  - How to insert, update, delete, and query using SQL syntax
  - **Learning outcome**: Be able to write a filtered select query given a schema, be able to write a simple join
- Recursion: 2 days
 - Recursive mult, fibonnaci, sum
 - Translating iterative functions into recursive ones, and vice versa
 - **Learning outcome**: Read and write recursive implementations of math and other common functions
 - **Learning outcome**: Understand runtime complexity and be able to explain the app's time complexity


### Week 3

- Databases, SQL, and PostgreSQL: 2 days
  - How to configure Express to interact with SQL
  - Examples of ORMs, incl nano, micro, and full size ORMs
  - **Learning outcome**: Build a user login system in Express using PostgreSQL
  - **Learning outcome**: Be able to translate SQL queries to ORM and vice versa, and be able to write ORM classes in code given a schema
- Recursion and BFS/DFS: 3 days
  - Common problems that map to BFS: Find the shortest path to a node, find if two nodes are connected at all
  - Common problems that map to DFS: Find the value of the largest ancestor,
  - Understanding the call stack and being able to step through recursive implementations to understand current state
  - **Learning outcome**: Read and write recursive and iterative implementations of DFS
  - **Learning outcome**: Read and write an iterative implentation of BFS

### Week 4

- Sorting: 2 days
  - Quicksort & Merge sort, Insertion Sort, Bubble Sort, Radix/Bucket sort
  - Runtime analysis
  - **Learning outcome**: Given an implementation, understand which sort it is
  - **Learning outcome**: Know the runtime of every common sort algorithm
  - **Learning outcome**: Implement Quicksort recursively
- Review: 2 days
- Final Assessment: .5 days
- Project presentations: .5 days
