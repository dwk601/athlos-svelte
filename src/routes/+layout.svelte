<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		<slot></slot>
	</main>
	<Footer />
</div>
