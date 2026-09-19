/**
 * Shape of every translation catalog.
 * Add keys here (and in each messages/*.ts file) when introducing new copy.
 */
export type Messages = {
	meta: {
		title: string;
		description: string;
		ogTitle: string;
		ogImageAlt: string;
		keywords: string[];
		descriptionShort: string;
		country: string;
	};
	nav: {
		aria: string;
		about: string;
		schedule: string;
		pricing: string;
		contact: string;
		register: string;
		openMenu: string;
		closeMenu: string;
		mobileNav: string;
		language: string;
	};
	hero: {
		eyebrow: string;
		titleBefore: string;
		titleAccent: string;
		lead: string;
		ctaPrimary: string;
		ctaSecondary: string;
		scroll: string;
		highlights: { value: string; label: string }[];
	};
	about: {
		eyebrow: string;
		title: string;
		paragraphs: string[];
		values: { title: string; body: string }[];
		testimonialsEyebrow: string;
		founder: {
			eyebrow: string;
			name: string;
			quote: string;
			paragraphs: string[];
		};
		testimonials: { quote: string; name: string; role: string }[];
	};
	schedule: {
		eyebrow: string;
		title: string;
		cta: string;
		daysAria: string;
		groups: Record<
			'mini' | 'kids' | 'juniors' | 'open' | 'ladiesDay' | 'ladiesEvening',
			{ age: string }
		>;
		dayNames: Record<'P' | 'A' | 'T' | 'K' | 'Pn', string>;
		notes: string[];
	};
	pricing: {
		eyebrow: string;
		title: string;
		lead: string;
		featured: string;
		register: string;
		note: string;
		plans: {
			id: 'single' | 'month' | 'private';
			name: string;
			unit: string;
			summary: string;
			perks: string[];
		}[];
	};
	contact: {
		eyebrow: string;
		title: string;
		lead: string;
		address: string;
		phone: string;
		email: string;
		socials: string;
		cta: string;
		mapAria: string;
		mapOpen: string;
	};
	footer: {
		page: string;
		reach: string;
	};
	registration: {
		title: string;
		lead: string;
		submit: string;
		submitting: string;
		successTitle: string;
		successBody: string;
		errorBody: string;
		close: string;
		youthSection: string;
		ladiesSection: string;
		trialNote: string;
		fields: {
			studentName: { label: string };
			birthAge: { label: string; placeholder: string };
			experience: { label: string };
			guardianName: { label: string; hint: string };
			group: { label: string };
			phone: { label: string; hint: string };
			email: { label: string; hint: string };
			health: { label: string; hint: string };
			source: { label: string };
			comments: { label: string };
		};
		experienceOptions: string[];
		groupOptions: {
			value: string;
			label: string;
			hint: string;
			section: 'youth' | 'ladies';
		}[];
		/** Display labels only — submission values stay in `registration.ts`. */
		sourceOptions: string[];
		otherLabel: string;
		otherPlaceholder: string;
		errors: {
			studentName: string;
			birthAge: string;
			experience: string;
			group: string;
			phone: string;
			emailRequired: string;
			emailInvalid: string;
			source: string;
			sourceOther: string;
		};
	};
};
