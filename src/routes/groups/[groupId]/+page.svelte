<script lang="ts">
	import type { PageData } from './$types';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
			CardHeader,
			CardTitle
	} from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { Users, CalendarDays, Info } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	export let data: PageData;

	const { group, members, allGames } = data;

	function editGroup() {
		goto(`/groups/${group.id}/edit`);
	}

	function goToGame(gameId: string) {
		goto(`/groups/${group.id}/games/${gameId}`);
	}

	function handleAttend(event: Event, gameId: string) {
		event.stopPropagation();
		// Add your attend logic here
		console.log(`Attending game ${gameId}`);
	}

	// Function to determine if a game is in the past
	function isPastGame(gameDate: string): boolean {
		return new Date(gameDate) < new Date();
	}

	// Separate games into upcoming and past
	$: upcomingGames = allGames.filter((game) => !isPastGame(game.date_time));
	$: pastGames = allGames.filter((game) => isPastGame(game.date_time)).reverse();

	function animateTabContent(tabValue: string) {
		const content = document.querySelector(`.tab-content-${tabValue}`);
		if (content) {
			gsap.fromTo(content, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 });
		}
	}

	onMount(() => {
		const sections = document.querySelectorAll('.section');
		gsap.fromTo(sections, 
			{ opacity: 0, y: 20 }, 
			{ opacity: 1, y: 0, duration: 0.6, stagger: 0.2 }
		);
	});
</script>

<div class="container mx-auto px-4 py-8 max-w-3xl">
	<Card class="mb-8 section">
		<CardHeader>
			<CardTitle>{group.name}</CardTitle>
			<CardDescription>{group.description}</CardDescription>
		</CardHeader>
		<CardContent>
			<p class="text-sm text-muted-foreground">Members: {members.length}</p>
		</CardContent>
		<CardFooter class="flex justify-between">
			<Button>Join Group</Button>
			<Button on:click={editGroup}>Edit Group</Button>
		</CardFooter>
	</Card>

	<Tabs value="info" class="w-full section">
		<TabsList class="grid w-full grid-cols-3">
			<TabsTrigger value="info" on:click={() => animateTabContent('info')}>
				<Info class="mr-2 h-4 w-4" />Info
			</TabsTrigger>
			<TabsTrigger value="members" on:click={() => animateTabContent('members')}>
				<Users class="mr-2 h-4 w-4" />Members
			</TabsTrigger>
			<TabsTrigger value="games" on:click={() => animateTabContent('games')}>
				<CalendarDays class="mr-2 h-4 w-4" />Games
			</TabsTrigger>
		</TabsList>
		<TabsContent value="info" class="tab-content-info">
			<Card>
				<CardHeader>
					<CardTitle>Group Information</CardTitle>
				</CardHeader>
				<CardContent>
					<p>{group.description}</p>
				</CardContent>
			</Card>
		</TabsContent>
		<TabsContent value="members" class="tab-content-members">
			<Card>
				<CardHeader>
					<CardTitle>Members</CardTitle>
					<CardDescription>Group members ({members.length})</CardDescription>
				</CardHeader>
				<CardContent>
					<div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
						{#each members as member}
							<div class="flex items-center space-x-4">
								<Avatar>
									<AvatarImage alt={member.name} />
									<AvatarFallback>{(member.name ?? '').charAt(0)}</AvatarFallback>
								</Avatar>
								<div>
									<p class="text-sm font-medium">{member.name}</p>
									<p class="text-xs text-muted-foreground">{member.role}</p>
								</div>
							</div>
						{/each}
					</div>
				</CardContent>
			</Card>
		</TabsContent>
		<TabsContent value="games" class="tab-content-games">
			<Card>
				<CardHeader>
					<CardTitle>Games</CardTitle>
					<CardDescription>Scheduled events for the group</CardDescription>
					<CardContent>
						<div class="space-y-4">
							{#if upcomingGames.length > 0}
								<h3 class="font-semibold text-lg">Upcoming Games</h3>
								{#each upcomingGames as game, index}
									<div class="flex items-center justify-between">
										<button
											class="flex-1 text-left"
											on:click={() => goToGame(game.id)}
											on:keydown={(event) => event.key === 'Enter' && goToGame(game.id)}
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
								{#each pastGames as game, index}
									<div class="flex items-center justify-between opacity-60">
										<button
											class="flex-1 text-left"
											on:click={() => goToGame(game.id)}
											on:keydown={(event) => event.key === 'Enter' && goToGame(game.id)}
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
				</CardHeader>
			</Card>
		</TabsContent>
	</Tabs>
</div>
