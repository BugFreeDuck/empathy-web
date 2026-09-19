<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href?: string;
		variant?: 'solid' | 'outline' | 'quiet';
		external?: boolean;
		class?: string;
		onclick?: (event: MouseEvent) => void;
		children: Snippet;
	}

	let {
		href,
		variant = 'solid',
		external = false,
		class: className = '',
		onclick,
		children
	}: Props = $props();

	const shared =
		'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition duration-300 ease-[var(--ease-soft)] hover:-translate-y-0.5 active:translate-y-0';

	const variants = {
		solid:
			'bg-sunset-deep text-bark-900 shadow-lg shadow-ember-400/25 hover:shadow-xl hover:shadow-ember-400/35',
		outline: 'border border-sand-300 text-bark-900 hover:border-ember-400 hover:text-ember-600',
		quiet: 'text-bark-600 hover:text-ember-600'
	};
</script>

{#if href}
	<a
		{href}
		{onclick}
		class="{shared} {variants[variant]} {className}"
		target={external ? '_blank' : undefined}
		rel={external ? 'noopener noreferrer' : undefined}
	>
		{@render children()}
	</a>
{:else}
	<button type="button" {onclick} class="{shared} {variants[variant]} {className}">
		{@render children()}
	</button>
{/if}
