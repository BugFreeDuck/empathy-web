<script lang="ts">
	interface Props {
		quote: string;
		name: string;
		role: string;
	}

	let { quote, name, role }: Props = $props();
</script>

<figure
	class="flex w-[19rem] shrink-0 flex-col justify-between gap-6 rounded-[1.5rem] border border-sand-300 bg-sand-50 p-7 sm:w-[23rem]"
>
	<blockquote class="text-base leading-relaxed text-bark-600">
		<span class="font-display text-3xl leading-none text-ember-300" aria-hidden="true">“</span>
		{quote}
	</blockquote>

	<figcaption class="text-xs tracking-[0.18em] text-bark-900 uppercase">
		{name}
		<span class="text-bark-400">/ {role}</span>
	</figcaption>
</figure>
