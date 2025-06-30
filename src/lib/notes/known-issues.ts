// src/lib/notes/known-issues.ts

/**
 * Known Flowbite Svelte Component Limitations
 * Update as tested in SF01 app
 */
export const knownIssues = {
  Button: 'Does not forward `on:click`. Use native button or wrapper.',
  Modal: '`open` works, but `bind:open` not supported. Use manual control.',
  Alert: '`on:dismiss` event works but is not typed. Use `@ts-ignore`.',
  Tabs: 'Check slot rendering and active state switching manually.',
  Dropdown: 'Often requires manual open/close control or fails silently.',
  Datepicker: 'Complex events may require workarounds for binding.'
};