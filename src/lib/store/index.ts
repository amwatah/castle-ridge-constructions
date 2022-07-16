import { writable } from "svelte/store";

export const currentUserDetail = writable<{
     admin? : boolean,
     created?: any,
     email ?: string,
     password?: string ,
     phone?: string,
     username?: string
}>()