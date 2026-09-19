<script lang="ts" module>
	/** Stroked 24px icons, drawn inline so no extra network requests are needed. */
	export const paths = {
		pin: 'M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z M12 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
		phone:
			'M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z',
		mail: 'M3.5 6.5h17v11h-17z M3.5 7l8.5 6 8.5-6',
		arrow: 'M5 12h13 M12.5 6l6 6-6 6',
		instagram:
			'M7.5 3.5h9a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4Z M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z M17 7.2h.01',
		facebook:
			'M6.5 3.5h11a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-11a3 3 0 0 1 3-3Z M15.6 8h-1.7A2 2 0 0 0 11.9 10v10.5 M9.4 13.2h5',
		youtube:
			'M3.5 8.2A2.7 2.7 0 0 1 6.2 5.5h11.6a2.7 2.7 0 0 1 2.7 2.7v7.6a2.7 2.7 0 0 1-2.7 2.7H6.2a2.7 2.7 0 0 1-2.7-2.7z M10.5 9.5l4.5 2.5-4.5 2.5z'
	} as const;

	export type IconName = keyof typeof paths;
</script>

<script lang="ts">
	interface Props {
		name: IconName;
		class?: string;
	}

	let { name, class: className = 'size-5' }: Props = $props();
</script>

<svg
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="1.4"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
	class={className}
>
	<path d={paths[name]} />
</svg>
