<script lang="ts">
    import { Button } from "$lib/components/ui/button";
</script>

<header class="bg-background text-foreground p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
            <a href="/dashboard">
                <img src="" alt="Logo" class="h-8 w-auto mr-2" />
            </a>
        </div>
        <div class="space-x-2">
            <Button variant="outline">Login</Button>
            <Button>Sign Up</Button>
        </div>
    </div>
</header>