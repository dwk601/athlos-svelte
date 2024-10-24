<script lang="ts">
  import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Avatar, AvatarImage, AvatarFallback } from "$lib/components/ui/avatar";
  import { enhance } from "$app/forms";
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  export let data: { user: { name: string; email: string; icon: string } };

  let { user } = data;
  let iconPreview: string = user.icon;

  function handleIconChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        iconPreview = e.target?.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  function handleSubmit() {
    return async ({ update }: { update: () => Promise<void> }) => {
      await update();
    };
  }

  function getInitials(name: string): string {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  }

  onMount(() => {
    const sections = document.querySelectorAll('.section');
    gsap.fromTo(sections, 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.2 }
    );
  });
</script>

<div class="container mx-auto p-4">
  <Card class="w-full max-w-3xl mx-auto section">
    <CardHeader>
      <CardTitle>Edit Profile</CardTitle>
    </CardHeader>
    <CardContent>
      <form method="POST" use:enhance={handleSubmit} enctype="multipart/form-data">
        <div class="space-y-6">
          <div class="flex flex-col items-center space-y-4 section">
            <Avatar class="w-32 h-32">
              <AvatarImage src={iconPreview} alt={user.name} />
              <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
            </Avatar>
            <div>
              <Label for="icon" class="cursor-pointer inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                Change Icon
                <Input type="file" id="icon" name="icon" accept="image/*" on:change={handleIconChange} class="hidden" />
              </Label>
            </div>
          </div>
          <div class="max-w-md mx-auto w-full section">
            <Label for="name">Name</Label>
            <Input type="text" id="name" name="name" value={user.name} required />
          </div>
          <div class="max-w-md mx-auto w-full section">
            <Label for="email">Email</Label>
            <Input type="email" id="email" name="email" value={user.email} required />
          </div>
        </div>
        <CardFooter class="px-0 pt-6 section">
          <Button type="submit" class="w-full max-w-md mx-auto">Save Changes</Button>
        </CardFooter>
      </form>
    </CardContent>
  </Card>
</div>
