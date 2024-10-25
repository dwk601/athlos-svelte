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
            <p class="text-xl text-muted-foreground mb-8">Details and management.</p>
    
            <div class="container mx-auto text-center">
                <div class="flex">
                    <div class="flex-1 p-4">Column 1</div>
                    <div class="flex-1 p-4">Column 2</div>
                </div>
            </div>
        </section>
    </main>
</div>

