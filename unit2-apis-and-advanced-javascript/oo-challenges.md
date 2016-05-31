# Object Oriented Challenges

### Instances and instance methods:

Given a class called Square and two instances of this class, s and t, how would you define `calcArea()` and `calcPerimeter()` methods such that _they can be called_ on the two instantiated instances, s and t?

### Creating instances dynamically:

How would you reimplement jQuery from scratch using objects? (ie: `$('..')` gets us an object with methods such as `.css()`. How would you define this class such that it doesn't require a `new` keyword *but still* consoles 'jQuery' when `console.log( $('...') instanceof jQuery )`

### Using Prototypes:

How would you extend you jQuery class such that it supports the creation of "plugins" (ie: a new method called `.fooPlugin()` that works seamlessly on all current and future instances of your jQuery obejct) _without touching your_ original jQuery class implementation source code