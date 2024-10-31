<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import favicon from '$lib/images/favicon.png';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import { User } from 'lucide-svelte';

	// Placeholder for auth state
	let isLoggedIn = false; // Change this to false to see the Login/Sign Up buttons
</script>

<header class="bg-background p-4 text-foreground shadow-md">
	<div class="container mx-auto flex items-center justify-between">
		<div class="flex items-center">
			<a href="/">
				<img src={favicon} alt="Logo" class="mr-2 h-8 w-auto" />
			</a>
		</div>
		<div class="space-x-2">
			<!-- {#if isLoggedIn} -->
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Button variant="ghost" size="icon">
						<User class="h-5 w-5" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem><a href="/dashboard">Dashboard</a></DropdownMenuItem>
					<DropdownMenuItem>
						<a href="/profile">Profile</a>
					</DropdownMenuItem>
					<DropdownMenuItem>Logout</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<!-- {:else} -->
			<Button variant="outline" href="/login">Login</Button>
			<Button href="/signup">Sign Up</Button>
			<!-- {/if} -->
		</div>
	</div>
</header>
