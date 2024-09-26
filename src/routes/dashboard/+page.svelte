<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
    import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
    import { Badge } from '$lib/components/ui/badge';
    import { Bell, Settings, Users, CircleAlert } from 'lucide-svelte';
    import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
    import { goto } from '$app/navigation';

    export let data;

    let { user, notifications, upcomingGames, pastGames, groups } = data;

    function routeToPage(route: string, replaceState = false) {
        goto(`/${route}`, { replaceState });
    }

    let unreadNotifications = notifications.length;
</script>

<div class="container mx-auto p-4">
    <div class="mb-6 flex items-center justify-between">
        <h1 class="text-3xl font-bold">Welcome, {user.firstName}!</h1>
        <Popover>
            <PopoverTrigger>
                <Button variant="ghost" class="relative">
                    <Bell class="h-5 w-5" />
                    {#if unreadNotifications > 0}
                        <Badge class="absolute -right-1 -top-1 px-2 py-1 text-xs">
                            {unreadNotifications}
                        </Badge>
                    {/if}
                </Button>
            </PopoverTrigger>
            <PopoverContent class="w-80">
                <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                    {#each notifications as notification}
                        <div class="mb-2 rounded-md p-2 hover:bg-muted">
                            <span>{notification.message}</span>
                        </div>
                    {/each}
                    <Button variant="outline" class="mt-4 w-full">
                        <Bell class="mr-2 h-4 w-4" />
                        View All Notifications
                    </Button>
                </CardContent>
            </PopoverContent>
        </Popover>
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card class="md:col-span-2 lg:col-span-2">
            <CardHeader>
                <CardTitle>Upcoming Games</CardTitle>
            </CardHeader>
            <CardContent>
                {#each upcomingGames as game}
                    <Button variant="ghost" class="mb-2 flex items-center justify-between w-full" on:click={() => routeToPage(`games/${game.id}`)}>
                        <span>{game.name}</span>
                        <Badge variant="outline">{game.date}</Badge>
                    </Button>
                {/each}
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent>
                <div class="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src={user.avatar} alt={user.firstName} />
                        <AvatarFallback>
                            {user.firstName
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 class="text-xl font-semibold">{user.firstName}</h2>
                        <Button
                            variant="outline"
                            class="mt-2 w-full"
                            on:click={() => routeToPage('dashboard/profile')}
                        >
                            Edit Profile
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Past Games</CardTitle>
            </CardHeader>
            <CardContent>
                {#each pastGames as game}
                    <div class="mb-2">
                        <span>{game.name}</span>
                        <small class="block text-muted-foreground">{game.date}</small>
                    </div>
                {/each}
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Groups</CardTitle>
            </CardHeader>
            <CardContent>
                {#each groups as group}
                    <div class="mb-2">
                        <span>{group.name}</span>
                    </div>
                {/each}
                <Button variant="outline" class="mt-4 w-full" on:click={() => routeToPage('group')}>
                    <Users class="mr-2 h-4 w-4" />
                    Go to Groups
                </Button>
            </CardContent>
        </Card>
    </div>
</div>