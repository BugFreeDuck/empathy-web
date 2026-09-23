import type { Messages } from '../types';

/** Lithuanian — default / source of truth for copy. */
export const lt = {
	meta: {
		title: 'Empathy — šiuolaikinio šokio studija Vilniuje | pradedantiesiems ir patyrusiems',
		description:
			'Empathy — šiuolaikinio šokio studija Vilniuje, Lietuvoje. Pamokos pradedantiesiems ir patyrusiems šokėjams. Empatija ir savivertė — studijos pagrindas.',
		ogTitle: 'Empathy — šiuolaikinio šokio studija Vilniuje',
		ogImageAlt: 'Empathy šokio studijos erdvė Vilniuje — šiuolaikinis šokis',
		keywords: [
			'šokio studija Vilnius',
			'šiuolaikinis šokis Lietuva',
			'šokiai pradedantiesiems Vilnius',
			'šokio pamokos vaikams ir suaugusiems',
			'Empathy studio',
			'empatija šokis',
			'savivertė per judesį'
		],
		descriptionShort:
			'Šiuolaikinio šokio studija Vilniuje. Užsiėmimai vaikams, paaugliams ir suaugusiems — judesys, ryšys ir sąmoningumas saugioje erdvėje.',
		country: 'Lietuva'
	},
	nav: {
		aria: 'Puslapio sekcijos',
		about: 'Apie mus',
		team: 'Komanda',
		works: 'Mūsų kūryba',
		schedule: 'Tvarkaraštis',
		pricing: 'Kainos',
		contact: 'Kontaktai',
		register: 'Registruotis',
		openMenu: 'Atidaryti meniu',
		closeMenu: 'Uždaryti meniu',
		mobileNav: 'Navigacija',
		language: 'Kalba'
	},
	hero: {
		title: 'Atrask save per judesį',
		lead: 'Šokio užsiėmimai Vilniuje vaikams ir suaugusiems',
		cta: 'Registracija',
		scroll: 'Slinkite žemyn'
	},
	about: {
		eyebrow: 'Apie mus',
		title: 'Erdvė, kurioje judesys prasideda nuo klausymosi',
		paragraphs: [
			'Tai erdvė, kurios pagrindiniai atspirties taškai yra judesys, ryšys ir sąmoningumas. Čia nesikoncentruojame į vieną konkretų šokio stilių — mokomės judėti skirtingai, remdamiesi įvairių šokio stilių bazėmis.',
			'Didelį dėmesį skiriame ryšiui su savimi ir su aplinka: improvizuojame, kūrybiškai dirbame grupėse, porose ir pavieniui. Nemažai laiko skiriame kūno stiprinimui, remdamiesi pilateso ir klasikinio trenažo pagrindais.',
			'Ir, žinoma, viskas vyksta saugioje, empatiškoje aplinkoje, kur skatinama pagarba tiek sau, tiek šalia esančiam.'
		],
		values: [
			{
				title: 'Judesys',
				body: 'Šiuolaikinio ir modernaus šokio pagrindai, improvizacija ir kūno stiprinimas kiekvienoje pamokoje.'
			},
			{
				title: 'Ryšys',
				body: 'Dirbame porose ir grupėse — mokomės girdėti save ir šalia esantį be spaudimo lenktyniauti.'
			},
			{
				title: 'Sąmoningumas',
				body: 'Kalbame apie kūną, emocijas ir ribas. Klysti čia saugu, o augti — smagu.'
			}
		],
		testimonialsEyebrow: 'Atsiliepimai',
		videosEyebrow: 'Mūsų kūryba',
		videosAria: 'Empathy kūrybos galerija',
		videoPlay: 'Paleisti vaizdo įrašą',
		videoClose: 'Uždaryti',
		videoPlayerTitle: 'YouTube vaizdo įrašas',
		testimonials: [
			{
				quote:
					'Negalėčiau įsivaizduoti geresnės vietos, kur galėčiau augti tiek šokyje, tiek kaip asmenybė.',
				name: 'Rugilė',
				role: 'mokinė'
			},
			{
				quote:
					'Olivija nuoširdžiai atsiduoda savo darbui ir stengiasi, jog visi jaustųsi priimti. Jos dėka supratau, kad klysti kartais irgi yra gerai.',
				name: 'Emilija',
				role: 'mokinė'
			},
			{
				quote:
					'Šokiai dukrai lyg terapija — visada grįžta pilna įspūdžių ir gerai pasitreniravusi. Labai motyvuojantis būrelis vaikams.',
				name: 'Joana',
				role: 'mokinės mama'
			},
			{
				quote:
					'Nuostabi mokytoja, nuostabi atmosfera, nuostabi bendruomenė. Vaikas visuomet noriai laukia treniruotės.',
				name: 'Augustė',
				role: 'mokinės mama'
			},
			{
				quote: 'Puikūs šokiai moterims! Įkvepia moteriškumo ir pasitikėjimo.',
				name: 'Aistė',
				role: 'LADIES mokinė'
			}
		]
	},
	team: {
		eyebrow: 'Komanda',
		title: 'Mokytojos, su kuriomis augsite',
		founder: {
			eyebrow: 'Įkūrėja ir mokytoja',
			name: 'Olivija Kazakevičienė',
			quote: 'Empathy erdvę įkūriau norėdama pasidalinti savo meile ir pajauta judesio atžvilgiu.',
			paragraphs: [
				'Šoku nuo septynerių metų ir esu įsitikinusi, kad šokis bei aplinka, kurioje šokau, turėjo didelę įtaką mano asmenybės formavimosi periode. Tai buvo ne vien fizinė veikla — tai buvo įrankis išmokti tvarkytis su savo emocijomis, pagalbininkas ugdant ištvermę, atkaklumą ir savarankiškumą.',
				'Šioje erdvėje ne tik mokau, bet ir pati kiekvieną dieną mokausi iš savo mokinių. Augimas yra beribis, o kai augi kartu su bendraminčiais saugioje aplinkoje, šis procesas tampa ypač malonus.'
			]
		},
		members: {
			emilija: {
				name: 'Emilija',
				bio: 'Veda Mini, Kids ir Juniors grupes. Rami, dėmesinga ir mėgstanti augti kartu su mokiniais.'
			},
			erika: {
				name: 'Erika',
				bio: 'Moko Kids, Juniors ir Ladies day. Judesyje ieško laisvės, ritmo ir šilto ryšio.'
			},
			gabija: {
				name: 'Gabija',
				bio: 'Veda Kids, Juniors ir Ladies day. Kuria saugią erdvę bandyti, klysti ir atrasti.'
			}
		}
	},
	schedule: {
		eyebrow: 'Tvarkaraštis',
		title: 'Pasirink savo grupę ir laiką',
		cta: 'Rezervuoti vietą',
		daysAria: 'Dienos',
		groups: {
			mini: { age: '4–6 m.' },
			kids: { age: '7–10 m.' },
			juniors: { age: '11–15 m.' },
			ladiesDay: { age: '25+ m.' },
			ladiesEvening: { age: '25+ m. · nuo sausio' }
		},
		dayNames: {
			P: 'Pirmadienis',
			A: 'Antradienis',
			T: 'Trečiadienis',
			K: 'Ketvirtadienis',
			Pn: 'Penktadienis'
		},
		notes: [
			'Pamokos vyksta adresu Eitminų g. 20, Vilnius.',
			'Ladies evening startuoja nuo sausio.',
			'Naujiems nariams pirma pamoka nemokama.'
		]
	},
	pricing: {
		eyebrow: 'Kainos',
		title: 'Paprasta ir be smulkaus šrifto',
		lead: 'Rinkis tai, kas atitinka tavo ritmą. Bandomoji pamoka visada nemokama.',
		register: 'Registruotis',
		contact: 'Susisiekite',
		plans: [
			{
				id: 'month',
				name: 'Mėnuo',
				unit: '€ / mėn.',
				summary: 'Reguliarus ritmas — čia prasideda tikras augimas.'
			},
			{
				id: 'private',
				name: 'Individuali',
				unit: '€ / pamoka',
				summary: 'Dėmesys tik tau — arba tau ir tavo porai.'
			}
		]
	},
	contact: {
		eyebrow: 'Kontaktai',
		title: 'Užsuk pasisveikinti',
		lead: 'Turi klausimų apie grupes ar nori pasitarti, nuo ko pradėti? Parašyk arba paskambink — atsakysime tą pačią dieną.',
		address: 'Adresas',
		phone: 'Telefonas',
		email: 'El. paštas',
		socials: 'Socialiniai tinklai',
		cta: 'Registruotis į pamoką',
		mapAria: 'Empathy studijos vieta žemėlapyje',
		mapOpen: 'Atidaryti žemėlapyje'
	},
	footer: {
		page: 'Puslapis',
		reach: 'Susisiek'
	},
	registration: {
		title: 'Registracija į šokio pamokas',
		lead: 'Kviečiame prisijungti prie EMPATHY šokio bendruomenės ir patirti šokio kelionę kartu!',
		submit: 'Pateikti',
		submitting: 'Siunčiama…',
		successTitle: 'Registracija gauta',
		successBody:
			'Ačiū! Susisieksime dėl užsiėmimų pradžios el. paštu arba telefonu. Jei laiško nematai — patikrink SPAM aplanką.',
		errorBody: 'Nepavyko išsiųsti. Bandyk dar kartą arba parašyk empathy.vilnius@gmail.com.',
		close: 'Uždaryti',
		youthSection: 'Užsiėmimai vaikams ir jaunimui',
		ladiesSection: 'Užsiėmimai moterims',
		trialNote: 'Pirma bandomoji pamoka naujiems nariams — nemokama.',
		fields: {
			studentName: { label: 'Mokinio(ės) vardas ir pavardė' },
			birthAge: {
				label: 'Mokinio(ės) amžius ir pilna gimimo data',
				placeholder: 'pvz. 8 m., 2017-03-12'
			},
			experience: { label: 'Šokio patirtis' },
			guardianName: {
				label: 'Vieno iš tėvų/globėjų vardas ir pavardė',
				hint: 'Jei mokinys nepilnametis'
			},
			group: { label: 'Grupė' },
			phone: {
				label: 'Tel. numeris susisiekimui',
				hint: 'Jei mokinys nepilnametis — būtinas globėjo numeris'
			},
			email: {
				label: 'El. paštas susisiekimui',
				hint: 'Prašome tikrinti SPAM aplanką'
			},
			health: {
				label: 'Sveikatos pastabos',
				hint: 'Rimtos traumos ar sutrikimai, susiję su fizine veikla — jei mokytoja turėtų žinoti'
			},
			source: { label: 'Iš kur apie mus sužinojote?' },
			comments: { label: 'Papildomi komentarai arba klausimai' }
		},
		/* Google Form option values stay Lithuanian — only labels are shown in UI. */
		experienceOptions: [
			'Pirma pažintis su šokiais',
			'Šokio patirtis iki metų',
			'Šokio patirtis daugiau nei vieneri metai',
			'Esamas EMPATHY mokinys'
		],
		groupOptions: [
			{
				value: 'MINI (4 - 6 m.) | šiuolaikinis/gatvės',
				label: 'MINI (4–6 m.)',
				hint: 'šiuolaikinis / gatvės',
				section: 'youth'
			},
			{
				value: 'KIDS (7 - 10 m.) | šiuolaikinis/gatvės',
				label: 'KIDS (7–10 m.)',
				hint: 'šiuolaikinis / gatvės',
				section: 'youth'
			},
			{
				value: 'JUNIORS (11 - 15 m.) | šiuolaikinis/gatvės',
				label: 'JUNIORS (11–15 m.)',
				hint: 'šiuolaikinis / gatvės',
				section: 'youth'
			},
			{
				value: 'LADIES day (25+) | moteriška plastika',
				label: 'LADIES day (25+)',
				hint: 'moteriška plastika',
				section: 'ladies'
			},
			{
				value: 'nuo sausio - LADIES evening (25+) | moteriška plastika | kartą per savaitę',
				label: 'LADIES evening (25+)',
				hint: 'nuo sausio · moteriška plastika · kartą per savaitę',
				section: 'ladies'
			}
		],
		sourceOptions: [
			'Facebook',
			'Instagram',
			'Google',
			'Draugai',
			'skillz.lt',
			'Tik Tok',
			'Plakatas/skrajutė'
		],
		otherLabel: 'Kita',
		otherPlaceholder: 'Įrašykite šaltinį',
		errors: {
			studentName: 'Įrašykite mokinio vardą ir pavardę.',
			birthAge: 'Įrašykite amžių ir pilną gimimo datą.',
			experience: 'Pasirinkite šokio patirtį.',
			group: 'Pasirinkite grupę.',
			phone: 'Įrašykite telefono numerį.',
			emailRequired: 'Įrašykite el. pašto adresą.',
			emailInvalid: 'Patikrinkite el. pašto formatą.',
			source: 'Pasirinkite, iš kur apie mus sužinojote.',
			sourceOther: 'Įrašykite šaltinį.'
		}
	}
} as const satisfies Messages;
