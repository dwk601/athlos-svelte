<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { group, members, upcomingGames } = data;
</script>

<h1 class="mb-4 text-3xl font-bold">{group.name}</h1>
<p class="mb-6">{group.description}</p>

<h2 class="mb-2 text-2xl font-semibold">Members</h2>
<ul class="mb-6">
	{#each members as member}
		<li>{member.name} - {member.role}</li>
	{/each}
</ul>

<h2 class="mb-2 text-2xl font-semibold">Upcoming Games</h2>
<ul>
	{#each upcomingGames as game}
		<li>
			{game.date_time.toLocaleString()} at {game.location}
		</li>
	{/each}
</ul>
