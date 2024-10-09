<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import {signIn, signOut} from "@auth/sveltekit/client"
    import { page } from "$app/stores"
    console.log($page.data.session)
    // $page.data.session -> {user: {email, id, name, provider, role, username}}
</script>

<header class="bg-background text-foreground p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
            <a href="/dashboard">
                <img src="" alt="Logo" class="h-8 w-auto mr-2" />
            </a>
        </div>
        <div class="space-x-2">
            {#if $page.data.session}
                <Button on:click={() => signOut()}>Logout</Button>
                <p>You are logged in</p>
            {:else}
            <Button variant="outline" on:click={()=>{signIn("github")}}>Login</Button>
            <Button>Sign Up</Button>
            {/if}
            
        </div>
    </div>
</header>