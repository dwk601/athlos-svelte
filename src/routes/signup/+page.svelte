<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import { Input } from '$lib/components/ui/input';
    import { Label } from '$lib/components/ui/label';
    import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '$lib/components/ui/card';
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';

    onMount(() => {
        const card = document.querySelector('.card');
        gsap.fromTo(card, 
            { opacity: 0, y: -20 }, 
            { opacity: 1, y: 0, duration: 0.6 }
        );
    });
</script>

<div class="container mx-auto p-4 flex justify-center items-center min-h-screen">
    <Card class="w-full max-w-md card">
        <CardHeader>
            <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
            <form class="space-y-4">
                <div class="space-y-2">
                    <Label for="name">Name</Label>
                    <Input id="name" type="text" placeholder="Enter your name" required />
                </div>
                <div class="space-y-2">
                    <Label for="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div class="space-y-2">
                    <Label for="password">Password</Label>
                    <Input id="password" type="password" placeholder="Enter your password" required />
                </div>
                <div class="space-y-2">
                    <Label for="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" placeholder="Confirm your password" required />
                </div>
                <Button type="submit" class="w-full">Sign Up</Button>
            </form>
        </CardContent>
        <CardFooter class="text-center">
            <p>Already have an account? <a href="/login" class="text-blue-500">Log In</a></p>
        </CardFooter>
    </Card>
</div>