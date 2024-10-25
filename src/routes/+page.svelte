<script lang="ts">
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { goto } from '$app/navigation';
    import { Button } from "$lib/components/ui/button";
    import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
    import { Users, Calendar, Trophy } from "lucide-svelte";

    function redirectToGroups() {
        goto('/groups');
    }
    function redirectToLocationSpecific() {
        goto('/locationSpecific');
    }

    onMount(() => {
        gsap.from(".fade-in", {
            duration: 1,
            y: -50,
            opacity: 0,
            stagger: 0.2
        });
    });
</script>

<div class="bg-background min-h-screen flex items-center justify-center">
    <main class="container mx-auto px-4">
        <section class="text-center mb-16 fade-in">
            <h1 class="text-5xl font-bold mb-4">Manage Your Sports Group with Ease</h1>
            <p class="text-xl text-muted-foreground mb-8">Streamline organization, boost engagement, and elevate team performance</p>
            <Button size="lg" on:click={redirectToGroups}>Get Started</Button>
            <Button size="lg" on:click={redirectToLocationSpecific}>Location Specific</Button>
        </section>

        <section class="grid md:grid-cols-2 gap-8">
            <Card class="fade-in">
                <CardHeader>
                    <Users class="w-12 h-12 text-primary mb-2" />
                    <CardTitle>Team Management</CardTitle>
                </CardHeader>
                <CardContent>Easily manage rosters, roles, and communications within your sports group.</CardContent>
            </Card>
            <Card class="fade-in">
                <CardHeader>
                    <Calendar class="w-12 h-12 text-primary mb-2" />
                    <CardTitle>Event Scheduling</CardTitle>
                </CardHeader>
                <CardContent>Coordinate practices, games, and team events with an intuitive calendar system.</CardContent>
            </Card>
        </section>
    </main>
</div>
