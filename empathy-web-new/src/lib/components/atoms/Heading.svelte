<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		level?: 1 | 2 | 3;
		size?: 'sm' | 'md' | 'lg' | 'xl';
		class?: string;
		children: Snippet;
	}

	let { level = 2, size = 'lg', class: className = '', children }: Props = $props();

	const sizes = {
		sm: 'text-2xl sm:text-3xl',
		md: 'text-3xl sm:text-4xl',
		lg: 'text-4xl sm:text-5xl lg:text-6xl',
		xl: 'text-5xl sm:text-7xl lg:text-8xl'
	};

	const classes = $derived(
		`font-display leading-[1.05] text-balance text-bark-900 ${sizes[size]} ${className}`
	);
</script>

<svelte:element this={`h${level}`} class={classes}>
	{@render children()}
</svelte:element>
