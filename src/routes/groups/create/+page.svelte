<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import { Textarea } from "$lib/components/ui/textarea";
    import { Alert, AlertDescription, AlertTitle } from "$lib/components/ui/alert";
    import { toast, Toaster } from "svelte-sonner";
    import { CircleAlert } from "lucide-svelte";
    import { groups } from "../../data";
    import { v4 as uuidv4 } from 'uuid';

    let name = "";
    let description = "";
    let error = "";
    let success = false;

    function createGroup() {
        error = "";
        success = false;

        if (!name.trim()) {
            error = "Group name is required";
            return;
        }

        // Add the new group to the groups array
        groups.push({
            id: Date.now(), // Use a numeric ID based on the current timestamp
            name,
            description,
            created_by: '', // Add appropriate user ID
            created_at: new Date(),
            updated_at: new Date()
        });

        success = true;
        toast.success("Group created successfully!");
    }

    $: if (success) {
        name = "";
        description = "";
    }
</script>

<div class="container mx-auto p-4 max-w-3xl">
    <h1 class="text-2xl font-bold mb-4">Create a New Group</h1>

    <form on:submit|preventDefault={createGroup} class="space-y-4">
        <div class="space-y-2">
            <Label for="name">Group Name</Label>
            <Input type="text" id="name" bind:value={name} placeholder="Enter group name" />
        </div>

        <div class="space-y-2">
            <Label for="description">Description</Label>
            <Textarea id="description" bind:value={description} placeholder="Enter group description" />
        </div>

        {#if error}
            <Alert variant="destructive">
                <CircleAlert class="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        {/if}

        <Button type="submit" class="w-full">Create Group</Button>
    </form>
</div>

<Toaster />