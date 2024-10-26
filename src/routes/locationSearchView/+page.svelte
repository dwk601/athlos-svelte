<script>
    import { onMount } from 'svelte';
    
    onMount(() => {
        console.log('Location Search View Loaded');
    });
</script>

<div class="bg-background min-h-screen flex">
    <main class="container mx-auto px-4">
        <section class="text-center mb-16">
            <h1 class="text-5xl font-bold mb-4">Location Search View</h1>
            <p class="text-xl text-muted-foreground mb-8">See and Set Locations</p>
    
            <div class="container mx-auto text-center">
                <div class="flex">
                    <div class="flex-1 p-4">
                        <a href="view-location" class="bg-background min-h-64 flex items-center justify-center cursor-pointer border border-gray-300 rounded-lg shadow-lg">
                            <h1 class="text-xl font-bold">View Location</h1>
                        </a> 
                    </div>
                    
                    <div class="flex-1 p-4">
                        <a href="create-location" class="bg-background min-h-64 flex items-center justify-center cursor-pointer border border-gray-300 rounded-lg shadow-lg">
                            <h1 class="text-xl font-bold">Create Location</h1>
                        </a> 
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>

