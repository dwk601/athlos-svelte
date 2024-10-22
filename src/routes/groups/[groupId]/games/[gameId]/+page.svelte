<script lang="ts">
    import type { PageData } from './$types';
    import { Button } from '$lib/components/ui/button';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
    import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
    import { MapPin, Calendar, Users } from 'lucide-svelte';

    export let data: PageData;

    const { game, attendees }: { game: any; attendees: any[] } = data;

    function handleAttend() {
        // Add your attend logic here
        console.log(`Attending game ${game.id}`);
    }
</script>

<div class="container mx-auto px-4 py-8">
    <Card>
        <CardHeader>
            <CardTitle>Game Details</CardTitle>
            <CardDescription>
                <div class="flex items-center space-x-2">
                    <MapPin class="h-4 w-4" />
                    <span>{game.location}</span>
                </div>
                <div class="flex items-center space-x-2 mt-2">
                    <Calendar class="h-4 w-4" />
                    <span>{new Date(game.date_time).toLocaleString()}</span>
                </div>
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div class="flex items-center space-x-2 mb-4">
                <Users class="h-4 w-4" />
                <span>Attendees: {attendees.length}</span>
            </div>
            <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {#each attendees as attendee}
                    <div class="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage alt={attendee.user?.name} />
                            <AvatarFallback>{attendee.user?.name?.charAt(0) ?? ''}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p class="text-sm font-medium">{attendee.user?.name}</p>
                            <p class="text-xs text-muted-foreground">{attendee.status}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </CardContent>
        <CardFooter>
            <Button on:click={handleAttend}>Attend Game</Button>
        </CardFooter>
    </Card>
</div>
