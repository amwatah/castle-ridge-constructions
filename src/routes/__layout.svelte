<script>
    import Nav from "$lib/components/Nav.svelte";
import Theme from "$lib/components/Theme.svelte";
import "../app.css";
 let activetheme = "light"
 function swapTheme(){
    activetheme = activetheme ==="light" ? "night" : "light"
 }
  </script>
  


<div data-theme={activetheme} class="w-screen min-h-screen overflow-x-hidden">
  <Theme on:swapTheme={swapTheme} />
  <slot />
   <Nav></Nav>
</div>