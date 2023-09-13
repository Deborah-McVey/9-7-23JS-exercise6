/* Exercise #6
Objective: Examine how Hoisting impacts variable declarations and the different types of variables used.

Instructions:

Declare a variable after a console.log statement that tries to print that variable. Observe the behavior, and deduce how JavaScript hoists variable declarations. */

let randomThing = function() {
	console.log(10);  // 10
}

randomThing();

// it declares it on line 9, but only after calling it on line 12. 