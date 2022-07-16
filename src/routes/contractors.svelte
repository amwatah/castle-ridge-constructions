<script lang="ts">
import { db } from "$lib/firebase";
import Avatar from "$lib/assets/avatar.png"

import { collection, doc, getDocs, increment, updateDoc } from "firebase/firestore";
import { onMount } from "svelte";
import Icon from "@iconify/svelte";
import { identity } from "svelte/internal";


    let contractors  :any [] = []
    function getContractors  (){
         getDocs(collection(db,"contractors")).then(docs=>{
            docs.forEach(doc=>{
                 contractors = [ ...contractors , { ...doc.data(),id:doc.id }]
            })
         })
    }
    function like( id:string,contractor:any){
        updateDoc(doc(db,"contractors",id),{
            likes :increment(1)
        }).then(()=>{
             alert(`you liked ${contractor.names}`)
        }).catch(e=>alert(e))
    }
    function disLike( id:string,contractor:any){
        updateDoc(doc(db,"contractors",id),{
            dislikes :increment(1)
        }).then(()=>{
             alert(`you disliked ${contractor.names}`)
        }).catch(e=>alert(e))
    }

    
    onMount(()=>{
        getContractors()
    })

</script>
<div class="page pb-[10vh]">
    <section class="contrators w-screen grid sm:grid-cols-2 md:grid-cols-3">
        {#each  contractors as contractor}
             <section class="contrator-card flex flex-col items-center border-2 m-2 p-2 rounded-md">
              <h1 class=" font-bold text-lg">{contractor.names}</h1>
              <h1 class=" font-bold">{contractor.location}</h1>
              <h1 class=" text-secondary font-bold border-b-4 m-2">{contractor.contact}</h1>
              <img src={contractor.imageUrl ?contractor.imageUrl : Avatar } alt="contractor" class=" h-[25vh] w-[50%] border-2 rounded-full border-accent">
              <p class=" h-[30%] overflow-y-scroll ">{contractor.describtion}</p>
              <div class="action flex justify-evenly w-full p-1 mt-1 border-t-2 items-center">
                 <div class="likes  gap-2 flex  flex-col items-center">
                    <button on:click={()=> like(contractor.id ,contractor)} class=" btn btn-circle">
                        <Icon icon="ant-design:like-filled" />
                    </button>
                     <p>{contractor.likes}</p>
                 </div>
                 <div class="dislikes   gap-2 flex flex-col items-center">
                    <button on:click={()=>disLike(contractor.id,  contractor)}  class=" btn btn-circle">
                        <Icon icon="ant-design:dislike-filled" />
                    </button>
                    
                    <p>{contractor.dislikes}</p>
                </div>
              </div>

             </section>
        {:else}
              <p class="">There are currently no contractors</p>
        {/each}
    </section>
</div>