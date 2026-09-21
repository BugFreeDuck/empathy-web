import type { Messages } from '../types';

/** English */
export const en = {
	meta: {
		title: 'Empathy — contemporary dance studio in Vilnius | beginners and experienced',
		description:
			'Empathy is a contemporary dance studio in Vilnius, Lithuania. Classes for beginners and experienced dancers. Empathy and self-worth are at the heart of the studio.',
		ogTitle: 'Empathy — contemporary dance studio in Vilnius',
		ogImageAlt: 'Empathy dance studio space in Vilnius — contemporary dance',
		keywords: [
			'dance studio Vilnius',
			'contemporary dance Lithuania',
			'dance for beginners Vilnius',
			'dance classes for kids and adults',
			'Empathy studio',
			'empathy dance',
			'self-worth through movement'
		],
		descriptionShort:
			'Contemporary dance studio in Vilnius. Classes for children, teens and adults — movement, connection and awareness in a safe space.',
		country: 'Lithuania'
	},
	nav: {
		aria: 'Page sections',
		about: 'About',
		schedule: 'Schedule',
		pricing: 'Pricing',
		contact: 'Contact',
		register: 'Register',
		openMenu: 'Open menu',
		closeMenu: 'Close menu',
		mobileNav: 'Navigation',
		language: 'Language'
	},
	hero: {
		eyebrow: 'Vilnius · Contemporary dance',
		titleBefore: 'Movement, connection and',
		titleAccent: 'awareness',
		ctaPrimary: 'Book a class',
		ctaSecondary: 'View schedule',
		scroll: 'Scroll down'
	},
	about: {
		eyebrow: 'About us',
		title: 'A space where movement begins with listening',
		paragraphs: [
			'This is a space rooted in movement, connection and awareness. We do not focus on a single dance style — we learn to move in different ways, drawing on foundations from many styles.',
			'We pay close attention to the relationship with ourselves and our surroundings: we improvise, work creatively in groups, pairs and alone. We also dedicate time to strengthening the body through pilates and classical training basics.',
			'And of course, everything happens in a safe, empathetic environment where respect for yourself and those beside you is encouraged.'
		],
		values: [
			{
				title: 'Movement',
				body: 'Foundations of contemporary and modern dance, improvisation and body conditioning in every class.'
			},
			{
				title: 'Connection',
				body: 'We work in pairs and groups — learning to hear ourselves and each other without pressure to compete.'
			},
			{
				title: 'Awareness',
				body: 'We talk about the body, emotions and boundaries. Mistakes are safe here, and growth is joyful.'
			}
		],
		testimonialsEyebrow: 'Testimonials',
		founder: {
			eyebrow: 'Founder and teacher',
			name: 'Olivija Kazakevičienė',
			quote: 'I founded Empathy to share my love and feeling for movement.',
			paragraphs: [
				'I have danced since I was seven and am convinced that dance — and the environment I danced in — shaped me deeply. It was never only physical activity: it was a way to work with emotions, and a companion in building endurance, persistence and independence.',
				'In this space I do not only teach — I learn from my students every day. Growth has no limits, and when you grow with like-minded people in a safe environment, the process becomes especially joyful.'
			]
		},
		testimonials: [
			{
				quote:
					'I could not imagine a better place to grow both in dance and as a person.',
				name: 'Rugilė',
				role: 'student'
			},
			{
				quote:
					'Olivija gives herself fully to her work and makes sure everyone feels welcome. Thanks to her I understood that sometimes it is okay to make mistakes.',
				name: 'Emilija',
				role: 'student'
			},
			{
				quote:
					'Dance is like therapy for my daughter — she always comes back full of impressions and well trained. A very motivating class for kids.',
				name: 'Joana',
				role: "student's mother"
			},
			{
				quote:
					'Wonderful teacher, wonderful atmosphere, wonderful community. My child always looks forward to practice.',
				name: 'Augustė',
				role: "student's mother"
			},
			{
				quote: 'Wonderful dance for women! It inspires femininity and confidence.',
				name: 'Aistė',
				role: 'LADIES student'
			}
		]
	},
	schedule: {
		eyebrow: 'Schedule',
		title: 'Choose your group and time',
		cta: 'Reserve a spot',
		daysAria: 'Days',
		groups: {
			mini: { age: 'ages 4–6' },
			kids: { age: 'ages 7–10' },
			juniors: { age: 'ages 11–15' },
			open: { age: 'ages 16+' },
			ladiesDay: { age: 'ages 25+' },
			ladiesEvening: { age: 'ages 25+ · from January' }
		},
		dayNames: {
			P: 'Monday',
			A: 'Tuesday',
			T: 'Wednesday',
			K: 'Thursday',
			Pn: 'Friday'
		},
		notes: [
			'Classes take place at Eitminų g. 20, Vilnius.',
			'Ladies evening starts in January.',
			'The first class is free for new members.'
		]
	},
	pricing: {
		eyebrow: 'Pricing',
		title: 'Simple, with no fine print',
		lead: 'Choose what fits your rhythm. A trial class is always free.',
		register: 'Register',
		contact: 'Get in touch',
		plans: [
			{
				id: 'month',
				name: 'Month',
				unit: '€ / mo.',
				summary: 'A regular rhythm — where real growth begins.'
			},
			{
				id: 'private',
				name: 'Private',
				unit: '€ / class',
				summary: 'Focus only on you — or you and your partner.'
			}
		]
	},
	contact: {
		eyebrow: 'Contact',
		title: 'Come say hello',
		lead: 'Questions about groups, or unsure where to start? Write or call — we reply the same day.',
		address: 'Address',
		phone: 'Phone',
		email: 'Email',
		socials: 'Social',
		cta: 'Book a class',
		mapAria: 'Empathy studio location on the map',
		mapOpen: 'Open in Maps'
	},
	footer: {
		page: 'Page',
		reach: 'Get in touch'
	},
	registration: {
		title: 'Class registration',
		lead: 'Join the EMPATHY dance community and share the journey with us!',
		submit: 'Submit',
		submitting: 'Sending…',
		successTitle: 'Registration received',
		successBody:
			'Thank you! We will contact you about starting classes by email or phone. If you do not see our message — check your spam folder.',
		errorBody: 'Could not send. Please try again or email empathy.vilnius@gmail.com.',
		close: 'Close',
		youthSection: 'Classes for children and youth',
		ladiesSection: 'Classes for women',
		trialNote: 'The first trial class is free for new members.',
		fields: {
			studentName: { label: 'Student full name' },
			birthAge: {
				label: 'Student age and full date of birth',
				placeholder: 'e.g. 8 y., 2017-03-12'
			},
			experience: { label: 'Dance experience' },
			guardianName: {
				label: 'Parent / guardian full name',
				hint: 'If the student is a minor'
			},
			group: { label: 'Group' },
			phone: {
				label: 'Phone number',
				hint: 'If the student is a minor — guardian’s number is required'
			},
			email: {
				label: 'Email',
				hint: 'Please check your spam folder'
			},
			health: {
				label: 'Health notes',
				hint: 'Serious injuries or conditions related to physical activity — if the teacher should know'
			},
			source: { label: 'How did you hear about us?' },
			comments: { label: 'Additional comments or questions' }
		},
		experienceOptions: [
			'First introduction to dance',
			'Up to one year of dance experience',
			'More than one year of dance experience',
			'Current EMPATHY student'
		],
		groupOptions: [
			{
				value: 'MINI (4 - 6 m.) | šiuolaikinis/gatvės',
				label: 'MINI (ages 4–6)',
				hint: 'contemporary / street',
				section: 'youth'
			},
			{
				value: 'KIDS (7 - 10 m.) | šiuolaikinis/gatvės',
				label: 'KIDS (ages 7–10)',
				hint: 'contemporary / street',
				section: 'youth'
			},
			{
				value: 'JUNIORS (11 - 15 m.) | šiuolaikinis/gatvės',
				label: 'JUNIORS (ages 11–15)',
				hint: 'contemporary / street',
				section: 'youth'
			},
			{
				value: 'OPEN (16+) / nauja choreografija kiekvieną pamoką | kartą per savaitę',
				label: 'OPEN (16+)',
				hint: 'new choreography every class · once a week',
				section: 'youth'
			},
			{
				value: 'LADIES day (25+) | moteriška plastika',
				label: 'LADIES day (25+)',
				hint: 'feminine plastique',
				section: 'ladies'
			},
			{
				value: 'nuo sausio - LADIES evening (25+) | moteriška plastika | kartą per savaitę',
				label: 'LADIES evening (25+)',
				hint: 'from January · feminine plastique · once a week',
				section: 'ladies'
			}
		],
		sourceOptions: [
			'Facebook',
			'Instagram',
			'Google',
			'Friends',
			'skillz.lt',
			'TikTok',
			'Poster / flyer'
		],
		otherLabel: 'Other',
		otherPlaceholder: 'Enter the source',
		errors: {
			studentName: 'Enter the student’s full name.',
			birthAge: 'Enter age and full date of birth.',
			experience: 'Select dance experience.',
			group: 'Select a group.',
			phone: 'Enter a phone number.',
			emailRequired: 'Enter an email address.',
			emailInvalid: 'Check the email format.',
			source: 'Select how you heard about us.',
			sourceOther: 'Enter the source.'
		}
	}
} as const satisfies Messages;
