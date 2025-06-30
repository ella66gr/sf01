<script lang="ts">
  import { Input, Label, P, Button, ButtonGroup } from "flowbite-svelte";
  import { PlusOutline, MinusOutline } from "flowbite-svelte-icons";
  let quantity: number = $state(12345);
  let counterInput: number = $state(12);
</script>
<div>
<h4 class="text-2xl dark:text-white">Numbers</h4>
<form class="mx-auto max-w-sm">
  <Label for="number-input">Select a number:</Label>
  <Input type="number" id="number-input" aria-describedby="helper-text-explanation" placeholder="90210" required />
</form>
</div>
<div>
    &nbsp;
</div>
<div>
    <form class="mx-auto max-w-xs">
    <Label class="mb-2 text-sm" for="quantity-input">Choose quantity:</Label>
        <div class="relative flex max-w-[8rem] items-center">
            <ButtonGroup>
            <Button type="button" id="decrement-button" onclick={() => (quantity -= 1)}>
                <MinusOutline />
            </Button>
            <Input bind:value={quantity} type="number" id="quantity-input" aria-describedby="helper-text-explanation" placeholder="999" required class="w-20" />
            <Button type="button" id="increment-button" onclick={() => (quantity += 1)}>
                <PlusOutline />
            </Button>
            </ButtonGroup>
        </div>
    <P id="helper-text-explanation" class="mt-2 text-sm">Please select a 5 digit number from 0 to 9.</P>
    </form>
</div>
<div>
    &nbsp;
</div>
<div>
    <form class="mx-auto max-w-xs">
  <Label for="counter-input" class="mb-1 block text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</Label>
  <div class="relative flex items-center">
    <Button color="alternative" id="decrement-button" class="m-0 h-5 w-5 p-4" onclick={() => (counterInput -= 1)}>
      <MinusOutline class="h-2.5 w-2.5" />
    </Button>
    <Input type="number" id="counter-input" class="m-0 w-0 w-12 shrink-0 border-0 bg-transparent p-0 text-center text-sm  font-normal text-gray-900 focus:ring-0 focus:outline-none dark:text-white" placeholder="" bind:value={counterInput} required />
    <Button color="alternative" id="increment-button" class="h-5 w-5 p-4" onclick={() => (counterInput += 1)}>
      <PlusOutline class="h-2.5 w-2.5" />
    </Button>
  </div>
</form>
</div>

