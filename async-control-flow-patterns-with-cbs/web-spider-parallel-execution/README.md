# Web Spider with cb best practices

Web spider example to demonstrate sequential callbacks

## Run

Install the necessary dependencies with `npm install` and then run:

```bash
node spider-cli.js https://example.com
```

You can optionally specify the maximum depth of crawling by passing a second parameter:

```bash
node spider-cli.js https://loige.co 5
```

The Pattern:

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