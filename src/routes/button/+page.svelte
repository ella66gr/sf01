<script>
  import { Button, Card } from 'flowbite-svelte';
  
  let showCard = false;
  let buttonText = 'Show Card';
  let isLoading = false;
  
  // Use onclick (DOM attribute) not on:click (Svelte directive)
  const handleButtonClick = () => {
    isLoading = true;
    buttonText = 'Loading...';
    
    // Simulate async operation
    setTimeout(() => {
      showCard = !showCard;
      buttonText = showCard ? 'Hide Card' : 'Show Card';
      isLoading = false;
    }, 1000);
  };
  
  const handleCardToggle = () => {
    showCard = !showCard;
    buttonText = showCard ? 'Hide Card' : 'Show Card';
  };
</script>

<div class="p-4 space-y-4">
  <h2 class="text-xl font-bold">Dynamic Button Examples</h2>
  
  <!-- Method 1: Using onclick (DOM attribute) -->
  <div>
    <h3 class="text-lg font-semibold mb-2">Method 1: Using onclick</h3>
    <Button 
      onclick={handleButtonClick}
      disabled={isLoading}
      color={isLoading ? 'alternative' : 'primary'}
    >
      {buttonText}
    </Button>
  </div>
  
  <!-- Method 2: Direct toggle -->
  <div>
    <h3 class="text-lg font-semibold mb-2">Method 2: Direct toggle</h3>
    <Button onclick={handleCardToggle} color="blue">
      {showCard ? 'Hide' : 'Show'} Card (Instant)
    </Button>
  </div>
  
  <!-- Method 3: Inline function -->
  <div>
    <h3 class="text-lg font-semibold mb-2">Method 3: Inline function</h3>
    <Button onclick={() => showCard = !showCard} color="red">
      Toggle Card (Inline)
    </Button>
  </div>
  
  <!-- Dynamic Card Display -->
  {#if showCard}
    <Card class="mt-4">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Dynamic Card
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
        This card was dynamically shown using a Flowbite Svelte button! 
        The button state changes based on whether the card is visible.
      </p>
      <Button onclick={() => showCard = false} color="alternative" class="mt-3">
        Close Card
      </Button>
    </Card>
  {/if}
</div>