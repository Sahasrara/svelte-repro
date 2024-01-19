<script>
  import Subscriber from "$lib/Subscriber.svelte";
  import { store } from "$lib/store";
</script>

Please examine the console logs as you click buttons.
<br />Current Value: {$store.name}
<Subscriber {store} name={"Eric"} />
<Subscriber {store} name={"Rich"} />
<Subscriber {store} name={"Steve"} />
