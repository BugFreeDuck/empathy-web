<script lang="ts">
	import Button from '$atoms/Button.svelte';
	import Glow from '$atoms/Glow.svelte';
	import Icon from '$atoms/Icon.svelte';
	import ContactRow from '$molecules/ContactRow.svelte';
	import SectionIntro from '$molecules/SectionIntro.svelte';
	import StudioMap from '$molecules/StudioMap.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { contacts, site, socials } from '$data/site';

	const socialIcons = {
		Instagram: 'instagram',
		Facebook: 'facebook',
		YouTube: 'youtube'
	} as const;

	const rows = [
		{
			icon: 'pin',
			label: 'Adresas',
			value: contacts.address,
			href: contacts.addressUrl,
			external: true
		},
		{
			icon: 'phone',
			label: 'Telefonas',
			value: contacts.phone,
			href: `tel:${contacts.phone.replace(/\s/g, '')}`
		},
		{ icon: 'mail', label: 'El. paštas', value: contacts.email, href: `mailto:${contacts.email}` }
	] as const;
</script>

<section id="kontaktai" class="relative isolate overflow-hidden bg-sand-100 py-28 lg:py-40">
	<Glow class="top-0 right-[-10rem] size-[28rem]" color="var(--color-ember-300)" opacity={0.3} />

	<div class="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
		<div class="flex flex-col gap-10">
			<SectionIntro
				eyebrow="Kontaktai"
				title="Užsuk pasisveikinti"
				lead="Turi klausimų apie grupes ar nori pasitarti, nuo ko pradėti? Parašyk arba paskambink — atsakysime tą pačią dieną."
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
					Socialiniai tinklai
				</span>
				<ul class="flex flex-wrap gap-3">
					{#each socials as social (social.label)}
						<li>
							<a
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center gap-2.5 rounded-full border border-sand-300 py-2.5 pr-5 pl-4 text-sm text-bark-900 transition duration-300 hover:-translate-y-0.5 hover:border-ember-400 hover:text-ember-600"
							>
								<Icon name={socialIcons[social.label]} class="size-4" />
								{social.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div use:reveal={{ delay: 280, from: 'up', y: '1rem' }}>
				<Button href={site.registrationUrl} external>
					Registruotis į pamoką
					<Icon name="arrow" class="size-4" />
				</Button>
			</div>
		</div>

		<StudioMap />
	</div>
</section>
