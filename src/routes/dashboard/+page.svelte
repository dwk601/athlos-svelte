<script>
    import { Button } from "$lib/components/ui/button";
    import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
    import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
    import { Badge } from "$lib/components/ui/badge";
    import { Bell, Settings, Users, CircleAlert } from "lucide-svelte";
    import { Popover, PopoverContent, PopoverTrigger } from "$lib/components/ui/popover";

    let user = {
        name: "John Doe",
        avatar: "/images/user.png",
    };

    let pastGames = [
        { id: 1, name: "Chess Tournament", date: "2023-11-15" },
        { id: 2, name: "Poker Night", date: "2023-11-10" },
        { id: 3, name: "Scrabble Challenge", date: "2023-11-05" },
    ];

    let upcomingGames = [
        { id: 4, name: "Monopoly Marathon", date: "2023-12-01" },
        { id: 5, name: "Catan Championship", date: "2023-12-10" },
    ];

    let groups = [
        { id: 1, name: "Board Game Enthusiasts" },
        { id: 2, name: "Strategy Gamers Unite" },
        { id: 3, name: "Casual Gaming Club" },
    ];

    let notifications = [
        { id: 1, message: "New game invitation from Alice" },
        { id: 2, message: "Bob commented on your last game" },
        { id: 3, message: "Upcoming tournament reminder" },
    ];

    let unreadNotifications = notifications.length;
</script>

<div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">Welcome, {user.name}!</h1>
        <Popover>
            <PopoverTrigger>
                <Button variant="ghost" class="relative">
                    <Bell class="h-5 w-5" />
                    {#if unreadNotifications > 0}
                        <Badge class="absolute -top-1 -right-1 px-2 py-1 text-xs">
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
                        <div class="mb-2 p-2 hover:bg-muted rounded-md">
                            <span>{notification.message}</span>
                        </div>
                    {/each}
                    <Button variant="outline" class="w-full mt-4">
                        <Bell class="mr-2 h-4 w-4" />
                        View All Notifications
                    </Button>
                </CardContent>
            </PopoverContent>
        </Popover>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card class="md:col-span-2 lg:col-span-2">
            <CardHeader>
                <CardTitle>Upcoming Games</CardTitle>
            </CardHeader>
            <CardContent>
                {#each upcomingGames as game}
                    <div class="flex justify-between items-center mb-2">
                        <span>{game.name}</span>
                        <Badge variant="outline">{game.date}</Badge>
                    </div>
                {/each}
                <Button class="mt-4 w-full">
                    <CircleAlert class="mr-2 h-4 w-4" />
                    View All Games
                </Button>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent>
                <div class="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>
                            {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 class="text-xl font-semibold">{user.name}</h2>
                        <Button variant="outline" class="mt-2 w-full">
                            <Settings class="mr-2 h-4 w-4" />
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
                        <small class="text-muted-foreground block">{game.date}</small>
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
                <Button variant="outline" class="mt-4 w-full">
                    <Users class="mr-2 h-4 w-4" />
                    Manage Groups
                </Button>
            </CardContent>
        </Card>
    </div>
</div>