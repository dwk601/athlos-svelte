<script lang="ts">
    import { goto } from '$app/navigation';
    import { Button } from "$lib/components/ui/button";
    import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";

    let groups = [
        { id: 1, name: "Board Game Enthusiasts" },
        { id: 2, name: "Strategy Gamers Unite" },
        { id: 3, name: "Casual Gaming Club" },
    ];

    function routeToPage(route: string, replaceState = false) {
        goto(`/${route}`, { replaceState });
    }
</script>

<div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Groups</h1>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each groups as group}
            <Card>
                <CardHeader>
                    <CardTitle>{group.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Button variant="ghost" class="w-full" on:click={() => routeToPage(`group/${group.id}`)}>
                        View Group
                    </Button>
                </CardContent>
            </Card>
        {/each}
    </div>
</div>