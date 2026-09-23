<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		/** Marks this eyebrow as the nav scroll-spy anchor for its section. */
		navHeading?: boolean;
		children: Snippet;
	}

	let { class: className = '', navHeading = false, children }: Props = $props();
</script>

<span
	class="inline-flex items-center gap-3 text-xs tracking-[0.28em] text-ember-600 uppercase {className}"
	data-nav-heading={navHeading ? '' : undefined}
>
	<span class="eyebrow-line h-px w-8 bg-sunset" aria-hidden="true"></span>
	{@render children()}
</span>
