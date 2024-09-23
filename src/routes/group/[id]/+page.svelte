<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import { Input } from '$lib/components/ui/input';
    import { ScrollArea } from '$lib/components/ui/scroll-area';
    import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
    import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
    import { Card, CardHeader, CardTitle, CardContent } from '$lib/components/ui/card';
    import { Send, Users, Calendar } from 'lucide-svelte';

    let messages = [
        { user: '동욱', text: 'Hey everyone! Ready for the next game?' },
        { user: 'Bob', text: "Absolutely! Can't wait!" },
        { user: '준', text: 'What time are we meeting?' }
    ];

    let newMessage = '';

    let groupMembers = [
        { name: '동욱', avatar: '/images/user.png' },
        { name: 'Bob', avatar: '/images/user.png' },
        { name: '준', avatar: '/images/user.png' },
        { name: 'David', avatar: '/images/user.png' }
    ];

    let upcomingGames = [
        { id: 1, name: '축구', date: '2024-09-15' },
        { id: 2, name: '다른거', date: '2024-09-18' },
        { id: 3, name: '또다른거', date: '2024-09-20' }
    ];

    function sendMessage() {
        if (newMessage.trim()) {
            messages = [...messages, { user: 'You', text: newMessage.trim() }];
            newMessage = '';
        }
    }
</script>

<div class="flex h-screen bg-background">
    <Sheet>
        <SheetTrigger>
            <Button variant="outline" class="lg:hidden fixed top-4 left-4 z-10">
                <Users class="h-4 w-4" />
            </Button>
        </SheetTrigger>
        <SheetContent side="left" class="w-[300px] sm:w-[400px] mt-16 lg:mt-0">
            <nav class="space-y-4">
                <h2 class="text-lg font-semibold">Group Members</h2>
                {#each groupMembers as member}
                    <div class="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback>{member.name[0]}</AvatarFallback>
                        </Avatar>
                        <span>{member.name}</span>
                    </div>
                {/each}
            </nav>
        </SheetContent>
    </Sheet>

    <aside class="hidden lg:block w-1/4 p-4 border-r border-border mt-16 lg:mt-0">
        <h2 class="text-lg font-semibold mb-4">Group Members</h2>
        <ScrollArea class="h-[calc(100vh-8rem)]">
            {#each groupMembers as member}
                <div class="flex items-center space-x-4 mb-4">
                    <Avatar>
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <span>{member.name}</span>
                </div>
            {/each}
        </ScrollArea>
    </aside>

    <main class="flex-1 p-4 flex flex-col">
        <ScrollArea class="flex-1 mb-4">
            {#each messages as message}
                <div class="mb-4">
                    <strong>{message.user}:</strong>
                    {message.text}
                </div>
            {/each}
        </ScrollArea>
        <div class="fixed bottom-0 left-0 right-0 p-4 bg-background flex space-x-2">
            <Input type="text" placeholder="Type a message..." bind:value={newMessage} on:keydown={(e) => e.key === "Enter" && sendMessage()} />
            <Button on:click={sendMessage}>
                <Send class="h-4 w-4" />
            </Button>
        </div>
    </main>

    <Sheet>
        <SheetTrigger>
            <Button variant="outline" class="fixed top-4 right-4 z-10">
                <Calendar class="h-4 w-4" />
            </Button>
        </SheetTrigger>
        <SheetContent side="right" class="w-[300px] sm:w-[400px] mt-16 lg:mt-0">
            <h2 class="text-lg font-semibold mb-4">Upcoming Games</h2>
            <ScrollArea class="h-[calc(100vh-8rem)]">
                {#each upcomingGames as game}
                    <Card class="mb-4">
                        <CardHeader>
                            <CardTitle>{game.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Date: {game.date}</p>
                        </CardContent>
                    </Card>
                {/each}
            </ScrollArea>
        </SheetContent>
    </Sheet>
</div>