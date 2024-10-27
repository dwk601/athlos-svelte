<script>
    import { onMount } from 'svelte';
    
    onMount(() => {
        console.log('Location Specific Page Loaded');
    });
</script>

<div class="bg-background min-h-screen flex">
    <main class="container mx-auto px-4">
        <section class="text-center mb-16">
            <h1 class="text-5xl font-bold mb-4">Location Specific</h1>
            <p class="text-xl text-muted-foreground mb-8">Details and management for a specific location.</p>
        
            <div class="flex flex-col items-center space-y-4">
                <div class="flex flex-col w-full max-w-md">
                    <label for="location-name" class="txt-lg font-semibold mb-2">Location Name</label>
                    <input
                    type="text"
                    id="location-name"
                    class="border border-gray-300 rounded-md p-2 w-full"
                    placeholder="Enter Location Name"/>
                </div>
                <div class="flex flex-col w-full max-w-md">
                    <label for="address" class="txt-lg font-semibold mb-2">Address</label>
                    <input
                    type="text"
                    id="address"
                    class="border border-gray-300 rounded-md p-2 w-full"
                    placeholder="Enter Address"/>
                </div>
                <div class="flex flex-col w-full max-w-md">
                    <label for="pin-location" class="txt-lg font-semibold mb-2">Pin Location</label>
                    <input
                    type="text"
                    id="pin-location"
                    class="border border-gray-300 rounded-md p-2 w-full"
                    placeholder="Enter Pin Location"/>
                </div>
                <button type="button" class="btn btn-secondary rounded-circle" style="width: 50px; height: 50px;">
                    <i class="fa-sharp fa-solid fa-bell"></i>
                </button>
            </div>
        </section>
    </main>
</div>

