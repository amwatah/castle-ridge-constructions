<script lang="ts">
import { db } from "$lib/firebase";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";


     let contractorSetup = true
     let contractorName = ""
     let contractorLocation = ""
     let contractorContact = ""
     let contractorImage  = ""
     let contractorDescribtion = ""
      let designName  = ""
      let designImage = ""
      let designRating :number 
      function  addContractor (){
          addDoc(collection(db,"contractors"),{
             names : contractorName.toUpperCase(),
             location : contractorLocation.toUpperCase(),
             contact : contractorContact,
             imageUrl : contractorImage,
             describtion : contractorDescribtion,
             likes : 0,
             dislikes : 0,
             created : serverTimestamp()
          }).then(()=>{
            alert("Contractor Added")
          }).catch(e=>alert(e))
      }
      function addDesign (){
        addDoc(collection(db,"design"),{
             name  : designName,
             imageUrl: designImage,
             rating : designRating,
             likes : 0,
             dislikes : 0,
             created : serverTimestamp()
          }).then(()=>{
            alert("Design Added")
          }).catch(e=>alert(e))

      }
</script>

<section class="admin w-screen h-screen">
     <div class="w-screen flex gap-1"> 
        <button on:click={ ()=> contractorSetup= true } class="btn w-1/2">NEW CONTACTOR </button>
        <button on:click={()=> contractorSetup= false} class="btn w-1/2">NEW DESIGN </button>
     </div>
     {#if  contractorSetup}
         <section class="contractor w-full flex flex-col items-center justify-center h-[80vh] gap-1">
            <input  bind:value= {contractorName } placeholder="Contractor Names" type="text" class="input input-primary">
            <input  bind:value= { contractorLocation } placeholder="Contractor Location" type="text" class="input input-primary">
            <input  bind:value= { contractorContact} placeholder="Contact" type="text" class="input input-primary">
            <input  bind:value= { contractorImage } placeholder="Image Url" type="text" class="input input-primary">
            <textarea bind:value={ contractorDescribtion} placeholder="Describtion"  class=" w-1/2 sm:w-1/5 textarea textarea-primary" ></textarea>
            <button on:click={ addContractor} class="btn w-1/2 sm:w-fit">SUBMIT </button>
         </section> 
     {:else}
          <section class="design w-full  flex flex-col items-center justify-center gap-2 h-[80vh]">
            <input  bind:value= {designName } placeholder="Design Name" type="text" class="input input-primary">
            <input  bind:value= { designImage } placeholder="Design Image url" type="text" class="input input-primary">
            <input  bind:value= { designRating } placeholder="Design rating" type="text" class="input input-primary">
            <button on:click={ addDesign} class=" btn btn-primary w-1/2  sm:w-1/5">SUBMIT</button>
            
          </section>
     {/if}
    
</section>