<script lang="ts">
	import Eyebrow from '$atoms/Eyebrow.svelte';
	import VideoGallery from '$molecules/VideoGallery.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { i18n } from '$i18n';
</script>

<section
	id="darbai"
	class="relative isolate overflow-hidden bg-sand-50 py-14 lg:py-20"
	aria-label={i18n.m.about.videosAria}
>
	<div class="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:px-10">
		<div use:reveal={{ y: '1rem', from: 'left' }}>
			<Eyebrow navHeading>{i18n.m.about.videosEyebrow}</Eyebrow>
		</div>
		<VideoGallery />
	</div>
</section>
