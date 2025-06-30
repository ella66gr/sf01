<script lang="ts">
  import { Badge } from 'flowbite-svelte';
</script>

<section class="p-6 space-y-4">
  <h2 class="text-xl font-semibold">Badge Test</h2>

  <div class="space-x-2">
    <Badge color="green">Active</Badge>
    <Badge color="red">Paused</Badge>
    <Badge color="yellow">Draft</Badge>
    <Badge color="gray">Disabled</Badge>
    <Badge color="blue">Info</Badge>
  </div>

  <p class="text-sm text-gray-500 mt-2">Used in source table and tag states.</p>
</section>