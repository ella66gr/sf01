<script>
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Checkbox,
    TableSearch
       } from "flowbite-svelte";
</script>

<div>
    <h4 class="text-2xl dark:text-white">Basic Table</h4>
    <Table>
    <TableHead>
        <TableHeadCell>Product name</TableHeadCell>
        <TableHeadCell>Color</TableHeadCell>
        <TableHeadCell>Category</TableHeadCell>
        <TableHeadCell>Price</TableHeadCell>
    </TableHead>
    <TableBody>
        <TableBodyRow>
        <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
        <TableBodyCell>Sliver</TableBodyCell>
        <TableBodyCell>Laptop</TableBodyCell>
        <TableBodyCell>$2999</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
        <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
        <TableBodyCell>White</TableBodyCell>
        <TableBodyCell>Laptop PC</TableBodyCell>
        <TableBodyCell>$1999</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
        <TableBodyCell>Magic Mouse 2</TableBodyCell>
        <TableBodyCell>Black</TableBodyCell>
        <TableBodyCell>Accessories</TableBodyCell>
        <TableBodyCell>$99</TableBodyCell>
        </TableBodyRow>
    </TableBody>
    </Table>
</div>
<div>
    &nbsp;
</div>
<div>
    <h4 class="text-2xl dark:text-white">Basic Table with hover</h4>
    <Table hoverable={true}>
    <TableHead>
        <TableHeadCell>Product name</TableHeadCell>
        <TableHeadCell>Color</TableHeadCell>
        <TableHeadCell>Category</TableHeadCell>
        <TableHeadCell>Price</TableHeadCell>
        <TableHeadCell>
        <span class="sr-only">Edit</span>
        </TableHeadCell>
    </TableHead>
    <TableBody>
        <TableBodyRow>
        <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
        <TableBodyCell>Sliver</TableBodyCell>
        <TableBodyCell>Laptop</TableBodyCell>
        <TableBodyCell>$2999</TableBodyCell>
        <TableBodyCell>
            <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
        </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
        <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
        <TableBodyCell>White</TableBodyCell>
        <TableBodyCell>Laptop PC</TableBodyCell>
        <TableBodyCell>$1999</TableBodyCell>
        <TableBodyCell>
            <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
        </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
        <TableBodyCell>Magic Mouse 2</TableBodyCell>
        <TableBodyCell>Black</TableBodyCell>
        <TableBodyCell>Accessories</TableBodyCell>
        <TableBodyCell>$99</TableBodyCell>
        <TableBodyCell>
            <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
        </TableBodyCell>
        </TableBodyRow>
    </TableBody>
    </Table> 
</div>
<div>
    &nbsp;
</div>
<div>
    <h4 class="text-2xl dark:text-white">Table with checkboxes</h4>
    <Table hoverable={true}>
    <TableHead>
        <TableHeadCell class="p-4!">
        <Checkbox />
        </TableHeadCell>
        <TableHeadCell>Product name</TableHeadCell>
        <TableHeadCell>Color</TableHeadCell>
        <TableHeadCell>Category</TableHeadCell>
        <TableHeadCell>Price</TableHeadCell>
        <TableHeadCell>
        <span class="sr-only">Edit</span>
        </TableHeadCell>
    </TableHead>
    <TableBody>
        <TableBodyRow>
        <TableBodyCell class="p-4!">
            <Checkbox />
        </TableBodyCell>
        <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
        <TableBodyCell>Sliver</TableBodyCell>
        <TableBodyCell>Laptop</TableBodyCell>
        <TableBodyCell>$2999</TableBodyCell>
        <TableBodyCell>
            <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
        </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
        <TableBodyCell class="p-4!">
            <Checkbox />
        </TableBodyCell>
        <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
        <TableBodyCell>White</TableBodyCell>
        <TableBodyCell>Laptop PC</TableBodyCell>
        <TableBodyCell>$1999</TableBodyCell>
        <TableBodyCell>
            <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
        </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
        <TableBodyCell class="p-4!">
            <Checkbox />
        </TableBodyCell>
        <TableBodyCell>Magic Mouse 2</TableBodyCell>
        <TableBodyCell>Black</TableBodyCell>
        <TableBodyCell>Accessories</TableBodyCell>
        <TableBodyCell>$99</TableBodyCell>
        <TableBodyCell>
            <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
        </TableBodyCell>
        </TableBodyRow>
    </TableBody>
    </Table>
</div>

