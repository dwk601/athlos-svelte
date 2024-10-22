<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    import { Button } from '$lib/components/ui/button';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
    import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
    import { MapPin, Calendar, Users } from 'lucide-svelte';

    export let data: PageData;

    const { game, attendees }: { game: any; attendees: any[] } = data;

    // Function to check if the current date is the same as the game date
    function isGameDay(gameDate: Date): boolean {
        const today = new Date();
        return today.toDateString() === gameDate.toDateString();
    }

    // Check if it's game day
    $: isToday = isGameDay(new Date(game.date_time));

    // Assume we have the current user's ID (you'll need to implement this)
    const currentUserId = 'some-user-id';

    // Check if the current user is already checked in
    $: isCheckedIn = attendees.some(a => a.user_id === currentUserId && a.checked_in);

    function handleAttend() {
        // Add your attend logic here
        console.log(`Attending game ${game.id}`);
    }

    let checkInError = '';

    function handleCheckInSubmit() {
        return async ({ result }: { result: { type: string; data?: { message?: string } } }) => {
            if (result.type === 'success') {
                console.log('Check-in successful');
                isCheckedIn = true;
            } else if (result.type === 'failure') {
                console.error('Check-in failed:', result.data?.message);
                checkInError = result.data?.message || 'Check-in failed';
            }
        };
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
        <CardFooter class="flex justify-between">
            <Button on:click={handleAttend}>Attend Game</Button>
            <form method="POST" action="?/checkIn" use:enhance={handleCheckInSubmit}>
                <input type="hidden" name="userId" value={currentUserId} />
                <Button 
                    type="submit"
                    disabled={!isToday || isCheckedIn}
                    class={(!isToday || isCheckedIn) ? 'opacity-50 cursor-not-allowed' : ''}
                >
                    {isCheckedIn ? 'Checked In' : 'Check In'}
                </Button>
            </form>
        </CardFooter>
    </Card>
    {#if checkInError}
        <p class="text-red-500 mt-2">{checkInError}</p>
    {/if}
</div>
