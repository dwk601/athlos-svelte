<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Search, Plus } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import { groups } from '../data';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let searchQuery = '';
	let newGroupName = '';

	$: filteredGroups = searchQuery
		? groups.filter((group) => group.name.toLowerCase().includes(searchQuery.toLowerCase()))
		: groups;

	function routeToPage(group: { id: number; name: string }) {
		goto(`/groups/${group.id}`);
	}

	function redirectToCreateGroup() {
		goto('/groups/create');
	}

	onMount(() => {
		gsap.from('.group-card', {
			opacity: 0,
			y: 50,
			duration: 0.5,
			stagger: 0.2
		});
	});
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-6 text-3xl font-bold">Groups</h1>

	<div class="mb-6 flex items-center">
		<Input type="text" placeholder="Search groups..." class="mr-2" bind:value={searchQuery} />
		<Search class="text-gray-400" />
	</div>

	<div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each filteredGroups as group (group.id)}
			<Card class="group-card">
				<CardHeader>
					<CardTitle>{group.name}</CardTitle>
					<CardDescription>{group.description}</CardDescription>
				</CardHeader>
				<CardContent>
					<div class="flex -space-x-4">
						{#each Array(3) as _}
							<Avatar class="border-2 border-white">
								<AvatarImage src="/images/user.png" alt="User avatar" />
								<AvatarFallback>U</AvatarFallback>
							</Avatar>
						{/each}
					</div>
				</CardContent>
				<CardFooter>
					<Button on:click={() => routeToPage(group)} class="w-full">View Group</Button>
				</CardFooter>
			</Card>
		{/each}
	</div>

	<Button on:click={redirectToCreateGroup} class="fixed bottom-4 right-4 mx-auto w-48"
		><Plus class="mr-2 h-4 w-4" /> Create New Group</Button
	>
</div>
