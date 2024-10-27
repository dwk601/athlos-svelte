<script lang="ts">
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  let email = '';
  let password = '';

  function handleSubmit() {
    // TODO: Implement actual login logic
    console.log('Login attempt:', { email, password });
    alert('Login functionality not implemented. This is a frontend-only demo.');
  }

  onMount(() => {
    const card = document.querySelector('.card');
    gsap.fromTo(card, 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 0.6 }
    );
  });
</script>

<div class="flex items-center justify-center min-h-screen">
  <Card class="w-[350px] card">
    <CardHeader>
      <CardTitle>Login</CardTitle>
      <CardDescription>Enter your credentials to access your account.</CardDescription>
    </CardHeader>
    <CardContent>
      <form on:submit|preventDefault={handleSubmit}>
        <div class="grid w-full items-center gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="Your email" bind:value={email} required />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="password">Password</Label>
            <Input id="password" type="password" placeholder="Your password" bind:value={password} required />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button type="submit">Login</Button>
    </CardFooter>
  </Card>
</div>