### Callback best practices and control flow patterns

___

#### Callback discipline

* Exit as soon as possible. Use `return`, `continue`, `break`, depending on the context, to immediately exit the
  current statement instead of writing (and nesting) complete if...else statements.
* Create named functions for callbacks, keeping them out of closures and passing intermediate results as arguments.
* Modularize the code. Split the code into smalled, reusable functions whenever possible.

#### Pattern sequential execution

```node
    function iterate(index) {
    if (index === tasks.length) {
        return finish();
    }
    const task = tasks[index];
    task(() => iterate(index + 1);
}

function finish() {
    // iteration complete
}

iterate(0);
```

#### Pattern parallel execution:

```node
const tasks = [/* ... */];

let completed = 0;
tasks.forEach(task => {
    task(() => {
        if (++completed === tasks.length) {
            finish()
        }
    })
})
```

#### Pattern Limiting concurrency:

___
This algorithm can be considered a mixture of sequential execution and parallel execution.

```node
const tasks = [
    //...
]
const concurrency = 2;
let running = 0;
let completed = 0;
let index = 0;

function next() {
    while (running < concurrency && index < tasks.length) {
        task(() => {
            if (++completed === tasks.length) {
                return finish();
            }
            running--;
            next();
        })
        running++;
    }
}

next();

function finish() {
    // all tasks finished
}
```