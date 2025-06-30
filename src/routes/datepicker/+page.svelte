<script lang="ts">
  import { Datepicker } from 'flowbite-svelte';
  let date: string | null = null;
</script>

<h1 class="text-2xl font-bold mb-6">Flowbite Datepicker — Dark Mode Compatible</h1>

<div class="max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Select a date:
  </label>

  <Datepicker
  bind:value={date}
  btnToday={true}
  btnClear={true}  
  clearBtn={true}  
  btnClass="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100
            dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
/>

  <p class="mt-4 text-sm text-gray-800 dark:text-gray-200">
    Selected date: <span class="font-semibold">{date ?? 'None'}</span>
  </p>
  <button
  class="mt-3 inline-block px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
  on:click={() => date = null}
>
  Reset Date
</button>
</div>