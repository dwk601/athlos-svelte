<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { Separator } from '$lib/components/ui/separator';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Calendar } from 'lucide-svelte';

	export let data;

	let { groupMembers, upcomingGames } = data;
	function createGame() {
		// Add your game creation logic here
		console.log('Game created!');
	}
</script>

<div class="container mx-auto flex flex-col gap-4 p-4 md:flex-row">
	<div class="w-full md:w-1/3">
		<Card class="mb-4">
			<CardHeader>
				<CardTitle>Group Members</CardTitle>
			</CardHeader>
			<CardContent>
				<ScrollArea class="h-[300px]">
					{#each groupMembers as member}
						<div class="mb-4 flex items-center space-x-4">
							<Avatar>
								<AvatarImage src={member.avatar} alt={member.firstName} />
								<AvatarFallback>{member.firstName[0]}</AvatarFallback>
							</Avatar>
							<span>{member.firstName}</span>
						</div>
					{/each}
				</ScrollArea>
			</CardContent>
		</Card>
		<Button class="w-full" on:click={createGame}>Create a Game</Button>
	</div>

	<Separator orientation="horizontal" class="md:hidden" />
	<Separator orientation="vertical" class="hidden h-auto md:block" />

	<div class="w-full md:w-2/3">
		<Card>
			<CardHeader>
				<CardTitle>Upcoming Games</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="grid gap-4">
					{#each upcomingGames as game}
						<a href={`/games/${game.id}`} class="block">
							<Card class="cursor-pointer transition-shadow duration-200 hover:shadow-lg">
								<CardHeader>
									<CardTitle>{game.name}</CardTitle>
								</CardHeader>
								<CardContent>
									<div class="flex items-center space-x-2 text-sm">
										<Calendar class="h-4 w-4" />
										<span>{game.date} at {game.time}</span>
									</div>
									<p class="mt-2 text-sm text-muted-foreground">Location: {game.location}</p>
								</CardContent>
							</Card>
						</a>
					{/each}
				</div>
			</CardContent>
		</Card>
	</div>
</div>
