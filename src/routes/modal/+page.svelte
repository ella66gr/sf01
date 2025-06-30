<script lang="ts">
  import { Modal } from 'flowbite-svelte';
  let open = false;
</script>

<section class="p-6 space-y-4">
  <h2 class="text-xl font-semibold">Modal Test</h2>

  <!-- Native button to open modal -->
  <button class="bg-blue-600 text-white px-4 py-2 rounded" on:click={() => open = true}>
    Open Modal
  </button>

  <p class="text-sm text-gray-600">Current open state: {open ? 'true' : 'false'}</p>

  <!-- @ts-ignore: 'close' not typed -->
  <Modal open={open} on:close={() => open = false}>
    <div class="p-4">
      <h3 class="text-lg font-semibold">Test Modal</h3>
      <p class="text-sm text-gray-700">This modal opens via native button.</p>
      <button class="mt-4 bg-gray-300 px-3 py-1 rounded" on:click={() => open = false}>Close</button>
    </div>
  </Modal>
</section>