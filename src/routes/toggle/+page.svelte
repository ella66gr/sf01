<script lang="ts">
  import { Toggle } from 'flowbite-svelte';
  let enabled = false;
</script>

<h1 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
  Dark Mode Compatible Toggle
</h1>

<div class="max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
  <div class="flex items-center justify-between">
    <label for="darkModeToggle" class="text-sm font-medium text-gray-900 dark:text-gray-100 mr-4">
      Enable Feature
    </label>
    <Toggle id="darkModeToggle" bind:checked={enabled} />
  </div>

  <p class="mt-4 text-sm text-gray-800 dark:text-gray-200">
    Current status: <span class="font-semibold">{enabled ? 'Enabled' : 'Disabled'}</span>
  </p>
</div>