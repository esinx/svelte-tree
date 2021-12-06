<script>
  import { slide } from "svelte/transition";
  export let node;
  export let index;

  let showChildren = true;
</script>

<style>
  .node .content {
    display: flex;
    align-items: center;
  }
  .node .content:hover {
    cursor: pointer;
  }
  .node .content .button {
    width: 20px;
    height: 20px;
    transform: rotate(-90deg);
    transition: transform 0.3s;
  }
  .node .content .button.active {
    transform: rotate(0deg);
  }
  .node .content .spacer {
    width: 20px;
    height: 20px;
  }
  .node .content .name {
    margin-left: 10px;
    font-size: 15px;
  }
  .children {
    margin-left: 20px;
  }
</style>

<div class="node">
  <div
    class="content"
    on:click={() => {
      showChildren = !showChildren;
    }}>
    {#if node.children}
      <div class="button" class:active={showChildren}>
        <svg focusable="false" viewBox="0 0 24 24">
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" class={$$props.class} />
        </svg>
      </div>
    {:else}
      <div class="spacer" />
    {/if}
    <slot {node} />
  </div>
  {#if node.children && showChildren}
    <div class="children" transition:slide|local>
      {#each node.children as _node, i}
        <svelte:self node={_node} index={i} let:node  class={$$props.class}>
          <slot {node} />
        </svelte:self>
      {/each}
    </div>
  {/if}
</div>
