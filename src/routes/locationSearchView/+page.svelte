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
                        <div class="border border-gray-300 rounded-lg p-6 shadow-lg">
                            <h2>View Locations</h2>
                            <button type="button" class="btn btn-primary border border-gray-200 rounded-lg p-2 shadow-sm w-full mb-4">Location 1</button>
                            <button type="button" class="btn btn-primary border border-gray-200 rounded-lg p-2 shadow-sm w-full mb-4">Location 2</button>
                            <button type="button" class="btn btn-primary border border-gray-200 rounded-lg p-2 shadow-sm w-full mb-4">Location 3</button>
                            <button type="button" class="btn btn-primary border border-gray-200 rounded-lg p-2 shadow-sm w-full mb-4">Location 4</button>
                            <button type="button" class="btn btn-primary border border-gray-200 rounded-lg p-2 shadow-sm w-full mb-4">Location 5</button>
                        </div>
                    </div>
                    
                    <div class="flex-1 p-4">
                        <div class="border border-gray-300 rounded-lg p-6 shadow-lg">
                            <h2>Create Location</h2>
                            <div class="flex flex-col">
                                <input
                                type="text"
                                id="new-location"
                                class="border border-gray-300 rounded-md p-2 w-full"
                                placeholder="Enter New Location"/>
                            </div>
                            <button type="button" class="btn btn-primary border border-gray-200 rounded-lg p-2 shadow-sm mt-4">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>

