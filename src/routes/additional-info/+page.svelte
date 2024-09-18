<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import { Avatar, AvatarImage, AvatarFallback } from "$lib/components/ui/avatar";
    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "$lib/components/ui/card";
    import { CircleAlert } from "lucide-svelte";

    let firstName = "";
    let lastName = "";
    let profileImage: string | null = null;

    function handleImageUpload(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profileImage = e.target?.result as string;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    function handleSubmit() {
        // Handle form submission logic here
        console.log({ firstName, lastName, profileImage });
    }
</script>

<Card class="w-full max-w-md mx-auto mt-8">
    <CardHeader>
        <CardTitle>User Information</CardTitle>
        <CardDescription>Please provide your personal details. Only First Name is required.</CardDescription>
    </CardHeader>
    <CardContent>
        <form on:submit|preventDefault={handleSubmit} class="space-y-4">
            <div class="space-y-2">
                <Label for="firstName">First Name *</Label>
                <Input id="firstName" bind:value={firstName} placeholder="Enter your first name" required />
            </div>
            <div class="space-y-2">
                <Label for="lastName">Last Name (Optional)</Label>
                <Input id="lastName" bind:value={lastName} placeholder="Enter your last name" />
            </div>
            <div class="space-y-2">
                <Label for="profileImage">Profile Image (Optional)</Label>
                <Input id="profileImage" type="file" accept="image/*" on:change={handleImageUpload} class="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90" />
            </div>
            {#if profileImage}
                <div class="flex items-center space-x-4">
                    <Avatar class="w-16 h-16">
                        <AvatarImage src={profileImage} alt="Profile" />
                        <AvatarFallback>{firstName[0]}{lastName[0]}</AvatarFallback>
                    </Avatar>
                    <span class="text-sm text-muted-foreground">Preview</span>
                </div>
            {/if}
			{#if !firstName}
				<div class="flex justify-center mt-4">
					<div class="inline-flex items-center justify-center p-4 bg-yellow-100 text-yellow-800 rounded-md">
						<CircleAlert class="mr-2 h-4 w-4" />
						<p class="text-sm">Please fill in the required First Name field.</p>
					</div>
				</div>
			{/if}
        </form>
    </CardContent>
    <CardFooter>
        <Button on:click={handleSubmit} class="w-full">Save Information</Button>
    </CardFooter>
</Card>