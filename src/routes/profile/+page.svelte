<script lang="ts">
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
  import { Button } from "$lib/components/ui/button";
  import { Badge } from "$lib/components/ui/badge";

  export let data;

  const { user, userGroups, userGames, userAttendance } = data;
</script>

<div class="container mx-auto p-4">
  <Card class="w-full max-w-3xl mx-auto">
    <CardHeader>
      <div class="flex items-center space-x-4">
        <Avatar class="w-20 h-20">
          <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.name}`} alt={user.name} />
          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{user.name}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div class="space-y-4">
        <section>
          <h3 class="text-lg font-semibold mb-2">Groups</h3>
          <div class="flex flex-wrap gap-2">
            {#each userGroups as group}
              <Badge variant="secondary">{group.name}</Badge>
            {/each}
          </div>
        </section>
        <section>
          <h3 class="text-lg font-semibold mb-2">Upcoming Games</h3>
          <ul class="space-y-2">
            {#each userGames as game}
              <li class="flex justify-between items-center">
                <span>{new Date(game.date_time).toLocaleString()}</span>
                <span>{game.location}</span>
                <Badge variant="outline">
                  {userAttendance.find(a => a.game_id === game.id)?.status || 'Not responded'}
                </Badge>
              </li>
            {/each}
          </ul>
        </section>
      </div>
    </CardContent>
    <CardFooter class="flex justify-center">
      <Button variant="outline" href="/profile/edit">Edit Profile</Button>
    </CardFooter>
  </Card>
</div>
