<script lang="ts">
	import favicon from '$lib/images/favicon.png';
</script>

<footer class="bg-background p-4 text-foreground shadow-md">
	<div class="container mx-auto flex flex-col items-center justify-center">
		<div class="mb-2 flex items-center">
			<img src="{favicon}" alt="Logo" class="mr-2 h-8 w-auto" />
			<span class="text-sm">&copy; {new Date().getFullYear()} Athlos. All rights reserved.</span>
		</div>
		<div class="space-x-2">
			<a href="/privacy-policy" class="text-sm hover:underline">Privacy Policy</a>
			<a href="/terms-of-service" class="text-sm hover:underline">Terms of Service</a>
		</div>
	</div>
</footer>
