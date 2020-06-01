# svelte-tree

A tree-like outline view for svelte

## Installation

```
npm i -D svelte-tree
```

## How to

The most basic usage follows

```html
<script>
    import Tree from "svelte-tree";
    const tree = [
        {
            name: "This is a root node",
            children: [
                {
                    name: "And it has",
                },
                {
                    name: "two children",
                },
            ],
        },
        {
            name: "This is another root node",
            children: [
                {
                    name: "This one is alone",
                },
                {
                    name: "But this one has nested children",
                    children: [
                        {
                            name: "Like this",
                        },
                        {
                            name: "and this",
                        },
                    ],
                },
            ],
        },
    ];
</script>

<Tree {tree} let:node>
    <div class="name">{node.name}</div>
</Tree>
```

## Custom node

Use the slot space to display custom nodes. `let:node` will give your children DOM/components the access to the nodes being rendered.

## License

MIT
