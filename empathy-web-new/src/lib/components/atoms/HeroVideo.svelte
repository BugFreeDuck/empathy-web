<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();

	let videoEl = $state<HTMLVideoElement | null>(null);
	let freezeEl = $state<HTMLCanvasElement | null>(null);
	/** True while resizing — canvas holds the last visible frame. */
	let frozen = $state(false);

	const poster = `${base}/videos/hero-poster.webp`;

	function captureFrame() {
		const video = videoEl;
		const canvas = freezeEl;
		if (!video || !canvas) return false;

		const w = video.videoWidth;
		const h = video.videoHeight;
		if (!w || !h) return false;

		if (canvas.width !== w || canvas.height !== h) {
			canvas.width = w;
			canvas.height = h;
		}

		const ctx = canvas.getContext('2d', { alpha: false });
		if (!ctx) return false;
		ctx.drawImage(video, 0, 0, w, h);
		return true;
	}

	onMount(() => {
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
		let resumeTimer = 0;

		const playSafe = () => {
			if (!videoEl || reduce.matches || frozen) return;
			void videoEl.play().catch(() => {});
		};

		const freeze = () => {
			if (frozen || !videoEl) return;
			if (!captureFrame()) return;
			videoEl.pause();
			frozen = true;
		};

		const thaw = () => {
			if (reduce.matches) return;
			frozen = false;
			requestAnimationFrame(playSafe);
		};

		const onResize = () => {
			freeze();
			window.clearTimeout(resumeTimer);
			resumeTimer = window.setTimeout(thaw, 350);
		};

		if (reduce.matches) {
			// Still grab a frame once metadata is ready so the canvas isn't blank.
			const grab = () => {
				if (captureFrame()) frozen = true;
			};
			if (videoEl?.readyState && videoEl.readyState >= 2) grab();
			else videoEl?.addEventListener('loadeddata', grab, { once: true });
			videoEl?.pause();
		} else {
			playSafe();
		}

		const onMotion = () => {
			if (reduce.matches) {
				captureFrame();
				videoEl?.pause();
				frozen = true;
			} else {
				thaw();
			}
		};

		reduce.addEventListener('change', onMotion);
		window.addEventListener('resize', onResize, { passive: true });

		return () => {
			reduce.removeEventListener('change', onMotion);
			window.removeEventListener('resize', onResize);
			window.clearTimeout(resumeTimer);
		};
	});
</script>

<div class="absolute inset-0 overflow-hidden {className}">
	<img
		src={poster}
		alt=""
		width="1280"
		height="800"
		draggable="false"
		class="absolute inset-0 h-full w-full object-cover object-center"
		decoding="async"
		fetchpriority="low"
	/>

	<canvas
		bind:this={freezeEl}
		class="absolute inset-0 h-full w-full object-cover object-center"
		class:hero-freeze--active={frozen}
		aria-hidden="true"
	></canvas>

	<video
		bind:this={videoEl}
		class="absolute inset-0 h-full w-full object-cover object-center"
		class:hero-video--frozen={frozen}
		poster={poster}
		autoplay
		muted
		loop
		playsinline
		preload="metadata"
		aria-hidden="true"
		disablepictureinpicture
		tabindex="-1"
	>
		<source src="{base}/videos/hero.mp4" type="video/mp4" />
	</video>
</div>

<style>
	canvas {
		display: none;
		pointer-events: none;
		object-fit: cover;
		object-position: center center;
	}

	.hero-freeze--active {
		display: block;
	}

	.hero-video--frozen {
		display: none;
	}
</style>
