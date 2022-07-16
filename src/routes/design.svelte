<script lang="ts">
	import { db } from '$lib/firebase';

	import { collection, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';
    import HouseAvatar from '$lib/assets/house.png'

	let designs: any[] = [];

	function getDesigns() {
		getDocs(collection(db, 'design'))
			.then((docs) => {
				docs.forEach((doc) => {
					designs = [...designs, { ...doc.data(), id: doc.id }];
				});
			})
			.catch((e) => alert(e));
	}
	onMount(() => {
		getDesigns();
	});
</script>

<div class="page pb-[10vh]">
	<h1 class=" text-3xl">All Designs</h1>
	<section class="designs grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
		{#each designs as design}
			<div class="design-card border p-2 rounded-lg shadow-lg ">
				<h1 class=" uppercase text-center font-bold">{design.name}</h1>
				<img src={design.imageUrl ?design.imageUrl : HouseAvatar  } alt="good-house " class="p-2 h-[25vh] w-full" />
			    <div class="rating">
                    <h1>RATING :</h1>
                    {#if parseInt(design.rating) === 0}
					<p class=" text-grey-200">⭐⭐⭐</p>
				{:else if parseInt(design.rating) === 1}
					<p class="">⭐</p>
				{:else if parseInt(design.rating) === 2}
					<p class="">⭐⭐</p>
				{:else if parseInt(design.rating) === 3}
					<p class="">⭐⭐⭐</p>
				{:else if parseInt(design.rating) === 4}
					<p class="">⭐⭐⭐⭐</p>
				{:else}
					<p class="">⭐⭐⭐⭐⭐</p>
				{/if}
                </div>
			</div>
		{:else}
			<p class="">The are no designs currently</p>
		{/each}
	</section>
</div>
