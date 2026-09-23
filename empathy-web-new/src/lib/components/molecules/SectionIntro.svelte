<script lang="ts">
	import Eyebrow from '$atoms/Eyebrow.svelte';
	import Heading from '$atoms/Heading.svelte';
	import { reveal, type RevealFrom } from '$lib/actions/reveal';

	interface Props {
		eyebrow: string;
		title: string;
		lead?: string;
		align?: 'left' | 'center';
		size?: 'sm' | 'md' | 'lg' | 'xl';
		/** How the intro block enters. */
		from?: RevealFrom;
		class?: string;
	}

	let {
		eyebrow,
		title,
		lead,
		align = 'left',
		size = 'lg',
		from = 'up',
		class: className = ''
	}: Props = $props();
</script>

<div
	class="flex flex-col gap-5 {align === 'center' ? 'items-center text-center' : ''} {className}"
>
	<div use:reveal={{ y: '1rem', from }}>
		<Eyebrow>{eyebrow}</Eyebrow>
	</div>

	<div use:reveal={{ delay: 100, from, y: '1.5rem' }}>
		<Heading
			{size}
			class={align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-2xl'}
			navHeading
		>
			{title}
		</Heading>
	</div>

	{#if lead}
		<p
			use:reveal={{ delay: 200, from: 'fade' }}
			class="max-w-xl text-lg leading-relaxed text-bark-600 {align === 'center' ? 'mx-auto' : ''}"
		>
			{lead}
		</p>
	{/if}
</div>
