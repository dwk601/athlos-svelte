<script lang="ts">
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';

	export let group: { id: string; name: string; description: string };
	export let members;
	export let isLeader;

	function editGroup() {
		goto(`/groups/${group.id}/edit`);
	}

	function joinGroup() {
		// Implement join group logic
		console.log('Joining group:', group.name);
	}
</script>

<Card class="mb-8 section">
	<CardHeader>
		<CardTitle>{group.name}</CardTitle>
		<CardDescription>{group.description}</CardDescription>
	</CardHeader>
	<CardContent>
		<p class="text-sm text-muted-foreground">Members: {members.length}</p>
	</CardContent>
	<CardFooter class="flex justify-between">
		<Button on:click={joinGroup}>Join Group</Button>
		{#if isLeader}
			<Button on:click={editGroup}>Edit Group</Button>
		{/if}
	</CardFooter>
</Card>
