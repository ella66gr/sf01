<script lang="ts">
  let openIndex: number | null = null;

  function toggle(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<h1 class="text-2xl font-bold mb-6">Custom Accordion with Dark Mode Support</h1>

<div class="divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
  {#each [0, 1, 2] as i}
    <div>
      <!-- Accordion Header -->
      <button
        on:click={() => toggle(i)}
        class="w-full flex justify-between items-center px-6 py-4 text-left font-medium
               text-gray-800 dark:text-white bg-white dark:bg-gray-900
               hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none transition"
      >
        <span>Accordion Item {i + 1}</span>
        <svg
          class="w-4 h-4 transform transition-transform duration-200"
          class:rotate-180={openIndex === i}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- Accordion Content -->
      {#if openIndex === i}
        <div class="px-6 py-4 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition">
          <p>
            This is the content for item {i + 1}. It adapts to dark mode properly using Tailwind's dark variant classes.
          </p>
        </div>
      {/if}
    </div>
  {/each}
</div>