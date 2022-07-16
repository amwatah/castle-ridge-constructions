<script>
import { goto } from "$app/navigation";

  import homePageImage from "$lib/assets/images/3bdhouse.jpeg"
  import Housing from "$lib/assets/housing.png"
</script>
<div class="page w-screen h-screen grid sm:grid-cols-2">
   <section class="right w-full h-[80vh] flex flex-col  items-center  p-2 justify-evenly">
      <h1 class=" text-xl font-bold">A perfect home just for you! look no further</h1>
      <h2 class="">discover the best designs and link with top contractors</h2>
      <img src={Housing} alt="home" class="  m-4 w-40 rounded-full">
      <button on:click={()=>goto("/design") } class="btn btn-primary btn-outline animate-pulse">DISCOVER </button>
   </section>
   <section class="left flex flex-col items-center justify-center">
        <img src={homePageImage} alt="home" class="  m-4 w-full h-3/4">
   </section>
</div>