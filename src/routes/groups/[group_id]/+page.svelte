<script lang="ts" context="module">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { ScrollArea } from "$lib/components/ui/scroll-area";
    import { Drawer, DrawerContent, DrawerTrigger } from "$lib/components/ui/drawer";
    import { Avatar, AvatarImage, AvatarFallback } from "$lib/components/ui/avatar";
    import { MessageSquare, Users, Calendar } from "lucide-svelte";

    export async function load({ params }: { params: { group_id: string } }) {
        const { group_id } = params;
        // Fetch group data based on group_id or use example data
        const group = {
            id: group_id,
            name: `Group ${group_id}`,
            description: `Description for Group ${group_id}`,
            members: ["Alice", "Bob", "Charlie", "David", "Eva"],
            messages: [
                { user: "Alice", text: "Hello everyone!" },
                { user: "Bob", text: "Hi Alice, how are you?" },
                { user: "Charlie", text: "Hey folks, what's up?" },
            ],
            upcomingGames: [
                { name: "Chess Tournament", date: "2023-06-15" },
                { name: "Poker Night", date: "2023-06-20" },
                { name: "Board Game Marathon", date: "2023-06-25" },
            ],
        };
        return { group };
    }
</script>

<script lang="ts">
    interface Group {
        id: string;
        name: string;
        description: string;
        members: string[];
        messages: { user: string; text: string }[];
        upcomingGames: { name: string; date: string }[];
    }

    interface Data {
        group: Group;
    }

    export let data: Data;
    const { group } = data;

    let newMessage = "";
    let messages = group.messages;
    let members = group.members;
    let upcomingGames = group.upcomingGames;

    function sendMessage() {
        if (newMessage.trim()) {
            messages = [...messages, { user: "You", text: newMessage.trim() }];
            newMessage = "";
        }
    }

    import { onMount } from "svelte";

    onMount(() => {
        const chatArea = document.getElementById("chat-area");
        if (chatArea) {
            chatArea.scrollTop = chatArea.scrollHeight;
        }
    });
</script>

<div class="flex h-screen">
    <Drawer>
        <DrawerTrigger>
            <Button variant="outline" class="absolute top-4 left-4">
                <Users class="h-4 w-4 mr-2" />
                Members
            </Button>
        </DrawerTrigger>
        <DrawerContent>
            <div class="p-4">
                <h2 class="text-lg font-semibold mb-4">Group Members</h2>
                <ScrollArea class="h-[400px]">
                    {#each members as member}
                        <div class="flex items-center space-x-4 mb-4">
                            <Avatar>
                                <AvatarImage src="/images/user.png" alt={member} />
                                <AvatarFallback>{member[0]}</AvatarFallback>
                            </Avatar>
                            <span>{member}</span>
                        </div>
                    {/each}
                </ScrollArea>
            </div>
        </DrawerContent>
    </Drawer>

    <div class="flex-1 flex flex-col">
        <ScrollArea class="flex-1 p-4" id="chat-area">
            {#each messages as message}
                <div class="mb-4">
                    <strong>{message.user}:</strong>
                    {message.text}
                </div>
            {/each}
        </ScrollArea>
        <div class="p-4 border-t">
            <form on:submit|preventDefault={sendMessage} class="flex space-x-2">
                <Input type="text" placeholder="Type a message..." bind:value={newMessage} class="flex-1" />
                <Button type="submit">
                    <MessageSquare class="h-4 w-4 mr-2" />
                    Send
                </Button>
            </form>
        </div>
    </div>

    <Drawer>
        <DrawerTrigger>
            <Button variant="outline" class="absolute top-4 right-4">
                <Calendar class="h-4 w-4 mr-2" />
                Upcoming Games
            </Button>
        </DrawerTrigger>
        <DrawerContent>
            <div class="p-4">
                <h2 class="text-lg font-semibold mb-4">Upcoming Games</h2>
                <ScrollArea class="h-[400px]">
                    {#each upcomingGames as game}
                        <Button variant="outline" class="w-full mb-4 justify-start">
                            <div>
                                <div class="font-semibold">{game.name}</div>
                                <div class="text-sm text-muted-foreground">{game.date}</div>
                            </div>
                        </Button>
                    {/each}
                </ScrollArea>
            </div>
        </DrawerContent>
    </Drawer>
</div>