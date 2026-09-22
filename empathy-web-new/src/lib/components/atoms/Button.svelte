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
		'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition duration-300 ease-[var(--ease-soft)] hover:-translate-y-0.5 active:translate-y-0';

	const variants = {
		solid:
			'bg-sunset-deep text-sand-50 shadow-lg shadow-ember-600/25 hover:shadow-xl hover:shadow-ember-600/35',
		outline: 'border border-sand-300 text-bark-900 hover:border-ember-500 hover:text-ember-700',
		quiet: 'text-bark-600 hover:text-ember-700'
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
	<button {type} {form} {onclick} {disabled} class="{shared} {variants[variant]} {className} disabled:pointer-events-none disabled:opacity-60">
		{@render children()}
	</button>
{/if}
