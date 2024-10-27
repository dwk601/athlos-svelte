<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log('Create Location Page Loaded');
    });
</script>

<div class="bg-background min-h-screen flex">
    <main class="container mx-auto px-4">
        <section class="text-center mb-16">
            <h1 class="text-5xl font-bold mb-4">Create Location</h1>
            <p class="text-xl text-muted-foreground mb-8">Enter details to create a new location.</p>
        
            <div class="flex flex-col items-center space-y-4">
                <div class="flex flex-col w-full max-w-md">
                    <label for="location-name" class="text-lg font-semibold mb-2">Location Name</label>
                    <input
                    type="text"
                    id="location-name"
                    class="border border-gray-300 rounded-md p-2 w-full"
                    placeholder="Enter Location Name"/>
                </div>
                <div class="flex flex-col w-full max-w-md">
                    <label for="location-desc" class="text-lg font-semibold mb-2">Location Description</label>
                    <textarea
                    id="location-desc"
                    class="border border-gray-300 rounded-md p-2 w-full"
                    placeholder="Enter Location Description"></textarea>
                </div>
                <div class="flex flex-col w-full max-w-md">
                    <label for="location-address" class="text-lg font-semibold mb-2">Location Address</label>
                    <input
                    type="text"
                    id="location-address"
                    class="border border-gray-300 rounded-md p-2 w-full"
                    placeholder="Enter Location Address"/>
                </div>
                <div class="flex flex-col w-full max-w-md">
                    <label for="management-email" class="text-lg font-semibold mb-2">Management Email</label>
                    <input
                    type="email"
                    id="management-email"
                    class="border border-gray-300 rounded-md p-2 w-full"
                    placeholder="Enter Management Email"/>
                </div>
                <div class="flex justify-center mt-6 w-full max-w-md">
                    <div class="border border-black rounded-md p-2 w-full bg-black">
                        <button type="button" class="w-full text-white font-semibold py-2 px-4 rounded-md">
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>
