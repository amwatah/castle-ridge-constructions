<script lang="ts">
import { db } from "$lib/firebase";
import { currentUserDetail } from "$lib/store";

import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { onMount } from "svelte";
    let comments :any [] = []
    let userComment  =  ""
    function addComment(){
        addDoc(collection(db,"feedback"),{
            comment :  userComment,
            by: $currentUserDetail
            
        }).then(()=>{
          alert("Thank you for your feeback ")  
        })
    }
    function getComments(){
        getDocs(collection(db,"feedback")).then( results =>{
             if ( !results.empty ) {
                 results.forEach(doc=>{
                    comments = [...comments, {...doc.data(), id:doc.id}]
                 })
             }
        }).catch(e=>alert(e))
    }
    onMount(()=>{
        getComments()
    })
</script>
<div class="page w-screen">
    {#if      $currentUserDetail != undefined }
    <div class="comment  p-2 w-full flex flex-col items-center ">
         <textarea bind:value={ userComment } placeholder="Leave a comment"   rows="4" class=" textarea textarea-primary w-full"></textarea>
        <button on:click={ addComment } class="btn m-2 p2">ADD</button>
    </div>
     <h1 class=" text-accent font-bold m-2">FEEDBACK FROM OUR CUSTOMERS</h1>
      <div class="feedbacks grid gap-3">
        {#each comments as comment }
        <section class="feedback-card border p-2 rounded-lg shadow-lg flex flex-col items-center gap-3 ">
            <div class="flex  ">
                <span class=" text-4xl text-accent flex-1">&apos;&apos;</span> <p class="flex-[8]">{comment.comment}</p><span class=" text-4xl text-accent flex-1">&apos;&apos;</span>
            </div>
            <p class=" font-bold text-accent"> {comment.by.username}</p>
        </section>
      {:else}
          <p class="">EMPTY FEEDBACKS</p>
      {/each}
        
      </div>
     
    {:else}
        <div class=" text-error">
            <p>ACESS DENIED  LOGIN TO SEE OFF ADD FEEDBACK</p>
            <a href="/" class="btn">Login</a>
        </div> 
    {/if}
   
 
</div>