<script lang="ts">
import { goto } from "$app/navigation";

import { db } from "$lib/firebase";
import { currentUserDetail } from "$lib/store";

import Icon from "@iconify/svelte";
import { addDoc, collection, getDocs, query, serverTimestamp, where } from "firebase/firestore";


    let hasAccount: boolean = true
    let username:string = "" 
    let password:string =""
    let newUsername:string=""
    let newPassword : string = ""
    let newConfirmPassWord: string = ""
    let email:string = ""
    let phone :string =""

    function registerNewUser (){
         if ( newPassword === newConfirmPassWord) {
            addDoc(collection(db,"users"),{
                username: newUsername.toUpperCase(),
                password : newPassword,
                phone : phone,
                email : email,
                created: serverTimestamp(),
                admin : false

            }).then(()=>{
                alert("Karibu Castle Rigde")
                hasAccount =true
            }).catch(e=>alert(e))

         } else {
            alert("password mistmatch") 
         }
    }
     
    function login (){
      getDocs(query(collection(db,"users"),where("username","==", username.toUpperCase()),where("password","==",password))).then((result)=>{
         if ( !result.empty) {
            alert("login successful!")
              result.forEach(doc=>{
                  currentUserDetail.set(doc.data())  
              })
            goto("/home")
            
         } else {
            alert("Incorrect Details ! try Again")
         }
      })
    }

</script> 

<div class="login flex flex-col items-center justify-center h-screen w-screen">
    
   {#if  hasAccount }
    <section class="login flex flex-col gap-2 items-center">
         <input bind:value={ username } placeholder=" username" type="text" class=" input input-primary ">
         <input bind:value={ password} placeholder=" password" type="password" class=" input input-primary ">
         <button on:click={ login} class="btn w-full">LOGIN</button>
          <button on:click={()=> hasAccount=false } class=" p-2">Do not have account ? <span class=" underline text-secondary">Register</span></button>
    </section>
   {:else}
   <section class="sign-up flex flex-col gap-2 items-center">
    <button  on:click={ ()=> hasAccount = true}>
        <Icon  icon="ant-design:login-outlined"  class=" text-3xl text-accent" />
    </button>
   
    <input bind:value={ newUsername}  placeholder=" username" type="text" class=" input input-primary ">
    <input bind:value={ phone} placeholder="contact" type="email"  class="input input-primary">
    <input bind:value={ email}  placeholder="email" type="email" name="" id="" class="input input-primary">
    <input bind:value={ newPassword } placeholder=" password" type="text" class=" input input-primary ">
    <input bind:value={ newConfirmPassWord} placeholder=" confirm password" type="text" class=" input input-primary ">
    <button on:click={registerNewUser} class="btn w-full">REGISTER</button>
</section>
   {/if} 
</div>
