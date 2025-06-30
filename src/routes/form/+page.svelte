<script lang="ts">
  import { Input, Textarea, Select, Checkbox, Toggle, Range } from 'flowbite-svelte';

  let name = '';
  let description = '';
  let tone = 'supportive';
  let consent = false;
  let enabled = true;
  let wordCount = 150;
</script>

<section class="p-6 space-y-6">
  <h2 class="text-xl font-semibold">Form Inputs Test</h2>

  <Input label="Name" placeholder="Enter profile name" bind:value={name} />

  <Textarea label="Description" placeholder="Optional description…" bind:value={description} rows={3} />

  <Select label="Tone of Voice" bind:value={tone}>
    <option value="supportive">Supportive</option>
    <option value="neutral">Neutral</option>
    <option value="warm">Warm</option>
  </Select>

  <Checkbox bind:checked={consent}>
    I agree to the editorial guidelines
  </Checkbox>

  <Toggle bind:checked={enabled}>
    Enable this profile
  </Toggle>

  <Range bind:value={wordCount} min={50} max={400} step={10} />
  <p class="text-sm text-gray-600">Target length: {wordCount} words</p>

  <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded" on:click={() => console.log({ name, description, tone, consent, enabled, wordCount })}>
    Log Values
  </button>
</section>