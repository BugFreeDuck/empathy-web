<script lang="ts">
	import AboutSection from '$organisms/AboutSection.svelte';
	import ContactSection from '$organisms/ContactSection.svelte';
	import HeroSection from '$organisms/HeroSection.svelte';
	import PricingSection from '$organisms/PricingSection.svelte';
	import RegistrationModal from '$organisms/RegistrationModal.svelte';
	import ScheduleSection from '$organisms/ScheduleSection.svelte';
	import SiteFooter from '$organisms/SiteFooter.svelte';
	import SiteHeader from '$organisms/SiteHeader.svelte';
</script>

<SiteHeader />

<main>
	<HeroSection />
	<AboutSection />
	<ScheduleSection />
	<PricingSection />
	<ContactSection />
</main>

<SiteFooter />
<RegistrationModal />
