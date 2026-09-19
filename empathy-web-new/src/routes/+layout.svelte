<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();

	onMount(() => {
		history.scrollRestoration = 'manual';

		const nav = performance.getEntriesByType('navigation')[0] as
			| PerformanceNavigationTiming
			| undefined;

		// Reloads should always start at the top, even if the URL has a hash.
		if (nav?.type === 'reload') {
			if (location.hash) {
				history.replaceState(null, '', `${location.pathname}${location.search}`);
			}
			window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
		}
	});
</script>

{@render children()}
