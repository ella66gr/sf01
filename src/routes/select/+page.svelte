<script lang="ts">
    import { Card, Button } from "flowbite-svelte";
    import { ArrowRightOutline } from "flowbite-svelte-icons";
    import { Select, Label } from "flowbite-svelte";
    let countries = [
        { value: "us", name: "United States" },
        { value: "ca", name: "Canada" },
        { value: "fr", name: "France" }
    ];
  let eventSelected = $state("");
  let clearableSelected = $state("");

  let selectRef = $state() as HTMLSelectElement;
  const options = [
    { value: "option1", name: "Option 1" },
    { value: "option2", name: "Option 2" },
    { value: "option3", name: "Option 3" }
  ];
  let selectedValue = $state("option1");
</script>

<Card class="p-4 sm:p-6 md:p-8">
    <h4 class="text-2xl dark:text-white">Select</h4>
  <Label class="mb-6 block">
  Select an option
  <Select
    class="mt-2"
    items={countries}
    bind:value={eventSelected}
    clearable
    clearableOnClick={() => {
      alert("Clicked clear button!");
    }}
  />
</Label>
<Label class="mb-6 block">
  Select an option
  <Select class="mt-2" items={countries} bind:value={clearableSelected} clearable />
</Label>

<Select bind:elementRef={selectRef} bind:value={selectedValue} items={options} class="my-6 mb-2 " />
<div>
    <Button
        onclick={() => {
        // programmatically change the selection
        selectRef.selectedIndex = 1; // This would select Option 2
        selectedValue = "option2";
        selectRef?.focus();
        console.log(`Selected index: ${selectRef?.selectedIndex}`);
        }}
    >
  Access Select
    </Button>
</div>

</Card>