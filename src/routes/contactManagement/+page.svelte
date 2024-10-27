<script>
    import { onMount } from 'svelte';
    
    onMount(() => {
        console.log('Contact Management Page Loaded');
    });
</script>

<div class="bg-background min-h-screen flex">
    <main class="container mx-auto px-4">
        <section class="text-center mb-16">
            <h1 class="text-5xl font-bold mb-4">Contact Management</h1>
            <p class="text-xl text-muted-foreground mb-8">Manage and reach out to your contacts.</p>
        
            <div class="flex flex-col items-center space-y-4">
                <div class="flex flex-col w-full max-w-md">
                    <label for="contact-name" class="text-lg font-semibold mb-2">Name</label>
                    <input
                    type="text"
                    id="contact-name"
                    class="border border-gray-300 rounded-md p-2 w-full"
                    placeholder="Enter Contact Name"/>
                </div>
                <div class="flex flex-col w-full max-w-md">
                    <label for="contact-email" class="text-lg font-semibold mb-2">Email</label>
                    <input
                    type="email"
                    id="contact-email"
                    class="border border-gray-300 rounded-md p-2 w-full"
                    placeholder="Enter Email Address"/>
                </div>
                <div class="flex flex-col w-full max-w-md">
                    <label for="contact-note" class="text-lg font-semibold mb-2">Note</label>
                    <textarea
                    id="contact-note"
                    class="border border-gray-300 rounded-md p-2 w-full"
                    placeholder="Enter Note"></textarea>
                </div>
                <div class="flex justify-center mt-6 w-full max-w-md">
                    <div class="border border-black rounded-md p-2 w-full bg-black">
                        <button type="button" class="w-full text-white font-semibold py-2 px-4 rounded-md">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>
