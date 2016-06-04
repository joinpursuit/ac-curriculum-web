# Unit 4: Building Full Stack Web Applications

### Week 1

- Agile processes and methodology: 2 days
  - Daily standups
  - Weekly sprints, sprint planning and sprint retrospectives
  - Stories, story points, and tickets
  - Bug duty and backlog grooming
  - Quarterly planning and KPIs
  - **Learning outcome**: Can speak the corporate speak about "moving the needle for the business", sound informed in an interview setting
  - **Learning outcome**: First mock interview including DS&A technical questions as well as behavioral questions
- Automated testing: 3 days
 - Jasmine (or better?) framework for executing unit tests
 - Dependency injection and mocks, concept and frameworks
 - Selenium (or better?) framework for executing full stack browser tests
 - [TestPyramid](http://martinfowler.com/bliki/TestPyramid.html): Knowing it and understanding why
 - Continuous integration (and delivery) theory and common systems (Jenkins, TeamCity, TravisCI, CircleCI, etc.)
 - **Learning outcome**: Given some code, extract its external dependencies via DI and implement some unit tests with mocks
 - **Learning outcome**: Can talk shop about CI, understand and explain the value of adding CI to a release workflow, can argue convincingly for the inclusion of tests and CI into the development process


### Week 2

- Pair programming with automated testing: 1 day
  - Alternate between one partner writing tests and the other partner getting them to pass
  - Give specific, actionable, and kind feedback to pairing partner
  - Shamelessly copied from [Turing.io](https://github.com/turingschool/lesson_plans/blob/master/ruby_01-object_oriented_programming_with_ruby/pairing_patterns.markdown)
  - **Learning outcome**: Have a successful ping-pong session writing both tests and code that passes the tests
- Full stack web application large solo project: 4 days
  - E-commerce platform [Turing.io's Black Thursday](https://github.com/turingschool/curriculum/blob/master/source/projects/black_thursday.markdown)
  - Break down a project into components
  - Use tests to verify correctness, and text fixtures and test data to iterate quickly
  - Leverage the agile process
  - Use some of the DS&A we have learned so far (autocomplete with a Trie, removing duplicates using HTs, anagram search for full-text-product search, etc.)
  - **Learning outcome**: Professional feeling, significantly complicated, dynamic website with server side data that simulates e-commerce


### Week 3

- Readable Code, Debugging, and Refactoring: 2 days
  - Distinguish between "readable" and "unreadable" code
  - Exercises in refactoring messy, disorganized, poorly written code
  - Exercises in debugging and then refactoring broken code across the full stack
  - Language surrounding "maintainable" code
  - **Learning outcome**: Able to comment up a pull request professionally, identifying places for improvement, pointing out inconsistencies, and suggesting improvements
- Writing good APIs and consuming external APIs: 3 days
  - Create server side application APIs that serve JSON
  - The challenges associated with versioning
  - Consume multiple external APIs (Twilio, Maps, MTA, etc.)
  - Handling remote failures, high latency, inconsistent behavior, the "Circuit Breaker" design pattern
  - **Learning outcome**: Given a set of actions for a client (web or mobile), write a clean and clear API. Given adjustments to those actions, write a backwards compatible update
  - **Learning outcome**: Given a flakey remote API, write a client that handles failures and timeouts gracefully

### Week 4

- Data structures and algorithms practice: 2 days
  - What is the best datastructure to use for situation S?
  - What datastructure has performance P for operation O?
  - What is the performance of operation O on datastructure D?
  - Build an autocomplete system on the server and fetch results as the user types on the client (trees)
  - Implement BFS and DFS (using a queue and recursion respectively)
  - Whiteboard coding
  - Whiteboard software design
  - **Learning outcome**: Be able to pass mock interviews with volunteer industry professionals focused on whiteboard coding and DS&A problems
  - **Learning outcome**: Able to complete majority of Cracking the Coding Interview practice problems
- Review: 2 days
- Final Assessment: .5 days
- Project presentations: .5 days

