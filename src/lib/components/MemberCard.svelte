<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';

	export let member;
</script>

<div class="flex items-center space-x-4">
	<Avatar>
		<AvatarImage alt={member.name} />
		<AvatarFallback>{(member.name ?? '').charAt(0)}</AvatarFallback>
	</Avatar>
	<div>
		<p class="text-sm font-medium">{member.name}</p>
		<p class="text-xs text-muted-foreground">{member.role}</p>
	</div>
</div>
