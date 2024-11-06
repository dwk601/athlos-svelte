<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';

	export let group;
</script>

<Card>
	<CardHeader>
		<CardTitle>Group Information</CardTitle>
	</CardHeader>
	<CardContent>
		<p>{group.description}</p>
	</CardContent>
</Card>
