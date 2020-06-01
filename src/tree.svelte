<script>
  import TreeNode from "./tree-node.svelte";
  export let tree = [];
</script>

{#each tree as _node, i}
  <TreeNode node={_node} index={i} let:node>
    <slot {node}>
      <div class="name">{node.name}</div>
    </slot>
  </TreeNode>
{/each}
