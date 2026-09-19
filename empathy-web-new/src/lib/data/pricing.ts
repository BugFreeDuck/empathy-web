export interface Plan {
	name: string;
	price: string;
	unit: string;
	summary: string;
	perks: string[];
	featured?: boolean;
}

export const plans: Plan[] = [
	{
		name: 'Viena pamoka',
		price: '10',
		unit: '€ / pamoka',
		summary: 'Ateik pabandyti be jokių įsipareigojimų.',
		perks: ['Bandomoji pamoka nemokama', 'Visos amžiaus grupės', 'Rezervacija nebūtina']
	},
	{
		name: 'Mėnuo',
		price: '60',
		unit: '€ / mėn.',
		summary: 'Reguliarus ritmas — čia prasideda tikras augimas.',
		perks: ['Visos mėnesio pamokos', 'Vieta grupėje išsaugoma', 'Kvietimai į studijos renginius'],
		featured: true
	},
	{
		name: 'Individuali',
		price: '40',
		unit: '€ / pamoka',
		summary: 'Dėmesys tik tau — arba tau ir tavo porai.',
		perks: ['1–2 mokiniai', 'Programa pagal tavo tikslus', 'Laikas derinamas individualiai']
	}
];

export const pricingNote = 'Kainos galioja nuo 2026 m. Turi klausimų? Parašyk — atsakysime tą pačią dieną.';
