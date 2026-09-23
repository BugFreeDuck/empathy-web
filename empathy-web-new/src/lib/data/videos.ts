/** YouTube videos shown in Mediateka — full @empathyvilnius uploads catalog. */
export interface AboutVideo {
	id: string;
	/** Short display / aria label (not localized). */
	title: string;
}

export const aboutVideos: readonly AboutVideo[] = [
	{ id: 'jCGQUuzG3HY', title: 'CLIMATE | Mgzavrebi – Waltz' },
	{ id: '9GpNCDBIBmM', title: 'VDOH – Timeless' },
	{ id: 'U2jG40bLbec', title: 'VDOH – Echo' },
	{ id: 'vb3K9GtKiY0', title: 'LUNAR GODDESS | solo by Emilija' },
	{ id: 'hzieHx2_6I8', title: 'GUARDIANS OF DREAMS' },
	{ id: 'iGHRgeEEmW8', title: 'EGO | duo by Emilija & Rugilė' },
	{ id: 'H_e2ASqQBJI', title: 'LADIES | Hope Tala – All My Girls Like To Fight' },
	{ id: 'tD-SheChfs0', title: 'Rita Vian & Branko – Sereia Remix' }
];

export function youtubeThumbnail(id: string, quality: 'hq' | 'max' = 'hq'): string {
	return quality === 'max'
		? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
		: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export function youtubeEmbedSrc(id: string): string {
	return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
}
