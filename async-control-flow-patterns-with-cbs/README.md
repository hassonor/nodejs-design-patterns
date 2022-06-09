### Callback best practices and control flow patterns

___

#### Callback discipline

* Exit as soon as possible. Use `return`, `continue`, `break`, depending on the context, to immediately exit the
  current statement instead of writing (and nesting) complete if...else statements.
* Create named functions for callbacks, keeping them out of closures and passing intermediate results as arguments.
* Modularize the code. Split the code into smalled, reusable functions whenever possible.