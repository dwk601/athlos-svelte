<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import { Avatar, AvatarImage, AvatarFallback } from "$lib/components/ui/avatar";
	import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "$lib/components/ui/card";
	import { Camera } from "lucide-svelte";;

	export let data;

	let firstName = "";
	let lastName = "";
	let profilePicture = "";

	function handleSubmit() {
		// Handle form submission
		console.log("Profile updated", { firstName, lastName, profilePicture });
	}

	function handleFileChange(event: Event) {
		const target = event.target as HTMLInputElement;
		const file = target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				profilePicture = e.target?.result as string;
			};
			reader.readAsDataURL(file);
		}
	}
</script>

<Card class="w-full max-w-md mx-auto mt-8">
	<CardHeader>
		<CardTitle>Edit Profile</CardTitle>
		<CardDescription>Update your personal information</CardDescription>
	</CardHeader>
	<CardContent>
		<form on:submit|preventDefault={handleSubmit} class="space-y-6">
			<div class="flex flex-col items-center space-y-4">
				<Avatar class="w-32 h-32">
					<AvatarImage src={profilePicture} alt="Profile picture" />
					<AvatarFallback>User</AvatarFallback>
				</Avatar>
				<Label for="picture-upload" class="cursor-pointer">
					<div class="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary">
						<Camera size={16} />
						<span>Change picture</span>
					</div>
				</Label>
				<Input id="picture-upload" type="file" accept="image/*" class="hidden" on:change={handleFileChange} />
			</div>
			<div class="space-y-2">
				<Label for="firstName">First Name</Label>
				<Input id="firstName" bind:value={firstName} placeholder="Enter your first name" />
			</div>
			<div class="space-y-2">
				<Label for="lastName">Last Name</Label>
				<Input id="lastName" bind:value={lastName} placeholder="Enter your last name" />
			</div>
		</form>
	</CardContent>
	<CardFooter>
		<Button on:click={handleSubmit} class="w-full">Save Changes</Button>
	</CardFooter>
</Card>
