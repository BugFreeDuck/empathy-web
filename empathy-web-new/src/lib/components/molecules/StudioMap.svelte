<script lang="ts">
	import { contacts } from '$data/site';
	import { studioCoords } from '$data/mapStyles';
	import { reveal } from '$lib/actions/reveal';
	import { i18n } from '$i18n';

	let visible = $state(false);
	let mapNode = $state<HTMLDivElement | null>(null);

	/** The map is heavy, so it only mounts once the section scrolls in. */
	function mountWhenNear(node: HTMLElement) {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				visible = true;
				observer.disconnect();
			},
			{ rootMargin: '300px' }
		);

		observer.observe(node);
		return { destroy: () => observer.disconnect() };
	}

	$effect(() => {
		if (!visible || !mapNode) return;

		let cancelled = false;
		let map: import('leaflet').Map | undefined;
		let teardownTouch: (() => void) | undefined;

		// Leaflet touches `window` at import time — load it only in the browser.
		Promise.all([import('leaflet'), import('leaflet/dist/leaflet.css')]).then(([leaflet]) => {
			if (cancelled || !mapNode) return;
			const L = leaflet.default;
			const container = mapNode;

			map = L.map(container, {
				center: [studioCoords.lat, studioCoords.lng],
				zoom: 15,
				scrollWheelZoom: false,
				attributionControl: false,
				zoomControl: true
			});

			/*
			 * Free OSM tiles (no API key). CSS grade below recreates the JSON
			 * look: grey landscape, muted roads, cream water, quieter colour.
			 */
			L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 19
			}).addTo(map);

			const pin = L.divIcon({
				className: 'studio-pin',
				html: '<span class="studio-pin__dot"></span>',
				iconSize: [18, 18],
				iconAnchor: [9, 9]
			});

			L.marker([studioCoords.lat, studioCoords.lng], {
				icon: pin,
				title: 'Empathy'
			}).addTo(map);

			/*
			 * Mobile: one finger scrolls the page; two fingers pan (and pinch-zoom).
			 * Desktop mouse drag is unchanged. Capture phase so dragging is
			 * enabled before Leaflet handles the same touchstart.
			 */
			if (L.Browser.mobile) {
				map.dragging.disable();

				const syncDragging = (e: TouchEvent) => {
					if (e.touches.length >= 2) {
						map?.dragging.enable();
					} else {
						map?.dragging.disable();
					}
				};

				const opts: AddEventListenerOptions = { capture: true, passive: true };
				container.addEventListener('touchstart', syncDragging, opts);
				container.addEventListener('touchend', syncDragging, opts);
				container.addEventListener('touchcancel', syncDragging, opts);

				teardownTouch = () => {
					container.removeEventListener('touchstart', syncDragging, opts);
					container.removeEventListener('touchend', syncDragging, opts);
					container.removeEventListener('touchcancel', syncDragging, opts);
				};
			}

			requestAnimationFrame(() => map?.invalidateSize());
		});

		return () => {
			cancelled = true;
			teardownTouch?.();
			teardownTouch = undefined;
			map?.remove();
			map = undefined;
		};
	});
</script>

<div
	use:mountWhenNear
	use:reveal={{ delay: 120, from: 'right', x: '2.5rem' }}
	class="relative h-full min-h-[22rem] overflow-hidden rounded-[1.75rem] border border-sand-300 bg-sand-200"
>
	{#if visible}
		<div
			bind:this={mapNode}
			class="map-canvas absolute inset-0 h-full w-full"
			role="img"
			aria-label={i18n.m.contact.mapAria}
		></div>
	{/if}

	<a
		href={contacts.addressUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="absolute right-4 bottom-4 z-10 rounded-full bg-sand-50/95 px-5 py-2.5 text-xs tracking-[0.18em] text-bark-900 uppercase shadow-lg backdrop-blur transition hover:text-ember-600"
	>
		{i18n.m.contact.mapOpen}
	</a>
</div>

<style>
	/*
	 * Let single-finger vertical gestures scroll the page instead of
	 * being captured by the map. Two-finger pan is handled in JS above.
	 */
	.map-canvas :global(.leaflet-container) {
		touch-action: pan-y;
	}

	/*
	 * Sand/beige grade — warm, not green. Calm bright park yellows with
	 * lower saturate + a slight peach hue (negative), not a cool green shift.
	 */
	.map-canvas :global(.leaflet-tile-pane) {
		filter: grayscale(0.5) sepia(0.18) hue-rotate(-10deg) contrast(1.1) brightness(0.97)
			saturate(0.78);
	}

	.map-canvas :global(.leaflet-control-zoom a) {
		background: var(--color-sand-50);
		color: var(--color-bark-900);
		border-color: var(--color-sand-300);
	}

	:global(.studio-pin) {
		background: transparent;
		border: none;
	}

	:global(.studio-pin__dot) {
		display: block;
		width: 14px;
		height: 14px;
		margin: 2px;
		border-radius: 9999px;
		background: var(--color-ember-600);
		box-shadow:
			0 0 0 3px color-mix(in srgb, var(--color-sand-50) 90%, transparent),
			0 4px 12px color-mix(in srgb, var(--color-bark-900) 28%, transparent);
	}
</style>
