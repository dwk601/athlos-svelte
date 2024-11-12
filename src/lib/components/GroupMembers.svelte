<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import MemberCard from '$lib/components/MemberCard.svelte';

	export let members;
	export let joinRequests;
	export let isLeader;

	function acceptRequest(requestId: string) {
		// Implement accept logic
		console.log('Accepting request with ID:', requestId);
	}

	function declineRequest(requestId: string) {
		// Implement decline logic
		console.log('Declining request with ID:', requestId);
	}
</script>

<Card>
	<CardHeader>
		<CardTitle>Members</CardTitle>
		<CardDescription>Group members ({members.length})</CardDescription>
	</CardHeader>
	<CardContent>
		<div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
			{#each members as member}
				<MemberCard {member} />
			{/each}
		</div>
	</CardContent>
</Card>

{#if isLeader}
	<Card class="mt-4">
		<!-- ...existing code for pending join requests... -->
		<CardHeader>
			<CardTitle>Pending Join Requests</CardTitle>
		</CardHeader>
		<CardContent>
			{#if joinRequests.length > 0}
				<div class="space-y-4">
					{#each joinRequests as request, index (request.id)}
						<div class="flex items-center justify-between">
							<div>
								<p class="text-sm font-medium">{request.user?.name}</p>
								<p class="text-xs text-muted-foreground">
									Requested at: {new Date(request.requested_at).toLocaleString()}
								</p>
							</div>
							<div class="flex space-x-2">
								<Button size="sm" on:click={() => acceptRequest(request.id)}>Accept</Button>
								<Button size="sm" variant="destructive" on:click={() => declineRequest(request.id)}
									>Decline</Button
								>
							</div>
						</div>
						{#if index !== joinRequests.length - 1}
							<Separator class="my-2" />
						{/if}
					{/each}
				</div>
			{:else}
				<p>No pending join requests.</p>
			{/if}
		</CardContent>
	</Card>
{/if}
