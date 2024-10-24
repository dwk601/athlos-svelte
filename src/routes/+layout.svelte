<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { afterNavigate } from '$app/navigation';

	function animate() {
		gsap.from('main', { autoAlpha: 1, scale: 0.95, duration: 0.3, ease: 'linear' });
	}

	onMount(() => {
		animate();
	});

	afterNavigate(() => {
		animate();
	});
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		<slot></slot>
	</main>
	<Footer />
</div>
