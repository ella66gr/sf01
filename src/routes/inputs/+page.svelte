<script>
  import {
    Input,
    Label,
    Helper,
    Button,
    Checkbox,
    A,
    Card } from "flowbite-svelte";
</script>

<div>
    <Card href="/cards" class="p-4 sm:p-6 md:p-8">
        <form>
  <div class="mb-6 grid gap-6 md:grid-cols-1">
    <div>
      <Label for="first_name" class="mb-2">First name</Label>
      <Input type="text" id="first_name" placeholder="John" required />
    </div>

    <div>
      <Label for="last_name" class="mb-2">Last name</Label>
      <Input type="text" id="last_name" placeholder="Doe" required />
    </div>

    <div>
      <Label for="company" class="mb-2">Company</Label>
      <Input type="text" id="company" placeholder="Flowbite" required />
    </div>

    <div>
      <Label for="phone" class="mb-2">Phone number</Label>
      <Input type="tel" id="phone" placeholder="123-45-678" pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"} required />
    </div>

    <div>
      <Label for="website" class="mb-2">Website URL</Label>
      <Input type="url" id="website" placeholder="flowbite.com" required />
    </div>

    <div>
      <Label for="visitors" class="mb-2">Unique visitors (per month)</Label>
      <Input type="number" id="visitors" placeholder="" required />
    </div>
  </div>
  <div class="mb-6">
    <Label for="email" class="mb-2">Email address</Label>
    <Input type="email" id="email" placeholder="john.doe@company.com" required />
  </div>
  <div class="mb-6">
    <Label for="password" class="mb-2">Password</Label>
    <Input type="password" id="password" placeholder="•••••••••" required />
  </div>
  <div class="mb-6">
    <Label for="confirm_password" class="mb-2">Confirm password</Label>
    <Input type="password" id="confirm_password" placeholder="•••••••••" required />
  </div>
  <Checkbox divClass="mb-6 gap-1 rtl:space-x-reverse" required>
    I agree with the <A href="/" class="text-primary-700 dark:text-primary-600 hover:underline">terms and conditions</A>.
  </Checkbox>
  <Button type="submit">Submit</Button>
</form>
    </Card>
</div>

<div>
    &nbsp;
</div>
<div>
    <Card href="/cards" class="p-4 sm:p-6 md:p-8">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</Card>
</div>