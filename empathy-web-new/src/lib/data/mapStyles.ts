/**
 * Target look from the Google Maps Styled Map JSON.
 * Google Embed cannot apply these styles without an API key, so StudioMap
 * uses free OSM tiles plus a CSS grade that recreates the same language
 * (landscape #f2f2f2, muted roads, water #f8e7af).
 */
export const mapStyles = [
	{
		featureType: 'administrative',
		elementType: 'labels.text.fill',
		stylers: [{ color: '#444444' }]
	},
	{
		featureType: 'landscape',
		elementType: 'all',
		stylers: [{ color: '#f2f2f2' }]
	},
	{
		featureType: 'poi',
		elementType: 'all',
		stylers: [{ visibility: 'off' }]
	},
	{
		featureType: 'road',
		elementType: 'all',
		stylers: [{ saturation: -100 }, { lightness: 45 }]
	},
	{
		featureType: 'road.highway',
		elementType: 'all',
		stylers: [{ visibility: 'simplified' }]
	},
	{
		featureType: 'road.arterial',
		elementType: 'labels.icon',
		stylers: [{ visibility: 'off' }]
	},
	{
		featureType: 'transit',
		elementType: 'all',
		stylers: [{ visibility: 'off' }]
	},
	{
		featureType: 'water',
		elementType: 'all',
		stylers: [{ color: '#f8e7af' }, { visibility: 'on' }]
	}
] as const;

/** Empathy studio — Eitminų g. 20, Vilnius */
export const studioCoords = {
	lat: 54.739203569487714,
	lng: 25.215930313233716
} as const;
