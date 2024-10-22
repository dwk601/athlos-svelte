<!-- routes/groups/[groupId]/edit/+page.svelte -->
<script lang="ts">
    import type { PageData } from './$types';
    import { enhance } from '$app/forms';
    import { Button } from '$lib/components/ui/button';
    import { Input } from '$lib/components/ui/input';
    import { Textarea } from '$lib/components/ui/textarea';
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '$lib/components/ui/select';
    import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
    import { Label } from '$lib/components/ui/label';
    import { Separator } from '$lib/components/ui/separator';
    import { CircleAlert, Plus, X } from 'lucide-svelte';

    export let data: PageData;

    const { group, members, allUsers, groupGames } = data;

    // Group details
    let name = group.name;
    let description = group.description;

    // For adding members
    let newMemberId = '';
    $: availableUsers = allUsers.filter((user) => !members.some((member) => member.id === user.id));
</script>

<div class="container mx-auto p-4 space-y-8">
    <Card>
        <CardHeader>
            <CardTitle>Edit Group</CardTitle>
        </CardHeader>
        <CardContent>
            <form method="POST" use:enhance class="space-y-4">
                <div class="space-y-2">
                    <Label for="name">Group Name</Label>
                    <Input id="name" name="name" type="text" bind:value={name} required />
                </div>
                <div class="space-y-2">
                    <Label for="description">Description</Label>
                    <Textarea id="description" name="description" bind:value={description}></Textarea>
                </div>
                <Button>Save Changes</Button>
            </form>
        </CardContent>
    </Card>

    <Card>
        <CardHeader>
            <CardTitle>Edit Members</CardTitle>
        </CardHeader>
        <CardContent>
            <ul class="space-y-2">
                {#each members as member, index}
                    <li class="flex items-center justify-between">
                        <span>{member.name} - {member.role}</span>
                        {#if member.id !== group.created_by}
                            <!-- Don't allow removing the group creator -->
                            <Button variant="ghost" size="icon" on:click={() => (member.id)}>
                                <X class="h-4 w-4" />
                            </Button>
                        {/if}
                    </li>
                {/each}
            </ul>
            <Separator class="my-4" />
            <div class="flex space-x-2">
                <Select>
                    <SelectTrigger class="w-[180px]">
                        <SelectValue placeholder="Select a user" />
                    </SelectTrigger>
                    <SelectContent>
                        {#each availableUsers as user}
                            <SelectItem value={user.id}>{user.name}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <Button>Add Member</Button>
            </div>
        </CardContent>
    </Card>

    <Card>
        <CardHeader>
            <CardTitle>Edit Games</CardTitle>
        </CardHeader>
        <CardContent>
            <ul class="space-y-2">
                {#each groupGames as game, index}
                    <li class="flex items-center justify-between">
                        <span>{new Date(game.date_time).toLocaleString()} at {game.location}</span>
                        <Button variant="ghost" size="icon" on:click={() => (game.id)}>
                            <X class="h-4 w-4" />
                        </Button>
                    </li>
                {/each}
            </ul>
            <Separator class="my-4" />
            <div class="space-y-4">
                <div class="flex items-center space-x-2">
                    <CircleAlert class="h-4 w-4" />
                    <Input type="datetime-local" placeholder="Date & Time" />
                </div>
                <div class="flex items-center space-x-2">
                    <CircleAlert class="h-4 w-4" />
                    <Input placeholder="Location" />
                </div>
                <Button>
                    <Plus class="mr-2 h-4 w-4" /> Add Game
                </Button>
            </div>
        </CardContent>
    </Card>
</div>