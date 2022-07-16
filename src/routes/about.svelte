<script>
	import Admin from '$lib/components/Admin.svelte';
	import { currentUserDetail } from '$lib/store';
	import Team from '$lib/assets/team.png';
</script>

<div class="page pb-[10vh]">
	{#if $currentUserDetail !== undefined}
		{#if $currentUserDetail.admin}
			<section class="admin">
				<Admin />
			</section>
		{:else}
			<section class="about w-screen h-screen ">
				<img src={Team} alt="team" class=" h-[35vh] w-full" />
				
				<h1 class="text-lg font-bold">WHO WE ARE</h1>
				<p class="">
					We are a construction agency, we have been helping many businessmen and women and also
					home owners to construct a house or apartments of their dreams since 2019. we are proud
					platinum crowned company in the construction wolrd and we are proud in ourselves on using
					our best tools, techiques and skills to help our clients succeed. our team is made up of
					sart and intelligent people that are passionate about developing perfect homes for you.
				</p>
				<h1 class="text-lg font-bold">CONTACT US ON</h1>
				<p class="">
					Our office is located at Maasai Mall building in rongai, second floor room 23. You can
					call us : 0706313018 or email us :castleridgeconstructions@gmail.com
				</p>
				
			</section>
		{/if}
	{:else}
		<div class=" w-screen h-screen flex flex-col items-center justify-center">
			<p class="text-error">Access denied</p>
			<a href="/" class="btn">LOGIN</a>
		</div>
	{/if}
</div>
