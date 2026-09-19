<script lang="ts">
	import LandingPage from '$templates/LandingPage.svelte';
	import { site, structuredData } from '$data/site';
	import { studioCoords } from '$data/mapStyles';
	import { i18n } from '$i18n';

	const geoPosition = `${studioCoords.lat};${studioCoords.lng}`;
	const icbm = `${studioCoords.lat}, ${studioCoords.lng}`;

	const seo = $derived(i18n.m.meta);
	const ogLocale = $derived(i18n.meta().ogLocale);
	const jsonLd = $derived({
		...structuredData,
		'@graph': structuredData['@graph'].map((node) => {
			if (node['@type'] === 'WebSite') {
				return {
					...node,
					description: seo.description,
					inLanguage: i18n.meta().htmlLang
				};
			}
			if (Array.isArray(node['@type']) && node['@type'].includes('DanceSchool')) {
				return {
					...node,
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
	<link rel="canonical" href={site.url} />

	<meta name="geo.region" content="LT-VL" />
	<meta name="geo.placename" content="Vilnius, Lithuania" />
	<meta name="geo.position" content={geoPosition} />
	<meta name="ICBM" content={icbm} />

	<meta property="og:type" content="website" />
	<meta property="og:locale" content={ogLocale} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={seo.ogTitle} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:url" content={site.url} />
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
