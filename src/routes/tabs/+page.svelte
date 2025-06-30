<script lang="ts">
  import { Tabs, TabItem } from 'flowbite-svelte';
</script>

<section class="p-6 space-y-4">
  <h2 class="text-xl font-semibold">Tabs Test</h2>

  <Tabs>
    <TabItem title="Tab 1">
      <p class="text-sm mt-2">This is the content of Tab 1.</p>
    </TabItem>
    <TabItem title="Tab 2">
      <p class="text-sm mt-2">This is the content of Tab 2.</p>
    </TabItem>
    <TabItem title="Tab 3">
      <p class="text-sm mt-2">This is the content of Tab 3.</p>
    </TabItem>
  </Tabs>
</section>