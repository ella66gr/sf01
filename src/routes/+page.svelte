<script>
  const components = [
    { name: 'Button', path: '/button' },
    { name: 'Modal', path: '/modal' },
    { name: 'Alert', path: '/alert' },
    { name: 'Dropdown', path: '/dropdown' },
    { name: 'Tabs', path: '/tabs' },
    { name: 'Datepicker', path: '/datepicker' },
    { name: 'Toggle', path: '/toggle' },
    { name: 'Accordion', path: '/accordion' },
    { name: 'Form Inputs', path: '/form' },
    { name: 'Badges', path: '/badge' },
    { name: 'Checkbox', path: '/checkbox' },
    { name: 'Table', path: '/table' },
    { name: 'Navbar', path: '/navbar' },
    { name: 'Numbers', path: '/numbers' },
    { name: 'Cards', path: '/cards' },
    { name: 'Inputs', path: '/inputs' }
  ];
</script>

<section class="p-6 space-y-4">
  <h1 class="text-2xl font-bold">SF01: Flowbite Svelte Component Testbed</h1>
  <ul class="list-disc list-inside">
    {#each components as c}
      <li><a href={c.path} class="text-blue-600 underline">{c.name} Test Page</a></li>
    {/each}
  </ul>
  <p class="text-sm text-gray-500">Add more test pages as needed.</p>
</section>



