<script>
  import { Checkbox, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, Label, TableBodyRow } from "flowbite-svelte";
  import { Heading, P, A, Mark, Secondary } from "flowbite-svelte";
</script>

<div>
    <h4>Enabled</h4>
    <Checkbox>Default checkbox</Checkbox>
    <Checkbox checked>Checked state</Checkbox>
    <Checkbox indeterminate>Indeterminate state</Checkbox>
</div>
<div>
    &nbsp;
</div>
<div>
    <h4>Disabled</h4>
    <Checkbox disabled>Disabled checkbox</Checkbox>
    <Checkbox disabled checked>Disabled checked</Checkbox>
    <Checkbox disabled indeterminate>Disabled indeterminate</Checkbox>
</div>
<div>
    &nbsp;
</div>

<div>
    <h4>Other syntax</h4>
    <Table>
    <TableHead>
        <TableHeadCell>Left column</TableHeadCell>
        <TableHeadCell>Right column</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y dark:divide-gray-700">
        <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
        <TableBodyCell><Label for="checkbox1">Default checkbox</Label></TableBodyCell>
        <TableBodyCell><Label for="checkbox2">Disabled checkbox</Label></TableBodyCell>
        </TableBodyRow>
        <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
        <TableBodyCell><Checkbox id="checkbox1" checked /></TableBodyCell>
        <TableBodyCell><Checkbox id="checkbox2" disabled /></TableBodyCell>
        </TableBodyRow>
    </TableBody>
    </Table>

    <Label color="red" class="mt-4 flex items-center font-bold italic">
    Label on the other side <Checkbox divClass="ms-2" />
    </Label>    
</div>
