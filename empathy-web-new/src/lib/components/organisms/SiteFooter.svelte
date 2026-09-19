<script lang="ts">
	import Wordmark from '$atoms/Wordmark.svelte';
	import NavLinks from '$molecules/NavLinks.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { contacts, socials } from '$data/site';
	import { i18n } from '$i18n';
</script>

<footer class="border-t border-sand-300 bg-sand-50">
	<div
		class="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-start lg:justify-between lg:px-10"
	>
		<div use:reveal={{ from: 'up', y: '1.5rem' }} class="flex max-w-xs flex-col gap-4">
			<Wordmark showTagline />
			<p class="text-sm leading-relaxed text-bark-600">{i18n.m.meta.descriptionShort}</p>
		</div>

		<div use:reveal={{ delay: 100, from: 'up', y: '1.5rem' }} class="flex flex-col gap-6">
			<span class="text-[0.65rem] tracking-[0.22em] text-bark-400 uppercase">{i18n.m.footer.page}</span>
			<NavLinks orientation="column" />
		</div>

		<div use:reveal={{ delay: 180, from: 'up', y: '1.5rem' }} class="flex flex-col gap-6">
			<span class="text-[0.65rem] tracking-[0.22em] text-bark-400 uppercase">{i18n.m.footer.reach}</span>
			<div class="flex flex-col gap-2 text-sm text-bark-900">
				<a href="tel:{contacts.phone.replace(/\s/g, '')}" class="hover:text-ember-600">
					{contacts.phone}
				</a>
				<a href="mailto:{contacts.email}" class="hover:text-ember-600">{contacts.email}</a>
				<a
					href={contacts.addressUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-ember-600"
				>
					{contacts.address}
				</a>
			</div>

			<ul class="flex gap-5 text-xs tracking-[0.16em] text-bark-600 uppercase">
				{#each socials as social (social.label)}
					<li>
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							class="hover:text-ember-600"
						>
							{social.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</footer>
