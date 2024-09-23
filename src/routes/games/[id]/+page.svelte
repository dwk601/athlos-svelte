<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import { page } from '$app/stores';
    import { Calendar, MapPin, Users } from "lucide-svelte";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
    import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
    import { Button } from "$lib/components/ui/button";

    const games = [
        { id: 1, name: '축구', date: '2024-09-15' },
        { id: 2, name: '다른거', date: '2024-09-18' },
        { id: 3, name: '또다른거', date: '2024-09-20' }
    ];

    const attenders = [
        { name: "사용자 1", avatar: "/images/user.png" },
        { name: "사용자 2", avatar: "/images/user.png" },
        { name: "사용자 3", avatar: "/images/user.png" },
    ];
    const location = "Provo, UT";

    let game: { id: number; name: string; date: string; } | undefined;

    $: {
        const unsubscribe = page.subscribe(($page) => {
            const gameId = parseInt($page.params.id);
            game = games.find(g => g.id === gameId);
        });
        onDestroy(() => unsubscribe());
    }
</script>

{#if game}
    <div class="container mx-auto px-4 py-8">
        <Card class="w-full max-w-3xl mx-auto mb-8">
            <CardHeader>
                <CardTitle class="text-3xl font-bold">{game.name}</CardTitle>
                <CardDescription class="text-lg">게임 세부 정보</CardDescription>
            </CardHeader>
            <CardContent>
                <div class="space-y-6">
                    <div class="flex items-center space-x-2">
                        <Calendar class="w-5 h-5 text-muted-foreground" />
                        <span class="text-lg">{game.date}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <MapPin class="w-5 h-5 text-muted-foreground" />
                        <span class="text-lg">{location}</span>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold mb-3 flex items-center">
                            <Users class="w-5 h-5 mr-2" />
                            참가자
                        </h3>
                        <div class="flex flex-wrap gap-4">
                            {#each attenders as attender}
                                <div class="flex flex-col items-center">
                                    <Avatar class="w-12 h-12">
                                        <AvatarImage src={attender.avatar} alt={attender.name} />
                                        <AvatarFallback>{attender.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <span class="text-sm mt-1">{attender.name}</span>
                                </div>
                            {/each}
                        </div>
                    </div>
                    <Button class="w-full">참가 신청</Button>
                </div>
            </CardContent>
        </Card>
    </div>
{:else}
    <p class="text-center text-lg">게임을 찾을 수 없습니다.</p>
{/if}