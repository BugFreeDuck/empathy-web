<script lang="ts">
	import Icon, { type IconName } from '$atoms/Icon.svelte';

	interface Props {
		icon: IconName;
		label: string;
		value: string;
		href: string;
		external?: boolean;
	}

	let { icon, label, value, href, external = false }: Props = $props();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="group flex items-center gap-5 border-t border-sand-300 py-5 transition-colors first:border-t-0"
>
	<span
		class="flex size-11 shrink-0 items-center justify-center rounded-full border border-sand-300 text-ember-600 transition duration-300 group-hover:border-ember-500 group-hover:bg-ember-600 group-hover:text-sand-50"
	>
		<Icon name={icon} />
	</span>

	<span class="flex flex-col">
		<span class="text-[0.65rem] tracking-[0.2em] text-bark-400 uppercase">{label}</span>
		<span class="text-lg text-bark-900 transition-colors group-hover:text-ember-600">{value}</span>
	</span>
</a>
