<script lang="ts">
	import LandingPage from '$templates/LandingPage.svelte';
	import { site, structuredData } from '$data/site';
	import { studioCoords } from '$data/mapStyles';
	import { i18n, type Locale } from '$i18n';
	import { absoluteLocaleUrl, hreflangAlternates } from '$lib/seo/urls';

	let { data } = $props();

	const locale = $derived(data.locale as Locale);

	$effect.pre(() => {
		i18n.setLocale(locale);
	});

	const pageUrl = $derived(absoluteLocaleUrl(locale));
	const alternates = hreflangAlternates();
	const geoPosition = `${studioCoords.lat};${studioCoords.lng}`;
	const icbm = `${studioCoords.lat}, ${studioCoords.lng}`;

	const seo = $derived(i18n.m.meta);
	const ogLocale = $derived(i18n.meta(locale).ogLocale);
	const jsonLd = $derived({
		...structuredData,
		'@graph': structuredData['@graph'].map((node) => {
			if (node['@type'] === 'WebSite') {
				return {
					...node,
					url: pageUrl,
					description: seo.description,
					inLanguage: i18n.meta(locale).htmlLang
				};
			}
			if (Array.isArray(node['@type']) && node['@type'].includes('DanceSchool')) {
				return {
					...node,
					url: pageUrl,
					description: seo.description
				};
			}
			return node;
		})
	});
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords.join(', ')} />
	<meta name="author" content="Empathy" />
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<link rel="canonical" href={pageUrl} />

	{#each alternates as alt (alt.hreflang)}
		<link rel="alternate" hreflang={alt.hreflang} href={alt.href} />
	{/each}

	<meta name="geo.region" content="LT-VL" />
	<meta name="geo.placename" content="Vilnius, Lithuania" />
	<meta name="geo.position" content={geoPosition} />
	<meta name="ICBM" content={icbm} />

	<meta property="og:type" content="website" />
	<meta property="og:locale" content={ogLocale} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={seo.ogTitle} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:image" content={site.seo.ogImage} />
	<meta property="og:image:alt" content={seo.ogImageAlt} />
	<meta property="og:image:width" content="1600" />
	<meta property="og:image:height" content="1067" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.ogTitle} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={site.seo.ogImage} />
	<meta name="twitter:image:alt" content={seo.ogImageAlt} />

	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`}
</svelte:head>

<LandingPage />
