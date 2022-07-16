<script>
import { createEventDispatcher } from "svelte";


   const dispatch = createEventDispatcher()
</script>
<div class=" fixed top-0 right-0 mr-2 text-accent z-50">
    <input on:change={()=>dispatch("swapTheme")} type="checkbox" class="toggle"  />
</div>
