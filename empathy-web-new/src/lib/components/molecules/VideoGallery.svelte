<script lang="ts">
	import Icon from '$atoms/Icon.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { aboutVideos, youtubeEmbedSrc, youtubeThumbnail } from '$data/videos';
	import { i18n } from '$i18n';

	let activeId = $state<string | null>(null);
	let dialogEl = $state<HTMLDialogElement | null>(null);

	function open(id: string) {
		activeId = id;
		queueMicrotask(() => dialogEl?.showModal());
	}

	function close() {
		activeId = null;
		if (dialogEl?.open) dialogEl.close();
	}

	$effect(() => {
		if (!dialogEl) return;
		if (activeId && !dialogEl.open) dialogEl.showModal();
		document.body.style.overflow = activeId ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<div aria-label={i18n.m.about.videosAria}>
	<ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each aboutVideos as video, index (video.id)}
			<li use:reveal={{ delay: 60 + index * 70, from: 'up', y: '1.5rem' }} class="min-w-0">
				<button
					type="button"
					onclick={() => open(video.id)}
					aria-label="{i18n.m.about.videoPlay}: {video.title}"
					class="group relative block aspect-video w-full overflow-hidden rounded-[1.25rem] bg-sand-200 focus-visible:outline-offset-4"
				>
					<img
						src={youtubeThumbnail(video.id)}
						alt={video.title}
						width="480"
						height="360"
						loading="lazy"
						decoding="async"
						class="size-full object-cover transition duration-500 ease-[var(--ease-soft)] group-hover:scale-[1.03]"
					/>
					<span
						class="absolute inset-0 bg-bark-900/25 transition duration-300 group-hover:bg-bark-900/35"
						aria-hidden="true"
					></span>
					<span class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
						<span
							class="flex size-14 items-center justify-center rounded-full border border-sand-50/50 bg-bark-900/55 text-sand-50 shadow-lg backdrop-blur-sm transition duration-300 ease-[var(--ease-soft)] group-hover:scale-110"
						>
							<Icon name="play" class="size-6 translate-x-0.5" />
						</span>
					</span>
				</button>
			</li>
		{/each}
	</ul>
</div>

<dialog
	bind:this={dialogEl}
	class="theatre-dialog text-sand-50"
	aria-label={i18n.m.about.videoPlayerTitle}
	onclose={() => {
		activeId = null;
	}}
	onclick={(e) => {
		if (e.target === dialogEl) close();
	}}
>
	{#if activeId}
		<div class="theatre-stage">
			<div class="theatre-frame">
				<iframe
					title={i18n.m.about.videoPlayerTitle}
					src={youtubeEmbedSrc(activeId)}
					class="theatre-iframe"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
					referrerpolicy="strict-origin-when-cross-origin"
				></iframe>
			</div>
			<button type="button" class="theatre-close" onclick={close}>
				{i18n.m.about.videoClose}
			</button>
		</div>
	{/if}
</dialog>

<style>
	.theatre-dialog {
		padding: 0;
		border: none;
		background: transparent;
		max-width: none;
		max-height: none;
	}

	.theatre-dialog[open] {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100vh;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.theatre-dialog::backdrop {
		background: rgb(20 12 12 / 0.82);
		backdrop-filter: blur(6px);
	}

	.theatre-stage {
		position: relative;
		width: min(100vw - 1.5rem, 96rem);
		margin-inline: 0.75rem;
		overflow: hidden;
		border-radius: 1.25rem;
		background: var(--color-bark-900);
		box-shadow: 0 28px 64px -12px rgb(58 36 36 / 0.55);
	}

	.theatre-frame {
		position: relative;
		aspect-ratio: 16 / 9;
		width: 100%;
	}

	.theatre-iframe {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}

	.theatre-close {
		position: absolute;
		top: 0.75rem;
		right: 0.75rem;
		z-index: 10;
		border-radius: 9999px;
		border: 1px solid color-mix(in srgb, var(--color-sand-50) 30%, transparent);
		background: color-mix(in srgb, var(--color-bark-900) 75%, transparent);
		padding: 0.375rem 0.75rem;
		font-size: 0.65rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--color-sand-50);
		backdrop-filter: blur(4px);
		transition: border-color 200ms var(--ease-soft);
	}

	.theatre-close:hover {
		border-color: color-mix(in srgb, var(--color-sand-50) 60%, transparent);
	}
</style>
