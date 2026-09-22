<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href?: string;
		variant?: 'solid' | 'outline' | 'quiet';
		external?: boolean;
		type?: 'button' | 'submit' | 'reset';
		form?: string;
		class?: string;
		onclick?: (event: MouseEvent) => void;
		disabled?: boolean;
		children: Snippet;
	}

	let {
		href,
		variant = 'solid',
		external = false,
		type = 'button',
		form,
		class: className = '',
		onclick,
		disabled = false,
		children
	}: Props = $props();

	const shared =
		'group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition duration-300 ease-[var(--ease-soft)]';

	const variants = {
		solid: 'bg-sunset-deep text-bark-900 shadow-lg shadow-ember-400/25',
		outline: 'border border-ember-600 text-ember-600 hover:border-ember-700 hover:text-ember-700',
		quiet: 'text-bark-600 hover:text-ember-600'
	};

	const label =
		'inline-flex items-center justify-center gap-2 transition-transform duration-300 ease-[var(--ease-soft)] group-hover:scale-110';
</script>

{#if href}
	<a
		{href}
		{onclick}
		class="{shared} {variants[variant]} {className}"
		target={external ? '_blank' : undefined}
		rel={external ? 'noopener noreferrer' : undefined}
	>
		<span class={label}>{@render children()}</span>
	</a>
{:else}
	<button
		{type}
		{form}
		{onclick}
		{disabled}
		class="{shared} {variants[variant]} {className} disabled:pointer-events-none disabled:opacity-60"
	>
		<span class={label}>{@render children()}</span>
	</button>
{/if}
