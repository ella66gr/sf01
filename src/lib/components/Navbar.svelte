<!-- Reusable Navbar with dropdown menus -->

<script lang="ts">
  import {
    Navbar,
    NavBrand,
    NavUl,
    NavLi,
    NavHamburger,
    Dropdown,
    DropdownItem,
    DropdownDivider,
    DarkMode
  } from 'flowbite-svelte';

  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';

  const activeUrl = derived(page, ($page) => $page.url.pathname);
</script>

<Navbar>
  <NavBrand href="/">
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SF01</span>
  </NavBrand>

  <NavHamburger />

  <NavUl {activeUrl}>
    <NavLi href="/">Home</NavLi>

    <!-- Inputs group -->
    <NavLi class="cursor-pointer">
      Inputs <ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" />
    </NavLi>
    <Dropdown simple class="w-44" {activeUrl}>
      <DropdownItem href="/form">Form Inputs</DropdownItem>
      <DropdownItem href="/toggle">Toggle</DropdownItem>
      <DropdownItem href="/datepicker">Datepicker</DropdownItem>
      <DropdownItem href="/checkbox">Checkbox</DropdownItem>
      <DropdownItem href="/numbers">Numbers</DropdownItem>
      <DropdownItem href="/inputs">Inputs</DropdownItem>
    </Dropdown>

    <!-- Components group -->
    <NavLi class="cursor-pointer">
      Components <ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" />
    </NavLi>
    <Dropdown simple class="w-52" {activeUrl}>
      <DropdownItem href="/button">Button</DropdownItem>
      <DropdownItem href="/badge">Badge</DropdownItem>
      <DropdownItem href="/modal">Modal</DropdownItem>
      <DropdownItem href="/alert">Alert</DropdownItem>
      <DropdownItem href="/accordion">Accordion</DropdownItem>
      <DropdownItem href="/tabs">Tabs</DropdownItem>
      <DropdownItem href="/dropdown">Dropdown</DropdownItem>
      <DropdownItem href="/table">Table</DropdownItem>
      <DropdownItem href="/cards">Cards</DropdownItem>
    </Dropdown>
  </NavUl>

  <!-- ✅ Valid placement of toggle outside <NavUl> to avoid nesting inside <button> -->
  <div class="pr-4 flex items-center">
    <DarkMode />
  </div>
</Navbar>