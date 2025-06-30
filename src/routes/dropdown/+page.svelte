<script lang="ts">
  import { Dropdown } from 'flowbite-svelte';
</script>

<!-- Page container -->
<div class="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 pt-10">
  <div class="w-full max-w-md mx-auto text-center">

    <h1 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
      Click for option
    </h1>

    <Dropdown
      text="Click for drop down"
      placement="bottom"
      class="inline-block"
      buttonClass="inline-flex items-center px-4 py-2 text-sm font-medium
                   text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm
                   hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2
                   focus:ring-indigo-500 dark:text-white dark:bg-gray-800 dark:border-gray-600
                   dark:hover:bg-gray-700 dark:focus:ring-indigo-400"
    >
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
        Profile
      </a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
        Settings
      </a>
      <a href="#" class="block px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700">
        Logout
      </a>
    </Dropdown>

  </div>
</div>