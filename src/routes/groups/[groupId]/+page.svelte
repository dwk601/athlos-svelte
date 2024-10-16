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

	export let data: PageData;

	const { group, members, upcomingGames } = data;

	function editGroup() {
        goto(`/groups/${group.id}/edit`);
    }
</script>

<div class="container mx-auto px-4 py-8">
	<Card class="mb-8">
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

	<Tabs value="info" class="w-full">
		<TabsList class="grid w-full grid-cols-3">
			<TabsTrigger value="info"><Info class="mr-2 h-4 w-4" />Info</TabsTrigger>
			<TabsTrigger value="members"><Users class="mr-2 h-4 w-4" />Members</TabsTrigger>
			<TabsTrigger value="games"><CalendarDays class="mr-2 h-4 w-4" />Games</TabsTrigger>
		</TabsList>
		<TabsContent value="info">
			<Card>
				<CardHeader>
					<CardTitle>Group Information</CardTitle>
				</CardHeader>
				<CardContent>
					<p>{group.description}</p>
					<!-- {#if group.rules}
                        <h3 class="mt-4 font-semibold">Group Rules:</h3>
                        <ul class="list-disc pl-5">
                            {#each group.rules as rule}
                                <li>{rule}</li>
                            {/each}
                        </ul>
                    {/if} -->
				</CardContent>
			</Card>
		</TabsContent>
		<TabsContent value="members">
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
									<AvatarFallback></AvatarFallback>
								</Avatar>
								<div>
									<p class="text-sm font-medium">{member.name}</p>
								</div>
							</div>
						{/each}
					</div>
				</CardContent>
			</Card>
		</TabsContent>
		<TabsContent value="games">
			<Card>
				<CardHeader>
					<CardTitle>Games</CardTitle>
					<CardDescription>Scheduled events for the group</CardDescription>
				</CardHeader>
				<CardContent>
					<div class="space-y-4">
						{#each upcomingGames as game, index}
							<div class="flex items-center justify-between">
								<div>
									<h3 class="font-semibold">{game.location}</h3>
									<p class="text-sm text-muted-foreground">
										Date: {new Date(game.date_time).toLocaleString()}
									</p>
								</div>
								<div class="text-right">
									<Button variant="outline" size="sm">Join</Button>
								</div>
							</div>
							{#if index !== upcomingGames.length - 1}
								<Separator class="my-2" />
							{/if}
						{/each}
					</div>
				</CardContent>
			</Card>
		</TabsContent>
	</Tabs>
</div>
