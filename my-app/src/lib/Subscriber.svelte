<script context="module">
  const registry = [];
</script>

<script lang="ts">
  import { get } from "svelte/store";
  import type { Name, TheStore } from "./store";

  export let store: TheStore;
  export let name: string;

  function onUpdate(value: Name) {
    for (let i = 0; i < registry.length; i++) {
      registry[i]();
    }
  }

  function toCallOnUpdate() {
    console.log(`${$store.name} - ${get(store).name}`);
  }

  function changeValue(): void {
    store.set({ name: name });
  }

  store.subscribe(onUpdate);
  registry.push(toCallOnUpdate);
</script>

<p>
  <sub>Current Value:</sub>
  <br />
  <button on:click={changeValue}>Change to {name}</button>
  <br />
</p>
