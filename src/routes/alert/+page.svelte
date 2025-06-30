<script lang="ts">
  import { Alert, Button } from 'flowbite-svelte';
  let show = false;
</script>

<section class="p-6 space-y-4">
  <h2 class="text-xl font-semibold">Alert Test</h2>

  <div class="space-x-2">
    <!-- Native trigger -->
    <button class="bg-blue-600 text-white px-4 py-2 rounded" on:click={() => show = true}>
      Show Alert
    </button>

    <button class="bg-gray-300 text-gray-800 px-4 py-2 rounded" on:click={() => show = false}>
      Hide Alert
    </button>
  </div>

  {#if show}
    <!-- @ts-ignore: dismiss event not typed -->
    <Alert color="info" on:dismiss={() => show = false}>
      This is an info alert. You can dismiss it.
    </Alert>
  {/if}

  <p class="text-sm text-gray-600 mt-2">Status: {show ? 'Visible' : 'Hidden'}</p>
</section>