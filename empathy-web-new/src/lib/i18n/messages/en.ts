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
		team: 'Team',
		works: 'Our work',
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
		title: 'Discover yourself through movement',
		lead: 'Dance classes in Vilnius for children and adults',
		cta: 'Registration',
		scroll: 'Scroll down'
	},
	about: {
		eyebrow: 'About us',
		title: 'EMPATHY space',
		paragraphs: [
			'Movement, connection and awareness are the values and inspiration of our space. Here we learn not only to dance, but also to know our body better — its possibilities and what we can express through movement. Classes bring together street, contemporary and show dance styles, so we encourage discovering different ways of moving and your unique relationship with dance.',
			'A large part of what we do is improvisation and creation — we move individually, in pairs and in groups, learning to listen to ourselves, sense others and build connection through movement.',
			'Here we learn, make mistakes, grow and support each other, creating an environment grounded in respect for yourself, your body and the person beside you.'
		],
		values: [
			{
				title: 'Movement',
				body: 'We get to know our body, discover different ways of moving and our unique relationship with dance.'
			},
			{
				title: 'Connection',
				body: 'We work in pairs and groups — learning to hear ourselves and each other, and to build connection and friendship.'
			},
			{
				title: 'Awareness',
				body: 'We learn to be mindful of our body, feelings and surroundings, accepting ourselves and growing together.'
			}
		],
		testimonialsEyebrow: 'Testimonials',
		videosEyebrow: 'Our work',
		videosAria: 'Empathy work gallery',
		videoPlay: 'Play video',
		videoClose: 'Close',
		videoPlayerTitle: 'YouTube video',
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
	team: {
		eyebrow: 'Team',
		title: 'Teachers you will grow with',
		founder: {
			eyebrow: 'Founder and teacher',
			name: 'Olivija Kazakevičienė',
			quote: 'I founded the Empathy space to share my love of movement and my feel for it.',
			paragraphs: [
				'I have danced since I was seven and am convinced that dance — and the environment I danced in — shaped who I became. It was never only physical activity: dance became a way to learn to manage emotions and to build endurance, persistence and independence.',
				'In this space I do not only teach — I learn from my students every day. Growth has no limits, and when you grow with like-minded people in a safe environment, the process becomes even more meaningful and pleasant.'
			]
		},
		members: {
			emilija: {
				name: 'Emilija',
				bio: 'Emilija grew up with Empathy — from student to teacher. For her, dance is freedom, self-expression and a way to tell what cannot always be put into words. In teaching, she aims to pass on to her students the same feeling she found in dance — the courage to be yourself, to trust your body and not to be afraid of discovering new sides of yourself.'
			},
			erika: {
				name: 'Erika',
				bio: 'For Erika, teaching is first and foremost about the person — their growth, emotions and self-confidence. She sees teaching as a chance to share what brings her joy and to stand beside each student on their journey. Her greatest inspiration comes in moments when she sees a student’s progress, joy and pride in what they have achieved.'
			},
			gabija: {
				name: 'Gabija',
				bio: 'For Gabija, dance goes hand in hand with steady work, growth and the courage to try. She wants students not to fear making mistakes, because real improvement comes through them. Her classes bring together discipline, respect and freedom to move, and the greatest reward is seeing students grow stronger not only as dancers but as people.'
			}
		}
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
			ladiesDay: { age: 'ages 25+' },
			ladiesEvening: { age: 'ages 25+\nfrom January' }
		},
		dayNames: {
			P: 'Monday',
			A: 'Tuesday',
			T: 'Wednesday',
			K: 'Thursday',
			Pn: 'Friday'
		},
		notes: [
			'All group classes take place at Eitminų g. 20.',
			'MINI group classes last 45 minutes.',
			'LADIES evening group classes last 90 minutes.'
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
				id: 'intro',
				name: 'Introduction',
				priceAmount: 'FREE',
				unit: '',
				summary: 'First class for new members'
			},
			{
				id: 'month',
				name: 'Month',
				unit: '€ / mo.',
				summary: 'Fixed monthly group fee'
			},
			{
				id: 'private',
				name: 'Private',
				unit: '€ / class',
				summary: '1–2 students'
			}
		]
	},
	contact: {
		eyebrow: 'Contact',
		title: 'Discover our space',
		lead: 'Have questions? Write or call — we are happy to answer anything that comes up.',
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
