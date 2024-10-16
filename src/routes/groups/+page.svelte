<script lang="ts">
    import { goto } from '$app/navigation';
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card";
    import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
    import { Search, Plus } from "lucide-svelte";
    import { toast } from "svelte-sonner";
    import { groups } from '../data';
    import { v4 as uuidv4 } from 'uuid';

    let searchQuery = "";
    let newGroupName = "";

    function joinGroup() {
        toast.success("Successfully joined the group!");
    }

    function createGroup() {
        if (newGroupName.trim()) {
            groups.push({
                id: uuidv4(),
                name: newGroupName,
                description: '',
                created_by: '', 
                created_at: new Date(),
                updated_at: new Date()
            });
            newGroupName = "";
            toast.success("New group created successfully!");
        }
    }

    $: filteredGroups = searchQuery
        ? groups.filter((group) => group.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : groups;

    function routeToPage(group: { id: any; name: any; }) {
        goto(`/group/${group.id}?name=${encodeURIComponent(group.name)}`);
    }

    function redirectToCreateGroup() {
        goto('/groups/create');
    }
</script>

<div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Groups</h1>

    <div class="mb-6 flex items-center">
        <Input type="text" placeholder="Search groups..." class="mr-2" bind:value={searchQuery} />
        <Search class="text-gray-400" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {#each filteredGroups as group (group.id)}
            <Card>
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
                    <Button on:click={() => routeToPage(group)} variant="outline" class="w-full">View Group</Button>
                </CardFooter>
            </Card>
        {/each}
    </div>

    <Button on:click={redirectToCreateGroup} class="fixed bottom-4 right-4 w-full max-w-xs mx-auto"><Plus class="mr-2 h-4 w-4" /> Create New Group</Button>
</div>