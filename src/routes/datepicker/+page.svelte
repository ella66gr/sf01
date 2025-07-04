<!-- src/routes/datepicker/+page.svelte -->
<script>
  import { Datepicker, Label } from 'flowbite-svelte';
  
  let selectedDate = '';
</script>

<svelte:head>
  <title>Datepicker Test - SF01</title>
</svelte:head>

<section class="p-6 space-y-6">
  <h1 class="text-2xl font-bold">Datepicker Component Test</h1>
  
  <div class="space-y-4">
    <div>
      <Label for="datepicker1" class="mb-2">Select Date</Label>
      <Datepicker 
        id="datepicker1"
        bind:value={selectedDate}
        placeholder="Choose a date"
      />
    </div>
    
    <div>
      <Label for="datepicker2" class="mb-2">Date with Range</Label>
      <Datepicker 
        id="datepicker2"
        range
        placeholder="Select date range"
      />
    </div>
    
    <div>
      <Label for="datepicker3" class="mb-2">Inline Datepicker</Label>
      <Datepicker 
        id="datepicker3"
        inline
      />
    </div>
  </div>
  
  {#if selectedDate}
    <div class="mt-4 p-4 bg-green-100 rounded">
      <p><strong>Selected Date:</strong> {selectedDate}</p>
    </div>
  {/if}
  
  <div class="mt-6">
    <a href="/" class="text-blue-600 underline">← Back to Home</a>
  </div>
</section>