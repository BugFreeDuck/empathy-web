<script lang="ts">
	import Button from '$atoms/Button.svelte';
	import Glow from '$atoms/Glow.svelte';
	import Icon from '$atoms/Icon.svelte';
	import ContactRow from '$molecules/ContactRow.svelte';
	import SectionIntro from '$molecules/SectionIntro.svelte';
	import StudioMap from '$molecules/StudioMap.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { contacts, socials } from '$data/site';
	import { i18n } from '$i18n';
	import { registrationUI } from '$lib/stores/registration.svelte';

	const socialIcons = {
		Instagram: 'instagram',
		Facebook: 'facebook',
		YouTube: 'youtube'
	} as const;

	const rows = $derived([
		{
			icon: 'pin' as const,
			label: i18n.m.contact.address,
			value: contacts.address,
			href: contacts.addressUrl,
			external: true
		},
		{
			icon: 'phone' as const,
			label: i18n.m.contact.phone,
			value: contacts.phone,
			href: `tel:${contacts.phone.replace(/\s/g, '')}`
		},
		{
			icon: 'mail' as const,
			label: i18n.m.contact.email,
			value: contacts.email,
			href: `mailto:${contacts.email}`
		}
	]);
</script>

<section id="kontaktai" class="relative isolate overflow-hidden bg-sand-100 py-14 lg:py-20">
	<Glow class="top-0 right-[-10rem] size-[28rem]" color="var(--color-ember-300)" opacity={0.3} />

	<div class="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
		<div class="flex flex-col gap-10">
			<SectionIntro
				eyebrow={i18n.m.contact.eyebrow}
				title={i18n.m.contact.title}
				lead={i18n.m.contact.lead}
				from="left"
			/>

			<div class="flex flex-col">
				{#each rows as row, index (row.label)}
					<div use:reveal={{ delay: 80 + index * 90, from: 'left', x: '1.25rem' }}>
						<ContactRow {...row} />
					</div>
				{/each}
			</div>

			<div use:reveal={{ delay: 200, from: 'fade' }} class="flex flex-col gap-5">
				<span class="text-[0.65rem] tracking-[0.22em] text-bark-400 uppercase">
					{i18n.m.contact.socials}
				</span>
				<ul class="flex flex-wrap gap-3">
					{#each socials as social (social.label)}
						<li>
							<a
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								class="group flex items-center gap-2.5 rounded-full border border-sand-300 py-2.5 pr-5 pl-4 text-sm text-bark-900 transition duration-300 hover:border-ember-400 hover:text-ember-600"
							>
								<span
									class="inline-flex items-center gap-2.5 transition-transform duration-300 ease-[var(--ease-soft)] group-hover:scale-110"
								>
									<Icon name={socialIcons[social.label]} class="size-4" />
									{social.label}
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div use:reveal={{ delay: 280, from: 'up', y: '1rem' }}>
				<Button variant="outline" onclick={() => registrationUI.show()}>
					{i18n.m.contact.cta}
					<Icon name="arrow" class="size-4" />
				</Button>
			</div>
		</div>

		<StudioMap />
	</div>
</section>
