<script>
   import Icon from '@iconify/svelte'; 

</script>

<div class="nav fixed bottom-0 w-full  flex justify-evenly items-center py-2 z-[100] bg-primary text-white">
     <a href="/home" class=" flex flex-col items-center hover:text-secondary hover:scale-[1.1] ">
       <p class=" text-2xs font-bold">HOME</p>
       <Icon icon="ant-design:home-filled" />
    </a>
    <a href="/design" class=" flex flex-col items-center hover:text-secondary hover:scale-[1.1] ">
        <p class=" text-2xs font-bold">DESIGNS</p>
        <Icon icon="vscode-icons:file-type-cmake" />
     </a>
     <a href="/contractors" class=" flex flex-col items-center hover:text-secondary hover:scale-[1.1]">
        <p class=" text-2xs font-bold">CONTRACTORS</p>
        <Icon icon="noto:rescue-workers-helmet" />
     </a>
     <a href="/feedback" class=" flex flex-col items-center hover:text-secondary hover:scale-[1.1]">
        <p class=" text-2xs font-bold">FEEDBACK</p>
        <Icon icon="codicon:feedback" />
     </a>
     <a href="/about" class=" flex flex-col items-center hover:text-secondary hover:scale-[1.1]">
        <p class=" text-2xs font-bold">ABOUT US</p>
        <Icon icon="flat-color-icons:about" />
     </a>

</div>