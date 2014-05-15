# JS Workshop

## Getting started

* WebStorm
* Chrome
* NodeJS
* http://devdocs.io/

## JS

### ECMAScript

#### ES3

* published December 1999
* first "usable" version of JS

#### ES5

* published December 2009 (ES 5) / June 2011 (ES 5.1)
* strict mode, JSON, Object extensions (properties, Object.create ...), Array extensions, Function.bind
* supported in all modern browsers and IE >= 9
* shim for older browsers https://github.com/es-shims/es5-shim (adds ES5 features, where possible)


#### Preview ES6 

* scope: adds missing features
* module loader system, block scope, real classes, generators (yield) ...
* http://www.es6fiddle.net/


### Language basics

* developer tools (Chrome)
* console.log
* Comments
* var
* Types (string, number, boolean, array, object, undefined, null, NaN)
* typeof keyword
* Comparisons and type coercion (== vs. ===)
* truthiness (http://speakingjs.com/es5/ch10.html)
* Explicit type casting (Number, String, Boolean, parseInt, parseFloat)
* short circuit logic (||, &&)
* functions (function arguments, return)
* what's this?
* DOM basics
* Strict mode http://speakingjs.com/es5/ch07.html#strict_mode
* using the debugger


### Scope

* root scope: window
* var!
* function scope
* closures


### Functional patterns

* functions as first class citizens (functions are objects)
* function name() vs. var name = function()
* calling functions (call, apply ...)
* arguments
* making variables "private"
* higher order functions
* don't pollute the global namespace!


### Arrays

* Array.prototype basics: push, pop, shift, unshift, join
* Array.prototype.sort
* for, while vs. forEach
* Array.prototype iteration: forEach, map, filter, reduce (ES5)
* Array.prototype.some|every


### Objects & inheritance

* attributes & methods
* this and that
* Function.prototype.bind
* constructor functions and new
* instance methods
* "class" methods
* Object.defineProperty|defineProperties
* prototype
* inheritance
* "super"
* "private" properties
* Object.prototype.preventExtensions


### Exception handling

* try, catch, finally
* throw
* catching a specific error
* defining own Error subtypes


### Events

* Element.prototype.addEventListener
* Element.prototype.removeEventListener
* this in Events (binding)
* Element.prototype.preventDefault
* Element.prototype.stopPropagation


### JSON

* Syntax of a JSON document
* JSON.parse
* JSON.stringify


### AJAX

* XMLHttpRequest
* same origin policy (CORS & JSONP)


### Asynchronous JavaScript

* Callbacks
* Promises (q)


### module loader: RequireJS

* a demo app


## HTML5 & CSS

* html5boilerplate as a starting point
* Feature detection (modernizr)
* media queries
* twitter bootstrap as an example of responsive design (new WebStorm Project)


## Preview ES6

* Traceur: https://github.com/google/traceur-compiler
* Traceur & WebStorm https://www.youtube.com/watch?v=jbfkcmxLLKY
* http://www.es6fiddle.net/


## Further reading & Infos

* http://speakingjs.com/
* JavaScript: The Good Parts (Douglas Crockford)
  * The bad parts: http://oreilly.com/javascript/excerpts/javascript-good-parts/bad-parts.html
  * The awful parts: http://oreilly.com/javascript/excerpts/javascript-good-parts/awful-parts.html
* https://developer.mozilla.org/en/docs/JavaScript
* http://javascriptweekly.com/
