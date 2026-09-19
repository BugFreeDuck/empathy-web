<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<span
	class="inline-flex items-center gap-3 text-xs tracking-[0.28em] text-ember-600 uppercase {className}"
>
	<span class="eyebrow-line h-px w-8 bg-sunset" aria-hidden="true"></span>
	{@render children()}
</span>
