<script>
  import Tree from "svelte-tree";
  const tree = [
    {
      name: "This is a root node",
      children: [
        {
          name: "And it has"
        },
        {
          name: "two children"
        }
      ]
    },
    {
      name: "This is another root node",
      children: [
        {
          name: "This one is alone"
        },
        {
          name: "But this one has nested children",
          children: [
            {
              name: "Like this"
            },
            {
              name: "and this"
            }
          ]
        }
      ]
    }
  ];
</script>

<style>
  .root {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .root .centerbox {
    margin: auto;
    width: 90vw;
    max-width: 800px;
    padding: 40px 20px;
    border: solid #ccc 1px;
    border-radius: 10px;
  }
</style>

<div class="root">
  <div class="centerbox">
    <Tree {tree} let:node>
      <div class="name">{node.name}</div>
    </Tree>
  </div>
</div>
