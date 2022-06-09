### The EventEmitter

The `EventEmitter` is exported from the events core modoule. The following code shows how we can obtain a reference to
it.

```node
import {EventEmitter} from 'events'

const emitter = new EvenEmitter();
```

#### The essential methods of the `EventEmitter` are as follows:

* `on(event, listener)`: This method allows us to register a new listener(a function) for the given event type (a
  string);
* `once(event, listener)`: This method registers a new listener, which is then removed after the event is emitted for
  the first time.
* `emit(event, [arg1],[...])`: This method produces a new event and provides additional arguments to be passed to the
  listeners.
* `removeListener(event, listener)`: This method removes a listener for the specified event type.
* 
