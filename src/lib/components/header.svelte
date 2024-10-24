<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import favicon from "$lib/images/favicon.png";
    import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "$lib/components/ui/dropdown-menu";
    import { User } from "lucide-svelte";

    // Placeholder for auth state
    let isLoggedIn = true; // Change this to false to see the Login/Sign Up buttons
</script>

<header class="bg-background text-foreground p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
            <a href="/groups">
                <img src={favicon} alt="Logo" class="h-8 w-auto mr-2" />
            </a>
        </div>
        <div class="space-x-2">
            {#if isLoggedIn}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant="ghost" size="icon">
                            <User class="h-5 w-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Dashboard</DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            {:else}
                <Button variant="outline">Login</Button>
                <Button>Sign Up</Button>
            {/if}
        </div>
    </div>
</header>
