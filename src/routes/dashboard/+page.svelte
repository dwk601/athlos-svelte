<script lang="ts">
	export let data;
	const { user, groups, previousGames, upcomingGames } = data;

	// Import UI components and animations
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { goto } from '$app/navigation';

	function goToGame(gameId: string, groupId: string) {
		goto(`/groups/${groupId}/games/${gameId}`);
	}

	onMount(() => {
		const sections = document.querySelectorAll('.section');
		gsap.fromTo(
			sections,
			{ opacity: 0, y: -20 },
			{ opacity: 1, y: 0, duration: 0.6, stagger: 0.2 }
		);
	});
</script>

<div class="container mx-auto p-4">
	<!-- Welcome Card -->
	<Card class="section mx-auto mb-4 w-full max-w-3xl">
		<CardHeader>
			<CardTitle>Welcome, {user.name}!</CardTitle>
			<CardDescription>Your dashboard overview</CardDescription>
		</CardHeader>
	</Card>

	<!-- Your Groups Card -->
	<Card class="section mx-auto mb-4 w-full max-w-3xl">
		<CardHeader>
			<CardTitle>Your Groups</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="flex flex-wrap gap-2">
				{#each groups as group}
					<a href="/groups/{group.id}">
						<Badge variant="secondary" class="text-lg">{group.name}</Badge>
					</a>
				{/each}
			</div>
		</CardContent>
	</Card>

	<!-- Upcoming Games Card -->
	<Card class="section mx-auto mb-4 w-full max-w-3xl">
		<CardHeader>
			<CardTitle>Upcoming Games</CardTitle>
		</CardHeader>
		<CardContent>
			{#if upcomingGames.length > 0}
				<ul class="space-y-2">
					{#each upcomingGames as game}
						<li>
							<div
								on:click={() => goToGame(String(game.id), String(game.group_id))}
								on:keydown={(e) =>
									e.key === 'Enter' && goToGame(String(game.id), String(game.group_id))}
								class="grid cursor-pointer grid-cols-[2fr_1fr_1fr] items-center gap-4"
								role="button"
								tabindex="0"
							>
								<span>{new Date(game.date_time).toLocaleString()}</span>
								<span>{game.location}</span>
								<span>
									<Badge variant="outline">
										{groups.find((g) => g.id === game.group_id)?.name}
									</Badge>
								</span>
							</div>
						</li>
					{/each}
				</ul>
			{:else}
				<p>No upcoming games.</p>
			{/if}
		</CardContent>
	</Card>

	<!-- Previous Games Card -->
	<Card class="section mx-auto w-full max-w-3xl">
		<CardHeader>
			<CardTitle>Previous Games</CardTitle>
		</CardHeader>
		<CardContent>
			{#if previousGames.length > 0}
				<ul class="space-y-2">
					{#each previousGames as game}
						<li>
							<div
								on:click={() => goToGame(String(game.id), String(game.group_id))}
								on:keydown={(e) =>
									e.key === 'Enter' && goToGame(String(game.id), String(game.group_id))}
								class="grid cursor-pointer grid-cols-[2fr_1fr_1fr] items-center gap-4"
								role="button"
								tabindex="0"
							>
								<span>{new Date(game.date_time).toLocaleString()}</span>
								<span>{game.location}</span>
								<span>
									<Badge variant="outline">
										{groups.find((g) => g.id === game.group_id)?.name}
									</Badge>
								</span>
							</div>
						</li>
					{/each}
				</ul>
			{:else}
				<p>No previous games.</p>
			{/if}
		</CardContent>
	</Card>
</div>
