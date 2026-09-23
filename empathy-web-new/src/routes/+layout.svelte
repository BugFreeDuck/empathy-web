<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();

	onMount(() => {
		if ('scrollRestoration' in history) history.scrollRestoration = 'auto';
	});
</script>

{@render children()}
