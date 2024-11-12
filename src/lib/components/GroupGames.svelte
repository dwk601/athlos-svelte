<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { goto } from '$app/navigation';

	export let upcomingGames;
	export let pastGames;
	export let groupId: string; // Add this line

	function goToGame(gameId: string) {
		goto(`/groups/${groupId}/games/${gameId}`); // Update the path
	}

	function handleAttend(event: Event, gameId: string) {
		event.stopPropagation();
		// Implement attend logic
	}
</script>

<Card>
	<CardHeader>
		<CardTitle>Games</CardTitle>
		<CardDescription>Scheduled events for the group</CardDescription>
	</CardHeader>
	<CardContent>
		<div class="space-y-4">
			{#if upcomingGames.length > 0}
				<h3 class="font-semibold text-lg">Upcoming Games</h3>
				<!-- ...existing code for upcoming games... -->
				{#each upcomingGames as game, index}
					<div class="flex items-center justify-between">
						<button
							class="flex-1 text-left"
							on:click={() => goToGame(game.id)}
							aria-label={`Go to game at ${game.location}`}
						>
							<h4 class="font-semibold">{game.location}</h4>
							<p class="text-sm text-muted-foreground">
								Date: {new Date(game.date_time).toLocaleString()}
							</p>
							<p class="text-xs text-muted-foreground">
								Attending: {game.attending} / {game.attendees}
							</p>
						</button>
						<Button
							variant="outline"
							size="sm"
							on:click={(event) => handleAttend(event, game.id)}
						>
							Attend
						</Button>
					</div>
					{#if index !== upcomingGames.length - 1}
						<Separator class="my-2" />
					{/if}
				{/each}
			{/if}

			{#if pastGames.length > 0}
				<h3 class="font-semibold text-lg mt-6">Past Games</h3>
				<!-- ...existing code for past games... -->
				{#each pastGames as game, index}
					<div class="flex items-center justify-between opacity-60">
						<button
							class="flex-1 text-left"
							on:click={() => goToGame(game.id)}
							aria-label={`Go to past game at ${game.location}`}
						>
							<h4 class="font-semibold">{game.location}</h4>
							<p class="text-sm text-muted-foreground">
								Date: {new Date(game.date_time).toLocaleString()}
							</p>
							<p class="text-xs text-muted-foreground">
								Attended: {game.attending} / {game.attendees}
							</p>
						</button>
					</div>
					{#if index !== pastGames.length - 1}
						<Separator class="my-2" />
					{/if}
				{/each}
			{/if}
		</div>
	</CardContent>
</Card>
